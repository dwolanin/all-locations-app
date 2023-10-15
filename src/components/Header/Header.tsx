import React from "react";
import "./Header.css";

type Props = {
    topTitle: string;
    bottomTitle: string;
};

// fix a11y
export const Header: React.FC<Props> = ({topTitle, bottomTitle}) => {
    return (
        <div className="header">
            <span className="topTitle">{topTitle}</span>
            <span className="bottomTitle">{bottomTitle}</span>
        </div>
    )
}