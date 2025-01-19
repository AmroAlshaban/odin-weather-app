import { getCurrentWeatherData } from "../../../weather_data.js"; 
import { createDisplayForecastData } from "../createForecast.js";
import { createSection3 } from "../createSection3.js";
import { CurrentPlusWeather } from "../../../fetch_data/current_plus_weather.js";


export function addForecastEventListeners(node) {
    
    node.addEventListener("click", () => {

        const data = getCurrentWeatherData();
        if (data !== null) {
            const weatherObject = new CurrentPlusWeather(data.address, data);
            const displayForecast = createDisplayForecastData(weatherObject);
            const section3 = createSection3(displayForecast);
    
            const mainNode = document.querySelector("main");
            mainNode.appendChild(section3);
        };
    });

};
