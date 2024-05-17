// src/presentation/viewmodels/useFavoritesFilmsViewModel.ts
import { useState, useEffect } from 'react';
import { Film } from '../../domain/entities/Film'
import { FilmRepository } from '../../data/repositories/FilmRepository';

const useFavoritesFilmsViewModel = () => {
    const [favorites, setFavorites] = useState<Film[]>([]);

    useEffect(() => {
        const storedFavorites = FilmRepository.getFavorites();
        setFavorites(storedFavorites);
    }, []);
    return { favorites };
}

export {useFavoritesFilmsViewModel}
