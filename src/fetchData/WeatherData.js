const GetWeatherDataMixin = {
    get(key) {
        const properties = CurrentPlusWeather.properties;
        key = key.toLowerCase();

        if (properties.includes(key)) {
            return this._getData()[key];
        } else {
            throw new Error(`Invalid key: '${key}' not found in properties.`);
        };
    }
};


class CurrentPlusWeather {
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


class DayWeather extends CurrentPlusWeather {
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

class HourlyWeather extends CurrentPlusWeather {
    #classIdentity = 'HourlyWeather';
    #data;
    #subData;

    constructor(location, dataJSON, fullData={}) {
        super(location, fullData);
        this.#data = fullData;
        this.#subData = dataJSON;
    };

    // extra methods;
};

Object.assign(HourlyWeather.prototype, GetWeatherDataMixin);


async function getCurrentPlusWeather(location) {
    try {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=32EVKX7B5ZR5SL7GX7X5JZHLM`);
        
        if (!response.ok) {
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        };

        const dataJSON = await response.json();
        return dataJSON;
    } catch (error) {
        return {
            error: true,
            message: error.message || "Something went wrong",
        };
    };
};