import { createNewElement } from "../../utilities/helpers/create_new_element";
import { removeHyphens } from "../../utilities/helpers/remove_hyphen";
// import { toCamelCase } from "../../utilities/helpers/to_camelcase";


export function createDisplayHourlyData({
    dataLocation,
    dataDayDate,
    dataSummary,
    dataDetails
}) {
    const summaryComponentClassNames = [
        'time', 'temperature', 'temperature-icon', 'temperature-description',
        'rain-icon', 'rain-percentage', 'wind-icon', 'wind-speed', 'details-arrow',
    ];

    const summaryComponentStatic = [
        true, true, true, false, true, true, true, false, true,
    ];

    const detailsComponentClassNames = [
        'feels-like', 'wind', 'windgust', 'humidity',
        'uvindex', 'rainamount', 'moonphase', 'pressure',
        'cloudcover', 'dew', 'snow', 'solarradiation',
    ];

    const detailsComponentTitles = [
        'Feels Like', 'Wind Speed', 'Wind Gust', 'Humidity',
        'UV Index', 'Rain Amount and Proability', 'Moon Phase', 'Pressure',
        'Cloud Cover', 'Dew', 'Snow', 'Solar Radiation',
    ];

    const titleCard = createTitleCard({
        displayType: 'hourly',
        location: dataLocation,
    });

    const dayDate = createDayDate({
        dayDateText: dataDayDate,
    });

    const allSummaryComponents = Array.from({ length: 24 }, (_, index) => {
        const summaryComponents = Array.from({ length: summaryComponentClassNames.length }, (_, subIndex) => {
            const summaryComponent = createDataSummaryComponent({
                className: summaryComponentClassNames[subIndex],
                isStatic: summaryComponentStatic[subIndex],
                isIcon: summaryComponentClassNames[subIndex].includes('icon') || summaryComponentClassNames[subIndex] === 'details-arrow',
                text: dataSummary.hour(index).get(removeHyphens(summaryComponentClassNames[subIndex])),
            });
    
            return summaryComponent;
        });

        return summaryComponents;
    });

    const allSummary = Array.from({ length: 24 }, (_, index) => {
        const summary = createDataSummary(allSummaryComponents[index]);

        return summary;
    });

    const allH4 = Array.from({ length: 24 }, (_, index) => {
        const h4 = createH4Element(dataDetails.hour(index).conditions);

        return h4;
    });

    const allLiComponents = Array.from({ length: 24 }, (_, index) => {
        const liComponents = Array.from({ length: detailsComponentClassNames.length }, (_, subIndex) => {
            const liComponent = createDetailsGridListElement({
                liClassName: detailsComponentClassNames[subIndex],
                metricTitle: detailsComponentTitles[subIndex],
                metricValue: dataDetails.hour(index).get(removeHyphens(dataDetails.classNames[subIndex])),
            });
    
            return liComponent;
        });

        return liComponents;
    });

    const allListContainers = Array.from({ length: 24 }, (_, index) => {
        const listContainer = createDetailsGridListContainer(allLiComponents[index]);

        return listContainer;
    });

    const allDetails = Array.from({ length: 24 }, (_, index) => {
        const details = createDetailsGrid(allListContainers[index]);

        return details;
    });

    const allData = Array.from({ length: 24 }, (_, index) => {
        const data = createData({
            summaryElement: allSummary[index], 
            h4Element: allH4[index], 
            detailsGrid: allDetails[index],
            eventListeners: NaN,
        });

        return data;
    });

    const displayHourlyData = createNewElement({
        className: 'display_hourly_data',
    });

    displayHourlyData.append(titleCard, dayDate, ...allData);
    return displayHourlyData;
};


export function createTitleCard({displayType, location}) {
    const displayTypeToTitle = {'today': "Today's", 'hourly': 'Hourly', 'past': 'Past', 'forecast': '15-Day Forecast'};

    const h1Element = createNewElement({
        nameTag: 'h1',
        textContent: `${displayTypeToTitle[displayType]} Weather`,
    });

    const pElement = createNewElement({
        nameTag: 'p',
        textContent: location,
    });

    const titleCard = createNewElement({
        className: 'title-card',
    });

    titleCard.append(h1Element, pElement);
    return titleCard;
};


export function createDayDate(dayDateText) {
    const dayDateContainer = createNewElement({
        className: 'day-date',
    });

    const dayDateH2 = createNewElement({
        nameTag: 'h2',
        textContent: dayDateText,
    });

    dayDateContainer.appendChild(dayDateH2);
    return dayDateContainer;
};


export function createData({summaryElement, h4Element, detailsGrid, eventListeners=NaN}) {
    const details = createNewElement({
        nameTag: 'details',
        className: 'data',
    });

    details.append(summaryElement, h4Element, detailsGrid);
    if (!isNaN(eventListeners)) {
        eventListeners(details);
    };

    return details;
};


export function createDataSummary(summaryElements) {
    const summary = createNewElement({
        nameTag: 'summary',
    });

    summary.append(...summaryElements);
    return summary;
};


export function createDataSummaryComponent({
    className='',
    isStatic=false,
    isIcon=false,
    text=''
}) {
    const container = createNewElement({
        className: isStatic ? ['static', className] : className, 
    });

    if (!isIcon) {
        const pElement = createNewElement({
            nameTag: 'p',
            textContent: text,
        });

        container.appendChild(pElement);
    };

    return container;
};


export function createH4Element(description) {
    const h4Element = createNewElement({
        nameTag: 'h4',
        textContent: description,
    });

    return h4Element;
};


export function createDetailsGrid(listContainer) {
    const detailsGrid = createNewElement({
        className: 'details-grid',
    });

    detailsGrid.appendChild(listContainer);
    return detailsGrid;
};


export function createDetailsGridListContainer(liElements) {
    const listContainer = createNewElement({
        nameTag: 'ul',
    });

    listContainer.append(...liElements);
    return listContainer;
};


export function createDetailsGridListElement({liClassName, metricTitle, metricValue}) {
    const infoIcon = createNewElement({
        className: 'info-icon',
    });

    const infoDescriptor = createNewElement({
        className: 'info-descriptor',
    });

    const pMetricTitle = createNewElement({
        nameTag: 'p',
        textContent: metricTitle,
    });

    const pMetricValue = createNewElement({
        nameTag: 'p',
        textContent: metricValue,
    });

    const liElement = createNewElement({
        nameTag: 'li',
        className: liClassName,
    });

    infoDescriptor.append(pMetricTitle, pMetricValue);
    liElement.append(infoIcon, infoDescriptor);
    return liElement;
};