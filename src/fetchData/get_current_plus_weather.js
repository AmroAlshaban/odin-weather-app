export async function getCurrentPlusWeather(location) {
    try {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=32EVKX7B5ZR5SL7GX7X5JZHLM`);
        
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