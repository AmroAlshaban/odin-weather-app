export let currentPage = 'home';


export function getCurrentPage() {
    return currentPage;
};


export function changeCurrentPage(pageName) {
    currentPage = pageName;
};