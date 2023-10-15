import Timezone from './icons/Timezone.svg'
import Edit from './icons/Edit.svg'
import Close from './icons/Close.svg'
import Users from './icons/Users.svg'
import Views from './icons/Views.svg'
import React from "react";

export type Icons = "close" | 'edit' | 'timezone' | 'users' | 'views';

type Props = {
    name: Icons
}

export const Icon: React.FC<Props> = ({name}) => {
    switch (name) {
        case "close":
            return <Close/>;
        case "edit":
            return <Edit/>;
        case "timezone":
            return <Timezone/>;
        case "users":
            return <Users/>;
        case "views":
            return <Views/>;
        default:
            return null;
    }
}