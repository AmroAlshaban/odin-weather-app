export const GetWeatherDataMixin = {
    get(key) {
        if (key === null) {
            return '';
        };

        let properties;

        if (this.constructor.name === 'DayWeather') {
            properties = DayWeather.properties;
        } else if (this.constructor.name === 'HourlyWeather') {
            properties = HourlyWeather.properties;
        } else {
            throw new Error(`Invalid class identity: '${this.constructor.name}'`);
        };

        key = key.toLowerCase();
        
        if (key === 'windspeeddir') {
            return this._includeWindDir('windspeed');
        } else if (key === 'windgustdir') {
            return this._includeWindDir('windgust');
        } else if (key === 'precipandprob') {
            return this._includePrecipProb('precip');
        } else if (properties.includes(key)) {
            return this._getData()[key];
        } else {
            throw new Error(`Invalid key: '${key}' not found in properties for ${this._getClassIdentity()}.`);
        };
    },

    _includeWindDir(speedOrGust) {
        speedOrGust = speedOrGust.toLowerCase();

        return ['windspeed', 'windgust'].includes(speedOrGust)
                ? [this.get('winddir'), this.get(speedOrGust)]
                : null;
    },

    _includePrecipProb(precipOrProb) {
        precipOrProb = precipOrProb.toLowerCase();

        return precipOrProb === 'precip' 
        ? [this.get(precipOrProb), this.get('precipprob')] 
        : null;
    },
};