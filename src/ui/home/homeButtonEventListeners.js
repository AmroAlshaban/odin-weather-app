import { setCurrentPage } from "../../current_page";
import { getHomeNode, setHomeNode } from "../../home_node";


export function addHomeButtonEventListeners(node) {
    if (getHomeNode() === null) {
        setHomeNode(document.querySelector(".home-container"));
        const main = document.querySelector("main");
        main.removeChild(document.querySelector(".home-container"));
    };

    node.addEventListener("click", () => {
        setCurrentPage('home');

        const main = document.querySelector("main");
        main.replaceChildren();

        main.appendChild(getHomeNode());
    });

};