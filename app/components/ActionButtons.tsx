import { ReactNode } from "react";
import { PiArrowsInLineHorizontal } from "react-icons/pi";

interface ActionButton {
    label: string,
    icon: ReactNode,
    buttonAction: () => void
}

export default function ActionButtons({messyText, cleanText}: {messyText: String, cleanText: (newText: string) => void}) {

    const removeExtraSpaces = (): void => {
        let splitMessyText = messyText.split(" ");
        let filteredText = splitMessyText.filter(ele => ele !== "");
        let rejoinedText = filteredText.join(" ");
        cleanText(rejoinedText)
    }

    const renderButtons = (): ReactNode => {
        const actionButtons: ActionButton[] = [
            {label: "", icon: <PiArrowsInLineHorizontal size={32} color="#00F" />, buttonAction: removeExtraSpaces},
            {label: "", icon: <PiArrowsInLineHorizontal size={32} color="#00F" />, buttonAction: removeExtraSpaces},
            {label: "", icon: <PiArrowsInLineHorizontal size={32} color="#00F" />, buttonAction: removeExtraSpaces},
            {label: "", icon: <PiArrowsInLineHorizontal size={32} color="#00F" />, buttonAction: removeExtraSpaces},
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