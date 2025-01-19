import { convertMilitaryTimeToAmPm } from "./military_to_am_pm.js";
import { celsiusFahrenheitConverter } from "./celsius_fahrenheit";
import { iso8601ToLongDate } from "./iso8601_to_long_date";
import { millimetersInchesConverter } from "./millimeters_inches_converter";
import { mphKPHConverter } from "./mph_kph_converter.js";
import { windDirCardinalDirConverter } from "./wind_angle_cardinal.js";
import { toTemperature, toDistance, toSpeed } from "../../unit_formats/variables.js";
import { getUnitFormat } from "../../unit_formats/us_metric.js";


export function propertyUnits(property, value) {
    // const properties = [
    //     "datetime", "datetimeEpoch", "temp", "feelslike",
    //     "humidity", "dew", "precip", "precipprob",
    //     "snow", "snowdepth", "windgust",
    //     "windspeed", "winddir", "pressure", "visibility",
    //     "cloudcover", "solarradiation", "solarenergy", "uvindex",
    //     "severerisk", "conditions", "icon", "stations", "source"
    // ];

    let formattedProperty;

    switch (true) {
        case property === 'datetime':
            if (value.split(':').length > 1) {
                formattedProperty = convertMilitaryTimeToAmPm(value);
            } else if (value.split('-').length > 1) {
                formattedProperty = iso8601ToLongDate(value);
            } else {
                throw new Error("Invalid value.");
            };

            break;
        case (property === 'temp' || property === 'feelslike' || property === 'dew'):
            if (getUnitFormat() === 'metric') {
                formattedProperty = `${celsiusFahrenheitConverter({temp: value, to: toTemperature})}°`;
            } else {
                formattedProperty = `${value}°`;
            };

            break;
        
        case (property === 'humidity' || property === 'precipprob' || property === "cloudcover"):
            formattedProperty = `${value}%`;

            break;

        case (property === 'precip' || property === 'snow' || property === 'snowdepth'):
            if (getUnitFormat() === 'metric') {
                formattedProperty = millimetersInchesConverter({distance: value, to: toDistance});
            } else {
                formattedProperty = `${value} in`;
            };

            break;

        case (property === 'windspeed' || property === 'windgust' || property === 'visibility'):
            if (getUnitFormat() === 'metric') {
                formattedProperty = mphKPHConverter({unit: value, to: toSpeed});
            } else {
                formattedProperty = `${value} mph`;
            };

            break;

        case (property === 'winddir'):
            formattedProperty = windDirCardinalDirConverter(value);

            break;

        case (property === 'windspeeddir' || property === 'windgustdir'):
            if (property === 'windspeeddir') {
                formattedProperty = `${propertyUnits('winddir', value[0])} ${propertyUnits('windspeed', value[1])}`;
            } else {
                formattedProperty = `${propertyUnits('winddir', value[0])} ${propertyUnits('windgust', value[1])}`;
            };
            
            break;
        
        case property === 'pressure':
            formattedProperty = `${value} hPa`;

            break;

        case property === 'solarradiation':
            formattedProperty = `${value} W/m²`;

            break;

        case property === 'solarenergy':
            formattedProperty = `${value} kWh/m²`;

            break;

        case property === 'precipandprob':
            formattedProperty = `${propertyUnits('precip', value[0])} | ${propertyUnits('precipprob', value[1])}`;

            break;
        
        default:
            formattedProperty = value;

            break;
    };

    return formattedProperty;
};