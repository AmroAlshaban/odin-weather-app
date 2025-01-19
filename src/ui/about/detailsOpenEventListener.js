export function detailsOpenClickEvent(node) {

    node.addEventListener("click", () => {
        const aboutDetailArrow = node.querySelector("h3");

        if (node.parentNode.open) {
            aboutDetailArrow.textContent = '▶';
        } else {
            aboutDetailArrow.textContent = '▼';
        };
    });

};