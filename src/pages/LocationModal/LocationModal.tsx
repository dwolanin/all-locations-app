// Modal as a separate component
import React, { useEffect, useRef } from "react";
import "./LocationModal.css"
import {Location} from "../../api/useAllLocations.ts";
import {Icon} from "../../components/Icon/Icon.tsx";
import {LocationDetails} from "../../components/LocationDetails/LocationDetails.tsx";
import {Button} from "../../components/Button/Button.tsx";
import {Views} from "../hooks/useLocationViews.ts";

type Props = {
    locationId: string | null;
    closeModal: () => void;
    locations: Location[]
    views: Views
}

export const LocationModal: React.FC<Props> = ({ locationId, closeModal, locations, views }) => {
    const ref = useRef<HTMLDialogElement>(null);
    const location = locationId && locations.find(location => location.id === locationId)

    useEffect(() => {
        if (locationId) {
            ref.current?.showModal();
        } else {
            ref.current?.close();
        }
    }, [locationId]);

    if (!location) {
        ref.current?.close();
        return null;
    }

    const {name, description} = location;

    const onButtonClick = (ev: React.MouseEvent<HTMLElement>) => {
        ev.stopPropagation();
        closeModal();
    }

    // decided to play with HTML dialog element here, React.Portal will do the trick as well and after all might be better choice
    // but wanted to play with dialog as I had no opportunity since now
    return (
        <dialog
            ref={ref}
            onCancel={closeModal}
            className="locationModal"
        >
            <div className="modalHeader">
                <div className="modalHeaderTitle">{name}</div>
                <div onClick={onButtonClick}><Icon name="close" /></div>
            </div>
            <div className="modalBody">
                <LocationDetails location={location} views={views[locationId]} />

                <div className="modalDescription">
                    <div className="modalDescriptionTitle">Description:</div>
                    <div>{description}</div>
                </div>
            </div>
            <div className="modalFooter">
                <Button onClick={onButtonClick}>Done</Button>
            </div>
        </dialog>
    );
}
