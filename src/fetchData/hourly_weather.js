import { CurrentPlusWeather } from "./current_plus_weather.js";
import { GetWeatherDataMixin } from "./mixins.js";


export class HourlyWeather extends CurrentPlusWeather {
    static properties = [
        "datetime", "datetimeEpoch", "temp", "feelslike",
        "humidity", "dew", "precip", "precipprob",
        "snow", "snowdepth", "preciptype", "windgust",
        "windspeed", "winddir", "pressure", "visibility",
        "cloudcover", "solarradiation", "solarenergy", "uvindex",
        "severerisk", "conditions", "icon", "stations", "source"
    ];

    #classIdentity = 'HourlyWeather';
    #data;
    #subData;

    constructor(location, dataJSON, fullData={}) {
        super(location, fullData);
        this.#data = fullData;
        this.#subData = dataJSON;
    };
};

Object.assign(HourlyWeather.prototype, GetWeatherDataMixin);