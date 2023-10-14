import React, {useState} from "react";
import {LocationDetail} from "./LocationDetail/LocationDetail";
import "./LocationCard.css";
import {EditLocationIcon} from "./EditLocationIcon/EditLocationIcon.tsx";
import {getFormattedTime} from "./utils/getFormattedTime.ts";

type Props = {
    locationName: string;
    usersCount: number;
    time: string;
    views: number;
}

export const LocationCard: React.FC<Props> = ({locationName, time, usersCount, views}) => {
    const [hover, setHover] = useState(false);

    return (
        <div className="locationCard" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <h4>{locationName}</h4>
            <LocationDetail text={`${usersCount} Users`} icon="users"/>
            <LocationDetail text={getFormattedTime(time)} icon="timezone"/>
            <LocationDetail text={`${views} Views`} icon="views"/>
            {hover && <EditLocationIcon/>}
        </div>
    )
}