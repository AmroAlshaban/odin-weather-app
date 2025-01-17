export function mphKPHConverter({
    unit,
    from='m'
}) {
    if (from.toLowerCase() === 'm' || 
        from.toLowerCase() === 'mi' ||
        from.toLocaleLowerCase() === 'mile' ||
        from.toLocaleLowerCase() === 'miles') {
        return `${(unit * 1.60934).toFixed(2)} kph`;
    } else if (from.toLocaleLowerCase() === 'k' || 
            from.toLocaleLowerCase() === 'km' || 
            from.toLocaleLowerCase() === 'kilometer' ||
            from.toLocaleLowerCase() === 'kilometers') {
        return `${(unit / 1.60934).toFixed(2)} mph`;
    } else {
        throw new Error("Error: invalid data entry.");
    };
};