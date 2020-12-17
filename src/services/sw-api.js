const BASE_URL = 'https://swapi.dev/api/';

export function getStarships() {
    return fetch(BASE_URL + 'starships/').then(res => res.json());
}

export function getFilms() {
    return fetch(BASE_URL + 'films/').then(res => res.json());
}
