export function celsiusFahrenheitConverter({
    temp,
    from='f',
}) {
    if (from.toLowerCase() === 'f' || from.toLocaleLowerCase() === 'fahrenheit') {
        return ((temp - 32) * 5/9).toFixed(2);
    } else if (from.toLocaleLowerCase() === 'c' || from.toLocaleLowerCase() === 'celsius') {
        return (32 + (9/5)*temp).toFixed(2);
    } else {
        throw new Error("Error: invalid data entry.");
    };
};