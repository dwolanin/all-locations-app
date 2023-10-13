import React from "react";
import {LocationDetail} from "./LocationDetail/LocationDetail";
import "./LocationCard.css";

type Props = {
    locationName: string;
    usersCount: number;
    time: string;
    views: number;
}

export const LocationCard: React.FC<Props> = ({locationName, time, usersCount, views}) => {
    return (
        <div className="locationCard">
            <h4>{locationName}</h4>
            <LocationDetail text={`${usersCount} Users`} icon="users" />
            <LocationDetail text={time} icon="timezone" />
            <LocationDetail text={`${views} Views`} icon="views" />
        </div>
    )
}