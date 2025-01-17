export function millimetersInchesConverter({
    distance, 
    from='m'
}) {
    if (from.toLowerCase() === 'm' || 
        from.toLocaleLowerCase() === 'millimeter' ||
        from.toLocaleLowerCase() === 'millimeters') {
        return `${(distance / 25.4).toFixed(2)} in`;
    } else if (from.toLocaleLowerCase() === 'i' || 
               from.toLocaleLowerCase() === 'inch' ||
               from.toLocaleLowerCase() === 'inches') {
        return `${(distance * 25.4).toFixed(2)} mm`;
    } else {
        throw new Error("Error: invalid data entry.");
    };
};