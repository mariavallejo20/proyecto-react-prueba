// ViewModel que maneja el estado y la lógica de la vista de películas

import { useState, useEffect } from 'react';
import { Film } from '../../domain/entities/Film';
import { fetchFilms } from '../../domain/usecases/fetchFilms';
import { toggleFavorite } from '../../domain/usecases/toggleFavorite';
import { FilmRepository } from '../../data/repositories/FilmRepository';

function useFilmsViewModel()
{
    const [films, setFilms] = useState<Film[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [favorites, setFavorites] = useState<Film[]>([]);

    useEffect(() => {
        const loadFilms = async () => {
            try {
                const filmsData = await fetchFilms();
                setFilms(filmsData);
            } catch (error) {
                console.error('Error fetching films:', error);
            }
            setIsLoading(false);
        };

        loadFilms();
    }, []);

    useEffect(() => {
        const storedFavorites = FilmRepository.getFavorites();
        setFavorites(storedFavorites);
    }, []);

    const handleToggleFavorite = (film: Film) => {
        const updatedFavorites = toggleFavorite(film, favorites);
        setFavorites(updatedFavorites);
    };

    return { films, isLoading, favorites, handleToggleFavorite };
};

export {useFilmsViewModel}
