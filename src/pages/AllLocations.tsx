import React from "react";
import {Header} from "../components/Header/Header.tsx";
import {LocationCard} from "../components/LocationCard/LocationCard.tsx";
import "./AllLocations.css";

export const AllLocations: React.FC = () => {
    return (
        <React.Fragment>
            <Header topTitle="All locations" bottomTitle="Acme locations"/>
            <div className="allLocations">
                <LocationCard usersCount={114} locationName="Acme HQ" views={5} time="2030" />
            </div>
        </React.Fragment>
    )
}