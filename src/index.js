import "./styles.css";
import { addSearchButtonEventListeners } from "./ui/search/event_listeners/searchButtonEventListeners";
import { addUnitSystemEventListeners } from "./ui/unit_system/unitSystemEventListeners";


const searchButton = document.querySelector("#search");
const changeUnitSystemButton = document.querySelector("#unit-system");
addSearchButtonEventListeners(searchButton);
addUnitSystemEventListeners(changeUnitSystemButton);