// Manejo de la lógica de acceso a datos de "Films", combinando la API y localStorage

import { fetchFilmsFromAPI } from '../network/api';
import { saveToLocalStorage, getFromLocalStorage } from '../local/localStorageService';
import { Film } from '../../domain/entities/Film';

const FILM_FAVORITES_KEY = 'favorites';

const FilmRepository = {
    getFilms: async (): Promise<Film[]> => {
        const data = await fetchFilmsFromAPI();
        return data.results;
    },
    getFavorites: (): Film[] => {
        const favorites = getFromLocalStorage(FILM_FAVORITES_KEY);
        return favorites ? favorites : [];
    },
    saveFavorites: (favorites: Film[]): void => {
        saveToLocalStorage(FILM_FAVORITES_KEY, favorites);
    }
}

export {FilmRepository}
