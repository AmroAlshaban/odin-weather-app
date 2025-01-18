import { getCurrentWeatherData } from "../../../weather_data.js";
import { createDisplayHourlyData } from "../createHourly.js";
import { createSection3 } from "../createSection3.js";


export function addHourlyEventListeners(node) {
    
    node.addEventListener("click", () => {

        const data = getCurrentWeatherData();
        const displayHourly = createDisplayHourlyData(data)
        const section3 = createSection3(displayHourly);

        const mainNode = document.querySelector("main");
        mainNode.appendChild(section3);
    });

};