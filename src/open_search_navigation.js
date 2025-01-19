export let currentSearchNavigation = 'today';


export function getCurrentSearchNavigation() {
    return currentSearchNavigation;
};


export function setCurrentSearchNavigation(newSearchNavigation) {
    currentSearchNavigation = newSearchNavigation;
};