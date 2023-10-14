import React, {useState} from "react";
import "./LocationCard.css";
import {EditLocationIcon} from "./EditLocationIcon/EditLocationIcon.tsx";
import {LocationModal} from "./LocationModal/LocationModal.tsx";
import {LocationDetails} from "./LocationDetails/LocationDetails.tsx";
import {Location} from "../../api/useAllLocations.ts";

type Props = {
    location: Location,
    views: number
    bumpViews: () => void
}

export const LocationCard: React.FC<Props> = ({location, views, bumpViews}) => {
    const [hover, setHover] = useState(false);
    const [open, toggleModal] = useState(false);

    const onModalOpen = () => {
        toggleModal(true);
        bumpViews();
    }

    return (
        <div className="locationCard"
             onMouseEnter={() => setHover(true)}
             onMouseLeave={() => setHover(false)}
             onClick={onModalOpen}
        >
            {hover && <EditLocationIcon/>}
            <h4>{location.name}</h4>
            <LocationDetails location={location} views={views}/>
            <LocationModal open={open} location={location} views={views} closeModal={() => {
                toggleModal(false)
            }}/>
        </div>
    )
}