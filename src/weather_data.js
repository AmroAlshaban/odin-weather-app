let currentWeatherData = null;
let previousWeatherData = null;


export function getCurrentWeatherData() {
    return currentWeatherData;
};


export function getPreviousWeatherData() {
    return previousWeatherData;
};


export function setCurrentWeatherData(newData) {
    currentWeatherData = newData;
};


export function setPreviousWeatherData(newData) {
    previousWeatherData = newData;
};