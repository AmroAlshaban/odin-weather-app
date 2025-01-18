


export function addSearchBarEventListeners(node) {

    node.addEventListeners("keydown", (event) => {
        if (event.key === 'Enter') {
            const query = node.value;
            node.value = '';


        };
    });

};


export function addSearchImageEventListeners(node) {

    node.addEventListeners("click", () => {
        const inputField = document.querySelector("#search_bar_write");
        inputField.dispatchEvent(new Event("keydown"));
    });

};