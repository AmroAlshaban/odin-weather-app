export let currentPage = 'home';


export function getCurrentPage() {
    return currentPage;
};


export function setCurrentPage(pageName) {
    currentPage = pageName;
};