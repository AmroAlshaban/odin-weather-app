const downArrowImage = require("../../images/down-arrow.png");
const upArrowImage = require("../../images/up-arrow.png");


export function addSummaryEventListeners(node) {

    node.addEventListener("click", () => {
        const arrow = node.querySelector(".details-arrow");

        if (node.parentNode.open) {
            Object.assign(arrow.style, {
                backgroundImage: `url(${downArrowImage})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '75%',
                backgroundPosition: 'center',
            });
        } else {
            Object.assign(arrow.style, {
                backgroundImage: `url(${upArrowImage})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '50%',
                backgroundPosition: 'center',
            });
        }
    });

}