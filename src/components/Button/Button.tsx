import React from "react";
import "./Button.css"

type Props = {
    onClick: (ev: React.MouseEvent<HTMLButtonElement>) => void,
    children: string
}

// extracted Button component, usually we use Buttons from our component lib/design system in dialogs as well
export const Button: React.FC<Props> = ({ onClick, children }) => {
    return (
        <button className="button" onClick={onClick}>
            {children}
        </button>
    )
}