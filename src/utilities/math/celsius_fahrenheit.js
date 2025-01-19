export function celsiusFahrenheitConverter({
    temp,
    to='c',
}) {
    if (to.toLowerCase() === 'f' || to.toLowerCase() === 'fahrenheit') {
        return (32 + (9/5)*temp).toFixed(2);
    } else if (to.toLowerCase() === 'c' || to.toLowerCase() === 'celsius') {
        return ((temp - 32) * 5/9).toFixed(2);
    } else {
        throw new Error("Error: invalid data entry.");
    };
};