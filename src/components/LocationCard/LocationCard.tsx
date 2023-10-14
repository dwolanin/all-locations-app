import React, {useState} from "react";
import "./LocationCard.css";
import {EditLocationIcon} from "./EditLocationIcon/EditLocationIcon.tsx";
import {LocationModal} from "./LocationModal/LocationModal.tsx";
import {LocationDetails} from "./LocationDetails/LocationDetails.tsx";
import {Location} from "../../api/useAllLocations.ts";

type Props = {
    location: Location
}

export const LocationCard: React.FC<Props> = ({location}) => {
    const [hover, setHover] = useState(false);
    const [open, toggleModal] = useState(false);

    return (
        <div className="locationCard"
             onMouseEnter={() => setHover(true)}
             onMouseLeave={() => setHover(false)}
             onClick={() => toggleModal(true)}
        >
            {hover && <EditLocationIcon/>}
            <h4>{location.name}</h4>
            <LocationDetails location={location} views={5}/>
            <LocationModal open={open} location={location} closeModal={() => {
                toggleModal(false)
            }}/>
        </div>
    )
}