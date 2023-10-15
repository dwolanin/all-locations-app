import {useEffect, useState} from "react";

export type Location = {
    id: string;
    createdAt: string;
    name: string;
    userCount: number;
    description: string
}

const URL = 'https://6033c4d8843b15001793194e.mockapi.io/api/locations';

export const useAllLocations = () => {
    const [allLocations, setAllLocations] = useState<Location[]>([]);

    // Used useEffect and fetch to speed it up, it is recommended to use tanstack-query or similar and get rid of useEffect here
    // Might be good to consider some caching strategy then
    // Also loading and error handling is missing, might be implemented for a better UX
    useEffect(() => {
        fetch(URL)
            .then((response) => response.json())
            .then((data) => setAllLocations(data))
    }, []);

    return allLocations;
}