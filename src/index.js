import "./styles.css";
import { addHomeButtonEventListeners } from "./ui/home/homeButtonEventListeners";
import { addSearchButtonEventListeners } from "./ui/search/event_listeners/searchButtonEventListeners";
import { addUnitSystemEventListeners } from "./ui/unit_system/unitSystemEventListeners";
import { addAboutButtonEventListeners } from "./ui/about/aboutButtonEventListeners";


const homeButton = document.querySelector("#home");
const searchButton = document.querySelector("#search");
const aboutButton = document.querySelector("#about");
const changeUnitSystemButton = document.querySelector("#unit-system");
addHomeButtonEventListeners(homeButton);
addSearchButtonEventListeners(searchButton);
addAboutButtonEventListeners(aboutButton);
addUnitSystemEventListeners(changeUnitSystemButton);

homeButton.dispatchEvent(new Event("click"));