import { createNewElement } from "../../utilities/helpers/create_new_element";


export function createDisplayHourlyData() {

};


export function createTitleCard() {

};


export function createDayDate() {

};


export function createData({summaryElement, h4Element, detailsGrid}) {
    const details = createNewElement({
        nameTag: 'details',
        className: 'data',
    });

    details.append(summaryElement, h4Element, detailsGrid);
    return details;
};


export function createDataSummary(summaryComponents) {
    const summary = createNewElement({
        nameTag: 'summary',
    });

    summary.append(...summaryComponents);
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


export function createDetailsGridListContainer() {

};


export function createDetailsGridListElement() {

};


export function createInfoIcon() {

};


export function createInfoDescriptor() {

};