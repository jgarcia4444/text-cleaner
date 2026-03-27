import { ReactNode } from "react";
import { PiArrowsInLineHorizontal ,PiArrowsInLineVertical, PiTextAa } from "react-icons/pi";

interface ActionButton {
    label: string,
    icon: ReactNode,
    buttonAction: () => void
}

export default function ActionButtons({messyText, cleanText}: {messyText: string, cleanText: (newText: string) => void}) {

    const removeExtraSpaces = (): void => {
        let splitMessyText = messyText.split(" ");
        let filteredText = splitMessyText.filter(ele => ele !== "");
        let rejoinedText = filteredText.join(" ");
        cleanText(rejoinedText)
    }

    const removeLineBreaks = (): void => {
        var match = /\r|\n/.exec(messyText);
        if (match) {
            let splitMessyText = messyText.split(match[0]);
            let filteredText = splitMessyText.filter(ele => ele !== "");
            let rejoinedText = filteredText.join(" ");
            cleanText(rejoinedText)
        }
    }

    const changeCasing = (): void => {
        const isUpperCase = messyText === messyText.toUpperCase();
        cleanText(isUpperCase ? messyText.toLowerCase() : messyText.toUpperCase())
    }

    const renderButtons = (): ReactNode => {
        const actionButtons: ActionButton[] = [
            {label: "Remove Extra Spaces", icon: <PiArrowsInLineHorizontal size={32} color="#00F" />, buttonAction: removeExtraSpaces},
            {label: "Remove Line Breaks", icon: <PiArrowsInLineVertical size={32} color="#00F" />, buttonAction: removeLineBreaks},
            {label: "Change Casing", icon: <PiTextAa size={32} color="#00F" />, buttonAction: changeCasing},
        ]
        return actionButtons.map((actionButtonInfo, i) => {
            const {label, icon, buttonAction} = actionButtonInfo
            return (
                <div key={`${label}-${i}`} className="flex flex-col items-center justify-center gap-2">    
                    <div onClick={buttonAction} className="p-4 rounded shadow bg-blue-400 hover:cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-md hover:opacity-80 hover:bg-blue-300 active:scale-95 active:bg-blue-500">
                        {icon}
                    </div>
                    <small>{label}</small>
                </div>
            )
        })
    }

    return (
        <div className="flex flex-col items-center justify-center gap-4">
            {renderButtons()}
        </div>
    )

}