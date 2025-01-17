import { celsiusFahrenheitConverter } from "./celsius_fahrenheit";
import { iso8601ToLongDate } from "./iso8601_to_long_date";
import { millimetersInchesConverter } from "./millimeters_inches_converter";
import { mphKPHConverter } from "./mph_kmh_converter.js";
import { windDirCardinalDirConverter } from "./wind_angle_cardinal.js";


export function propertyUnits(property, value) {
    const properties = [
        "datetime", "datetimeEpoch", "temp", "feelslike",
        "humidity", "dew", "precip", "precipprob",
        "snow", "snowdepth", "windgust",
        "windspeed", "winddir", "pressure", "visibility",
        "cloudcover", "solarradiation", "solarenergy", "uvindex",
        "severerisk", "conditions", "icon", "stations", "source"
    ];

    let fromTempFormat = 'f';
    let fromPrecipFormat = 'i';
    let fromDirFormat = 'm';

    let formattedProperty;

    switch (true) {
        case property === 'datetime':
            if (value.split(':').length > 1) {
                formattedProperty = celsiusFahrenheitConverter(value);
            } else if (value.split('-') > 1) {
                formattedProperty = iso8601ToLongDate(value);
            } else {
                throw new Error("Invalid valie.");
            };

            break;
        case (property === 'temp' || property === 'feelslike' || property === 'dew'):
            if (fromTempFormat === 'f') {
                formattedProperty = `${celsiusFahrenheitConverter({temp: value, from: fromTempFormat})}°`;
            } else {
                formattedProperty = `${value}°`;
            };

            break;
        
        case (property === 'humidity' || property === 'precipprob'):
            formattedProperty = `${value}%`;

            break;

        case (property === 'precip' || property === 'snow' || property === 'snowdepth'):
            if (fromPrecipFormat === 'i') {
                formattedProperty = millimetersInchesConverter({temp: value, from: fromPrecipFormat});
            } else {
                formattedProperty = `${value} in`;
            };

            break;

        case (property === 'windspeed' || property === 'windgust'):
            ...
    }
};