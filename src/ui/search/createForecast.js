import { 
    createDisplayHourlyData,
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


export function createDisplayForecastData(weatherData) {
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
        displayType: 'forecast',
        location: weatherData.address(),
    });

    const allSummaryComponents = Array.from({ length: 14 }, (_, index) => {
        const summaryComponents = Array.from({ length: summaryComponentClassNames.length }, (_, subIndex) => {
            const summaryComponent = createDataSummaryComponent({
                className: summaryComponentClassNames[subIndex],
                isStatic: summaryComponentStatic[subIndex],
                isIcon: summaryComponentIcon[subIndex],
                iconName: summaryComponentClassNames[subIndex] === 'temperature-icon' 
                        ? weatherData.forecast(index + 1).get('icon')
                        : null,
                text: propertyUnits(
                    summaryComponentProperties[subIndex], 
                    weatherData.forecast(index + 1).get(summaryComponentProperties[subIndex])
                ),
            });
    
            return summaryComponent;
        });

        return summaryComponents;
    });

    const allSummary = Array.from({ length: 14 }, (_, index) => {
        const summary = createDataSummary(allSummaryComponents[index]);

        return summary;
    });

    const allH4 = Array.from({ length: 14 }, (_, index) => {
        const h4 = createH4Element(weatherData.forecast(index + 1).get('description'));

        return h4;
    });

    const allLiComponents = Array.from({ length: 14 }, (_, index) => {
        const liComponents = Array.from({ length: detailsComponentClassNames.length }, (_, subIndex) => {
            const liComponent = createDetailsGridListElement({
                liClassName: detailsComponentClassNames[subIndex],
                metricTitle: detailsComponentTitles[subIndex],
                metricValue: propertyUnits(detailsComponentProperties[subIndex], weatherData.forecast(index + 1).get(detailsComponentProperties[subIndex])),
            });
    
            return liComponent;
        });

        return liComponents;
    });

    const allListContainer = Array.from({ length: 14 }, (_, index) => {
        const listContainer = createDetailsGridListContainer(allLiComponents[index]);

        return listContainer;
    });

    const allDetails = Array.from({ length: 14 }, (_, index) => {
        const details = createDetailsGrid(allListContainer[index]);

        return details;
    });

    const allData = Array.from({ length: 14 }, (_, index) => {
        const data = createData({
            summaryElement: allSummary[index], 
            h4Element: allH4[index], 
            detailsGrid: allDetails[index],
            eventListeners: NaN,
        });

        return data;
    });

    const allRevealHours = Array.from({ length: 14 }, (_, index) => {
        const revealHours = createNewElement({
            nameTag: 'details',
            className: 'reveal-hours',
        });
    
        const revealHoursSummary = createRevealHoursSummary();
        const nestedDetails = createNewElement({
            className: 'nested-details',
        });
    
        const lineAppendor = createAppendorLine();
        const hourlyDataContainer = createNewElement({
            className: 'hourly-details-container',
        });
        const fullHourlyData = createAllData({data: weatherData.forecast(index + 1)});
    
        hourlyDataContainer.append(...fullHourlyData);
        nestedDetails.append(lineAppendor, hourlyDataContainer);
        revealHours.append(revealHoursSummary, nestedDetails);

        return revealHours;
    });

    allData.map((data, index) => {
        data.appendChild(allRevealHours[index]);
    });

    const displayData = createNewElement({
        className: 'display_hourly_data',
    });

    displayData.append(titleCard, ...allData);

    return displayData;
};


export function createRevealHoursSummary() {
    const summaryElement = createNewElement({
        nameTag: 'summary',
    });

    addSummaryEventListeners(summaryElement);

    const arrow = createDataSummaryComponent({
        className: 'details-arrow',
        isStatic: true,
        isIcon: true,
        iconName: null,
    });

    const title = createNewElement({
        className: 'reveal-hours-title',
    });

    const h4Element = createNewElement({
        nameTag: 'h4',
        textContent: 'Show Hours',
    });

    title.appendChild(h4Element);
    summaryElement.append(arrow, title);
    return summaryElement    
};


export function createAppendorLine() {
    const appendor = createNewElement({
        className: 'line-appendor',
    });

    return appendor;
};