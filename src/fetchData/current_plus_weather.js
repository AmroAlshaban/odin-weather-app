// import { DayWeather } from "./day_weather";
// import { HourlyWeather } from "./hourly_weather";
import { GetWeatherDataMixin } from "./mixins.js";


export class CurrentPlusWeather {
    #classIdentity = 'CurrentPlusWeather';
    #data;
    #subData;

    constructor(location, dataJSON) {
        this.location = location;
        this.#data = dataJSON;
        this.#subData = dataJSON;
    };

    today() {
        return new DayWeather(this.location, this.#data, 0);
    };

    forecast(n) {
        if (n === 0) {
            return this.today();
        } else if (n > 14) {
            throw new Error("Invalid day forecast: forecast data available up to 14 days ahead.");
        };

        return new DayWeather(this.location, this.#data, n);
    };

    keys() {
        return Object.keys(this.#data);
    };

    longitude() {
        if (this.#classIdentity === 'CurrentPlusWeather') {
            return this.#data.longitude;
        };

        return new CurrentPlusWeather(this.location, this.#data).longitude();
    };

    latitude() {
        if (this.#classIdentity === 'CurrentPlusWeather') {
            return this.#data.latitude;
        };

        return new CurrentPlusWeather(this.location, this.#data).latitude();
    };

    currentConditions() {
        if (this.#classIdentity === 'CurrentPlusWeather') {
            return new HourlyWeather(this.location, this.#data.currentConditions, this.#data);
        } else if (['DayWeather', 'HourlyWeather'].includes(this.#classIdentity)) {
            return this;
        };

        return null;
    };

    _getData() {
        return this.#subData;
    };

    _getClassIdentity() {
        return this.#classIdentity;
    };
};

// -----------------------

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