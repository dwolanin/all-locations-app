import React, {useState} from "react";
import {Header} from "../components/Header/Header.tsx";
import {LocationCard} from "../components/LocationCard/LocationCard.tsx";
import "./AllLocations.css";
import {useAllLocations} from "../api/useAllLocations.ts";
import {useLocationViews} from "./hooks/useLocationViews.ts";
import {LocationModal} from "./LocationModal/LocationModal.tsx";

export const AllLocations: React.FC = () => {
    // locations kept in internal State, no need to use Redux here for now
    const allLocations = useAllLocations();
    // decided to keep views in separate state, not sure how it has to be persisted in db
    const {views, bumpViews} = useLocationViews();
    const [locationId, setLocationId] = useState<string | null>(null);

    const onModalOpen = (id: string) => {
        setLocationId(id);
        bumpViews(id);
    }

    return (
        <React.Fragment>
            <Header topTitle="All locations" bottomTitle="Acme locations"/>
            <div className="allLocations">
                {allLocations.map((location) => (
                    <LocationCard key={location.id}
                                  location={location}
                                  views={views[location.id] || 0}
                                  onModalOpen={() => onModalOpen(location.id)}
                    />
                ))}
                <LocationModal locationId={locationId} locations={allLocations}
                               views={views} closeModal={() => {
                    setLocationId(null)
                }}/>
            </div>
        </React.Fragment>
    )
}