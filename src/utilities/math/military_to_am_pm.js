export function convertMilitaryTimeToAmPm(time) {
    const militaryTime = parseInt(time.split(':')[0], 10);

    if (militaryTime === 0) {
        return `12 AM`;
    } else if (militaryTime <= 11) {
        return `${militaryTime} AM`;
    } else if (militaryTime === 12) {
        return '12 PM';
    };

    return `${militaryTime - 12} PM`;
};