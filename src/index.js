import "./styles.css";
import { addSearchButtonEventListeners } from "./ui/search/event_listeners/searchButtonEventListeners";


const searchButton = document.querySelector("#search");
addSearchButtonEventListeners(searchButton);