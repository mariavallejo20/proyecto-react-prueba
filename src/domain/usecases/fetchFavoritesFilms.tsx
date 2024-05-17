// Caso de uso para obtener películas

import { FilmRepository } from '../../data/repositories/FilmRepository';
import { Film } from '../entities/Film';

async function fetchFavoritesFilms(): Promise<Film[]> {
    return FilmRepository.getFavorites();
}

export {fetchFavoritesFilms}
