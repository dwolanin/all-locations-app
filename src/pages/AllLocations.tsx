import React from "react";
import {Header} from "../components/Header/Header.tsx";
import {LocationCard} from "../components/LocationCard/LocationCard.tsx";
import "./AllLocations.css";
import {useAllLocations} from "../api/useAllLocations.ts";
import {useLocationViews} from "./hooks/useLocationViews.ts";

export const AllLocations: React.FC = () => {
    const allLocations = useAllLocations();
    const {views, bumpViews} = useLocationViews();

    return (
        <React.Fragment>
            <Header topTitle="All locations" bottomTitle="Acme locations"/>
            <div className="allLocations">
                {allLocations.map((location) => (
                    <LocationCard key={location.id}
                                  location={location}
                                  views={views[location.id] || 0}
                                  bumpViews={() => bumpViews(location.id)}
                    />
                ))}
            </div>
        </React.Fragment>
    )
}