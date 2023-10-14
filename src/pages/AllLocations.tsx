import React from "react";
import {Header} from "../components/Header/Header.tsx";
import {LocationCard} from "../components/LocationCard/LocationCard.tsx";
import "./AllLocations.css";
import {useAllLocations} from "../api/useAllLocations.ts";

export const AllLocations: React.FC = () => {
    const allLocations = useAllLocations();

    return (
        <React.Fragment>
            <Header topTitle="All locations" bottomTitle="Acme locations"/>
            <div className="allLocations">
                {allLocations.map(({name, createdAt, id, userCount, description}) => (
                    <LocationCard key={id}
                                  usersCount={userCount}
                                  locationName={name}
                                  views={5}
                                  time={new Date(createdAt).getUTCDate().toString()} />
                ))}
            </div>
        </React.Fragment>
    )
}