export function mphKPHConverter({
    unit,
    to='k'
}) {
    if (to.toLowerCase() === 'm' || 
        to.toLowerCase() === 'mi' ||
        to.toLocaleLowerCase() === 'mile' ||
        to.toLocaleLowerCase() === 'miles') {
        return `${Math.round(((unit / 1.60934) * 100)) / 100} mph`;
    } else if (to.toLowerCase() === 'k' || 
            to.toLowerCase() === 'km' || 
            to.toLowerCase() === 'kilometer' ||
            to.toLowerCase() === 'kilometers') {
            return `${Math.round((unit * 1.60934 * 100)) / 100} kph`;
    } else {
        throw new Error("Error: invalid data entry.");
    };
};