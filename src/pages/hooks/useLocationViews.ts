import {useState} from "react";

type Views = {
    [k: string]: number
}
export const useLocationViews = () => {
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

    return {views, bumpViews};
}