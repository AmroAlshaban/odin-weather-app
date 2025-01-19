export let toTemperature = 'f';
export let toDistance = 'i';
export let toSpeed = 'm';


export function setMetric() {
    toTemperature = 'c';
    toDistance = 'm';
    toSpeed = 'k';
};

export function setUS() {
    toTemperature = 'f';
    toDistance = 'i';
    toSpeed = 'm';
};