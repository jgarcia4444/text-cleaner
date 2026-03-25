import { ReactNode } from "react";

interface ActionButton {
    label: string,
    icon: ReactNode,
    buttonAction: () => void
}

export default function ActionButtons({messyText, cleanText}: {messyText: String, cleanText: (newText: string) => void}) {

    const removeExtraSpaces = (): void => {
        let splitMessyText = messyText.split(" ");
        let rejoinedText = splitMessyText.join("");
        cleanText(rejoinedText)
    }

    const renderButtons = (): ReactNode => {
        const actionButtons: ActionButton[] = [
            {label: "", icon: "", buttonAction: removeExtraSpaces},
            {label: "", icon: "", buttonAction: removeExtraSpaces},
            {label: "", icon: "", buttonAction: removeExtraSpaces},
            {label: "", icon: "", buttonAction: removeExtraSpaces},
        ]
        return actionButtons.map((actionButtonInfo, i) => {

        })
    }

    return (
        <div className="flex flex-col items-center justify-center gap-4">
            {renderButtons()}
        </div>
    )

}