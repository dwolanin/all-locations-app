import React from "react";
import {LocationDetail} from "./LocationDetail/LocationDetail.tsx";
import {getFormattedTime} from "./utils/getFormattedTime.ts";
import {Location} from "../../../api/useAllLocations.ts";

type Props = {
    location: Location
    views: number;
};

export const LocationDetails: React.FC<Props> = ({location, views}) => {
    const { userCount, createdAt } = location;
    return (
        <React.Fragment>
            <LocationDetail text={`${userCount} Users`} icon="users"/>
            <LocationDetail text={getFormattedTime(createdAt)} icon="timezone"/>
            <LocationDetail text={`${views} Views`} icon="views"/>
        </React.Fragment>
    );
}