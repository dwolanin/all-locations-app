import React, {useState} from "react";
import "./LocationCard.css";
import {EditLocationIcon} from "./EditLocationIcon/EditLocationIcon.tsx";
import {LocationDetails} from "../LocationDetails/LocationDetails.tsx";
import {Location} from "../../api/useAllLocations.ts";

type Props = {
    location: Location,
    views: number
    onModalOpen: () => void
}

export const LocationCard: React.FC<Props> = ({location, views, onModalOpen}) => {
    const [hover, setHover] = useState(false);

    return (
        <div className="locationCard"
             onMouseEnter={() => setHover(true)}
             onMouseLeave={() => setHover(false)}
             onClick={onModalOpen}
        >
            {hover && <EditLocationIcon/>}
            <h4>{location.name}</h4>
            <LocationDetails location={location} views={views}/>
        </div>
    )
}