import { getUnitFormat, setUnitFormat } from "../../unit_formats/us_metric";
import { getCurrentPage } from "../current_page";


export function addUnitSystemEventListeners(node) {

    node.addEventListener("click", () => {
        setUnitFormat();

        if (getUnitFormat() === 'us') {
            Object.assign(node.querySelector("sup").style, {
                fontSize: 'calc(14px / var(--scale-factor-font))',
                fontWeight: '1000',
            });

            Object.assign(node.querySelector("sub").style, {
                fontSize: 'calc(10px / var(--scale-factor-font))',
                fontWeight: '500',
            });
        } else {
            Object.assign(node.querySelector("sup").style, {
                fontSize: 'calc(10px / var(--scale-factor-font))',
                fontWeight: '500',
            });

            Object.assign(node.querySelector("sub").style, {
                fontSize: 'calc(14px / var(--scale-factor-font))',
                fontWeight: '1000',
            });
        }

        if (getCurrentPage() === 'search') {
            document.querySelector("#hourly").dispatchEvent(new Event("click"));
        } else if (getCurrentPage() === 'home') {
            // do stuff
        } else if (getCurrentPage() === 'about') {
            // do stuff
        };
    });

};