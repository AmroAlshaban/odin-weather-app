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