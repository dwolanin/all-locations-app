import React from "react";
import "./Button.css"

type Props = {
    onClick: (ev: React.MouseEvent<HTMLButtonElement>) => void,
    children: string
}

export const Button: React.FC<Props> = ({ onClick, children }) => {
    return (
        <button className="button" onClick={onClick}>
            {children}
        </button>
    )
}