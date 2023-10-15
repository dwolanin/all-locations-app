// I forgot a bit about the different formatting in the designs, so it stay like this
// Date handling is broken in JS, so additional lib might be needed (Temporal API, where are you)
export const getFormattedTime = (date: string): string => {
    const options = {
            timeZone: 'Europe/London',
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
        } as const;

    const formatter = new Intl.DateTimeFormat([], options);

    return formatter.format(new Date(date));
}