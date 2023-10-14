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