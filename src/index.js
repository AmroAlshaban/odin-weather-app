import "./styles.css";
import { addSearchButtonEventListeners } from "./ui/search/event_listeners/searchButtonEventListeners";
import { addUnitSystemEventListeners } from "./ui/unit_system/unitSystemEventListeners";
import { addAboutButtonEventListeners } from "./ui/about/aboutButtonEventListeners";

const searchButton = document.querySelector("#search");
const aboutButton = document.querySelector("#about");
const changeUnitSystemButton = document.querySelector("#unit-system");
addSearchButtonEventListeners(searchButton);
addAboutButtonEventListeners(aboutButton);
addUnitSystemEventListeners(changeUnitSystemButton);