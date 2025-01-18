export async function getPreviousWeather(location, rangeDateISO8601) {
    try {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/${rangeDateISO8601[0]}/${rangeDateISO8601[1]}?key=LYKH5D9GNTQN9GG6XALYBGJAQ`);
        
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