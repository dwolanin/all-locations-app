import {useEffect, useState} from "react";

export type Location = {
    id: string;
    createdAt: string;
    name: string;
    userCount: number;
    description: string
}

type Views = {
    [k: string]: number
}
export const useAllLocations = () => {
    const [allLocations, setAllLocations] = useState<Location[]>([]);
    const [views, setViews] = useState<Views>({});

    const bumpViews = (id: string) => {
        setViews((prevState: Views) => {
            if (prevState[id]) {
                return{
                    ...prevState,
                    [id]: prevState[id] + 1
                };
            } else {
                return {
                    ...prevState,
                    [id]: 1
                }
            }
        })
    }

    useEffect(() => {
        fetch('https://6033c4d8843b15001793194e.mockapi.io/api/locations')
            .then((response) => response.json())
            .then((data) => setAllLocations(data))
    }, []);

    return {
        allLocations,
        views,
        bumpViews
    };
}