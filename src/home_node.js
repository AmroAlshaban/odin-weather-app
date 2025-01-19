let homeNode = null;
let preSearchNode = null;
let i = 0;


export function getHomeNode() {
    return homeNode;
};


export function setHomeNode(node) {
    homeNode = node;
    if (i === 0) {
        i += 1;
        preSearchNode = node.cloneNode(true);
        preSearchNode.style.height = '300px';
        preSearchNode.querySelector('h1').textContent = 'Oh! So empty.....'
        preSearchNode.querySelector('p').style.display = 'none';
    };
};


export function getPreSearchNode() {
    return preSearchNode;
};