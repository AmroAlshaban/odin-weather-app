import { getCurrentWeatherData } from "../../../weather_data.js"; 
import { createDisplayTodayData } from "../createToday.js";
import { createSection3 } from "../createSection3.js";
import { CurrentPlusWeather } from "../../../fetch_data/current_plus_weather.js";
import { setCurrentSearchNavigation } from "../../../open_search_navigation.js";


export function addTodayEventListeners(node) {

    node.addEventListener("click", () => {

        const data = getCurrentWeatherData();
        if (data !== null) {
            const weatherObject = new CurrentPlusWeather(data.address, data);
            const displayForecast = createDisplayTodayData(weatherObject.today());
            const section3 = createSection3(displayForecast);
    
            const mainNode = document.querySelector("main");
            mainNode.appendChild(section3);
        } else {
            const section3 = createSection3();
    
            const mainNode = document.querySelector("main");
            mainNode.appendChild(section3);
        };

        setCurrentSearchNavigation('today');
    });

};