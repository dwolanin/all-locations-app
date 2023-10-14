// Modal as a separate component
import React, { useEffect, useRef } from "react";
import "./LocationModal.css"
import {Location} from "../../../api/useAllLocations.ts";
import {Icon} from "../../Icon/Icon.tsx";
import {LocationDetails} from "../LocationDetails/LocationDetails.tsx";
import {Button} from "../../Button/Button.tsx";

type Props = {
    open?: boolean;
    closeModal: () => void;
    location: Location
    views: number
}

export const LocationModal: React.FC<Props> = ({ open, closeModal, location, views }) => {
    const ref = useRef<HTMLDialogElement>(null);
    const {name, description} = location;

    useEffect(() => {
        if (open) {
            ref.current?.showModal();
        } else {
            ref.current?.close();
        }
    }, [open]);

    return (
        <dialog
            ref={ref}
            onCancel={closeModal}
            className="locationModal"
        >
            <div className="modalHeader">
                <div className="modalHeaderTitle">{name}</div>
                <div onClick={(ev) => {
                    ev.stopPropagation();
                    closeModal();
                }}><Icon name="close" /></div>
            </div>
            <div className="modalBody">
                <LocationDetails location={location} views={views} />

                <div className="modalDescription">
                    <div className="modalDescriptionTitle">Description:</div>
                    <div>{description}</div>
                </div>
            </div>
            <div className="modalFooter">
                <Button onClick={(ev) => {
                    ev.stopPropagation();
                    closeModal();
                }}>Done</Button>
            </div>
        </dialog>
    );
}
