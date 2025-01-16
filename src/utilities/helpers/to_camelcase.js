export function toCamelCase(string) {
    let newString = string.split(" ").map((word) => word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase()).join("");
    return newString.slice(0, 1).toLowerCase() + newString.slice(1);
};