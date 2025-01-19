import { setMetric } from "./variables";
import { setUS } from "./variables";


let unitFormat = 'us';

export function getUnitFormat() {
    return unitFormat;
};


export function setUnitFormat() {
    unitFormat = unitFormat === "metric" ? "us" : "metric";
    if (unitFormat === 'us') {
        setUS();
    } else {
        setMetric();
    };
};