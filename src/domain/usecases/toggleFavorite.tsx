// Caso de uso para marcar/desmarcar favoritos

import { FilmRepository } from '../../data/repositories/FilmRepository';
import { Film } from '../entities/Film';

function toggleFavorite(film: Film, favorites: Film[]): Film[]
{
    const isFavorite = favorites.find((fav) => fav.title === film.title);
    let updatedFavorites;

    if (!isFavorite) {
        updatedFavorites = [...favorites, film];
    } else {
        updatedFavorites = favorites.filter((fav) => fav.title !== film.title);
    }

    FilmRepository.saveFavorites(updatedFavorites);
    return updatedFavorites;
};

export {toggleFavorite}