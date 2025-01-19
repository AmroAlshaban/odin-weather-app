import { CurrentPlusWeather } from "./current_plus_weather";
import { GetWeatherDataMixin } from "./mixins.js";


export class DayWeather extends CurrentPlusWeather {
    static properties = [
        "datetime", "datetimeEpoch", "tempmax", "tempmin",
        "temp", "feelslikemax", "feelslikemin", "feelslike",
        "dew", "humidity", "precip", "precipprob",
        "precipcover", "preciptype", "snow", "snowdepth",
        "windgust", "windspeed", "winddir", "pressure",
        "cloudcover", "visibility", "solarradiation", "solarenergy",
        "uvindex", "severerisk", "sunrise", "sunriseEpoch",
        "sunset", "sunsetEpoch", "moonphase", "conditions",
        "description", "icon", "stations", "source", "hours",
    ];

    #classIdentity = 'DayWeather';
    #data;
    #subData;

    constructor(location, dataJSON, dayNumber=0) {
        super(location, dataJSON);
        this.#data = dataJSON;
        this.#subData = dataJSON.days[dayNumber];
    };

    hour(n) {
        return new HourlyWeather(this.location, this.#subData.hours[n], this.#data);
    };
};

Object.assign(DayWeather.prototype, GetWeatherDataMixin);