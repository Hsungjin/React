export function setItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

export function getItem(key) {
    JSON.parse(localStorage.getItem(key));
}