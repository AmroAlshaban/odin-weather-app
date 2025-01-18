export function iso8601ToLongDate(isoDate) {
    const monthNumbersToWords = [
        'January', 'February', 'March', 'April',
        'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December',
    ];

    const weekDays = [
        'Sunday', 'Monday', 'Tuesday',
        'Wednesday', 'Thursday', 'Friday', 'Saturday',
    ];


    const splitYYYY_MM_DD = isoDate.split('-').map(val => parseInt(val, 10));
    const year = splitYYYY_MM_DD[0];
    const month = splitYYYY_MM_DD[1];
    const day = splitYYYY_MM_DD[2];

    const dateObject = new Date(year, month - 1, day);
    const daySuffix = ((day) => {
        if (day >= 11 && day <= 13) {
            return 'th';
        };

        switch (day % 10) {
            case 1:
                return 'st';
            case 2:
                return 'nd';
            case 3:
                return 'rd';
            default:
                return 'th';
        };
    })(day);

    return `${weekDays[dateObject.getDay()]}, ${monthNumbersToWords[month - 1]} ${day}${daySuffix}, ${year}`;
};