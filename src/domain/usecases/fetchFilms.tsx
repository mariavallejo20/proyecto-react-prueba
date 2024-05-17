// Caso de uso para obtener películas

import { FilmRepository } from '../../data/repositories/FilmRepository';
import { Film } from '../entities/Film';

async function fetchFilms(): Promise<Film[]> {
    return await FilmRepository.getFilms();
}

export {fetchFilms}
