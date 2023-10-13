import React from "react";
import {Icon} from "../../Icon/Icon";
import type {Icons} from "../../Icon/types";
import "./LocationDetail.css"

type Props = {
    icon: Icons;
    text: string;
}
export const LocationDetail: React.FC<Props> = ({ icon, text }) => {
    return (
        <div className="locationDetail">
            <Icon name={icon} />
            <span>{text}</span>
        </div>
    )
}