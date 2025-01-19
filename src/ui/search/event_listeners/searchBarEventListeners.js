import { getCurrentPlusWeather } from "../../../fetch_data/get_current_plus_weather";
// import { getPreviousWeather } from "../../../fetchData/get_previous_weather";
// import { getLastMonthYesterdayISO8601 } from "../../../utilities/math/get_last_month_yesterday_iso8601";
import { setCurrentWeatherData } from "../../../weather_data";
import { setPreviousWeatherData } from "../../../weather_data";


export function addSearchBarEventListeners(node) {

    node.addEventListener("keydown", async (event) => {
        if (event.key === 'Enter' && node.value.trim() !== '') {
            const query = node.value.trim();
            node.value = '';

            let currentData;

            try {
                currentData = await getCurrentPlusWeather(query);
    
                setCurrentWeatherData(currentData);
                document.querySelector("#hourly").dispatchEvent(new Event("click"));
            } catch (error) {
                console.error("Error fetching weather data:", error);
            };           
        };
    });

};


export function addSearchImageEventListeners(node) {

    node.addEventListener("click", () => {
        const inputField = document.querySelector("#search_bar_write");
        inputField.dispatchEvent(new Event("keydown"));
    });

};