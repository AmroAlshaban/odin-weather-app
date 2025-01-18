import { getCurrentWeatherData } from "../../../weather_data.js"; 
import { createDisplayHourlyData } from "../createHourly.js";
import { createSection3 } from "../createSection3.js";
import { CurrentPlusWeather } from "../../../fetchData/current_plus_weather.js";


export function addHourlyEventListeners(node) {
    
    node.addEventListener("click", () => {

        const data = getCurrentWeatherData();
        const weatherObject = new CurrentPlusWeather(data.address, data);
        const displayHourly = createDisplayHourlyData(weatherObject.today());
        const section3 = createSection3(displayHourly);

        const mainNode = document.querySelector("main");
        mainNode.appendChild(section3);
    });

};