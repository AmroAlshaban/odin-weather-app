export function iso8601ToShortDate(isoDate) {
    const weekDays = [
        'Sun', 'Mon', 'Tue',
        'Wed', 'Thu', 'Fri', 'Sat',
    ];


    const splitYYYY_MM_DD = isoDate.split('-').map(val => parseInt(val, 10));
    const year = splitYYYY_MM_DD[0];
    const month = splitYYYY_MM_DD[1];
    const day = splitYYYY_MM_DD[2];

    const dateObject = new Date(year, month - 1, day);

    return `${weekDays[dateObject.getDay()]} ${day}`;
};