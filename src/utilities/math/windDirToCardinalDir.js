export function windDirCardinalDirConverter({
    value,
    from='angle',
    to='cardinal',
}) {
    value = from.toLowerCase() === 'angle' ? value % 360 : value.toUpperCase();

    const angleToCardinal = {
        '348.75-11.25': 'N',
        '11.25-33.75': 'NNE',
        '33.75-56.25': 'NE',
        '56.25-78.75': 'ENE',
        '78.75-101.25': 'E',
        '101.25-123.75': 'ESE',
        '123.75-146.25': 'SE',
        '146.25-168.75': 'SSE',
        '168.75-191.25': 'S',
        '191.25-213.75': 'SSW',
        '213.75-236.25': 'SW',
        '236.25-258.75': 'WSW',
        '258.75-281.25': 'W',
        '281.25-303.75': 'WNW',
        '303.75-326.25': 'NW',
        '326.25-348.75': 'NNW'
    };

    const cardinalToAngle = Object.fromEntries(
        Object.entries(angleToCardinal).map(([key, value]) => [value, key])
    );
    
    if (from.toLowerCase() === 'angle' && to.toLowerCase() === 'cardinal') {

        for (let i = 1; i < 16; i++) {
            const stringRange = Object.keys(angleToCardinal)[i]
            const range = stringRange.split('-').map(num => parseFloat(num));
            if (range[0] <= value && value < range[1]) {
                return angleToCardinal[stringRange];
            };
        };

        return angleToCardinal[Object.keys(angleToCardinal)[0]];

    } else if (from.toLowerCase() === 'cardinal' && to.toLowerCase() === 'angle') {
        
        if (!cardinalToAngle[value]) {
            throw new Error("Invalid cardinal direction value");
        };

        const range = cardinalToAngle[value].split('-').map(num => parseFloat(num));

        if (range[0] > range[1]) {
            return `${0.0}°`;
        };

        return `${((range[0] + range[1]) / 2).toFixed(2)}°`;

    } else {
        throw new Error("Invalid parameters: 'from' and 'to' parameters can only be 'cardinal' or 'angle', exclusively.");
    };
};