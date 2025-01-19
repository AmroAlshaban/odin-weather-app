export function mphKPHConverter({
    unit,
    from='m'
}) {
    if (from.toLowerCase() === 'm' || 
        from.toLowerCase() === 'mi' ||
        from.toLocaleLowerCase() === 'mile' ||
        from.toLocaleLowerCase() === 'miles') {
        return `${Math.round((unit * 1.60934 * 100)) / 100} kph`;
    } else if (from.toLowerCase() === 'k' || 
            from.toLowerCase() === 'km' || 
            from.toLowerCase() === 'kilometer' ||
            from.toLowerCase() === 'kilometers') {
        return `${Math.round(((unit / 1.60934) * 100)) / 100} mph`;
    } else {
        throw new Error("Error: invalid data entry.");
    };
};