import React from "react";
import {LocationDetail} from "./LocationDetail/LocationDetail.tsx";
import {getFormattedTime} from "./utils/getFormattedTime.ts";
import {Location} from "../../api/useAllLocations.ts";

type Props = {
    location: Location
    views: number;
};

export const LocationDetails: React.FC<Props> = ({location, views}) => {
    const { userCount, createdAt } = location;

    // in standard app these cases would be handled by i18n tooling, but again, no time for that now
    const getViewsLabel = (views: number) => {
        if (views === 1) {
            return "View";
        }

        return 'Views'
    }

    const getUsersLabel = (userCount: number) => {
        if (userCount === 1) {
            return "User";
        }

        return 'Users'
    }

    return (
        <React.Fragment>
            <LocationDetail text={`${userCount} ${getUsersLabel(location.userCount)}`} icon="users"/>
            <LocationDetail text={getFormattedTime(createdAt)} icon="timezone"/>
            <LocationDetail text={`${views} ${getViewsLabel(views)}`} icon="views"/>
        </React.Fragment>
    );
}