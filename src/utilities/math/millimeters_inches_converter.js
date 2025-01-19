export function millimetersInchesConverter({
    distance, 
    to='i'
}) {
    if (to.toLowerCase() === 'm' || 
        to.toLocaleLowerCase() === 'millimeter' ||
        to.toLocaleLowerCase() === 'millimeters') {
        return `${(distance * 25.4).toFixed(2)} mm`;
    } else if (to.toLocaleLowerCase() === 'i' || 
               to.toLocaleLowerCase() === 'inch' ||
               to.toLocaleLowerCase() === 'inches') {
        return `${(distance / 25.4).toFixed(2)} in`;
    } else {
        throw new Error("Error: invalid data entry.");
    };
};