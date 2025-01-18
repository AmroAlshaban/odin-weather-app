import { addTodayEventListeners } from "./todayEventListeners";
import { addHourlyEventListeners } from "./hourlyEventListeners.js";
import { addPreviousDateEventListeners } from "./previousDateEventListeners.js";
import { addForecastEventListeners } from "./forecastEventListeners.js";


export function getNavigationEventListeners(navigationName) {
    navigationName = navigationName.toLowerCase();

    switch (true) {
        case navigationName === 'today':
            return addTodayEventListeners;
        
        case navigationName === 'hourly':
            return addHourlyEventListeners;

        case navigationName === 'previousdate':
            return addPreviousDateEventListeners;

        case navigationName === 'forecast':
            return addForecastEventListeners;
        
        default:
            return NaN;
    };
};