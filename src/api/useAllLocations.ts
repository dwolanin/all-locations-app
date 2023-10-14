import {useEffect, useState} from "react";

export type Location = {
    id: string;
    createdAt: string;
    name: string;
    userCount: number;
    description: string
}
export const useAllLocations = () => {
    const [allLocations, setAllLocations] = useState<Location[]>([]);

    useEffect(() => {
        fetch('https://6033c4d8843b15001793194e.mockapi.io/api/locations')
            .then((response) => response.json())
            .then((data) => setAllLocations(data))
    }, []);

    return allLocations;
}