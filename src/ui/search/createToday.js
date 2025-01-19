import { 
    createAllData,
    createTitleCard,
    createDayDate,
    createData,
    createDataSummary,
    createDataSummaryComponent,
    createH4Element,
    createDetailsGrid,
    createDetailsGridListContainer,
    createDetailsGridListElement
} from "./createHourly";
import { addSummaryEventListeners } from "./event_listeners/summaryEventListeners";
import { propertyUnits } from "../../utilities/math/property_units";
import { createNewElement } from "../../utilities/helpers/create_new_element";


export function createDisplayTodayData(weatherData) {
    const summaryComponentClassNames = [
        'time', 'temperature', 'temperature-icon', 'temperature-description',
        'rain-icon', 'rain-percentage', 'wind-icon', 'wind-speed', 'details-arrow',
    ];

    const summaryComponentStatic = [
        true, true, true, false, true, true, true, false, true,
    ];

    const summaryComponentIcon = [
        false, false, true, false, true, false, true, false, true,
    ];

    const summaryComponentProperties = [
        'datetimeshort', 'temp', null, 'description',
        null, 'precipprob', null, 'windspeeddir', null
    ];

    const detailsComponentClassNames = [
        'feels-like', 'wind', 'windgust', 'humidity',
        'uvindex', 'rainamount', 'moonphase', 'pressure',
        'cloudcover', 'dew', 'snow', 'solarradiation',
    ];

    const detailsComponentTitles = [
        'Feels Like', 'Wind Speed', 'Wind Gust', 'Humidity',
        'UV Index', 'Rain', 'Severe Risk', 'Pressure',
        'Cloud Cover', 'Dew', 'Snow', 'Solar Radiation',
    ];

    const detailsComponentProperties = [
        'feelslike', 'windspeeddir', 'windgustdir', 'humidity',
        'uvindex', 'precipandprob', 'severerisk', 'pressure',
        'cloudcover', 'dew', 'snow', 'solarradiation',
    ];

    const titleCard = createTitleCard({
        displayType: 'today',
        location: weatherData.address(),
    });

    const dayDate = createDayDate(propertyUnits('datetime', weatherData.get('datetime')));

    const summaryComponents = Array.from({ length: summaryComponentClassNames.length }, (_, subIndex) => {
        // console.log(summaryComponentProperties[subIndex]);

        const summaryComponent = createDataSummaryComponent({
            className: summaryComponentClassNames[subIndex],
            isStatic: summaryComponentStatic[subIndex],
            isIcon: summaryComponentIcon[subIndex],
            iconName: summaryComponentClassNames[subIndex] === 'temperature-icon' 
                    ? weatherData.get('icon')
                    : null,
            text: propertyUnits(
                summaryComponentProperties[subIndex], 
                weatherData.get(summaryComponentProperties[subIndex])
            ),
        });

        return summaryComponent;
    });

    const summary = createDataSummary(summaryComponents);
    addSummaryEventListeners(summary);

    const h4 = createH4Element(weatherData.get('description'));

    const liComponents = Array.from({ length: detailsComponentClassNames.length }, (_, subIndex) => {
        const liComponent = createDetailsGridListElement({
            liClassName: detailsComponentClassNames[subIndex],
            metricTitle: detailsComponentTitles[subIndex],
            metricValue: propertyUnits(detailsComponentProperties[subIndex], weatherData.get(detailsComponentProperties[subIndex])),
        });

        return liComponent;
    });

    const listContainer = createDetailsGridListContainer(liComponents);
    const details = createDetailsGrid(listContainer);
    const data = createData({
        summaryElement: summary, 
        h4Element: h4, 
        detailsGrid: details,
        eventListeners: NaN,
    });

    const displayHourlyData = createNewElement({
        className: 'display_hourly_data',
    });

    displayHourlyData.append(titleCard, dayDate, data);
    return displayHourlyData;
};