// ViewModel que maneja el estado y la lógica de la vista de personajes

import { useState, useEffect } from "react";
import { Character } from "../../domain/entities/Character";
import { Film } from "../../domain/entities/Film";
import { fetchCharacters } from "../../domain/usecases/fetchCharacters";


function useCharactersViewModel(filmId: string)
{
    const [characters, setCharacters] = useState<Character[]>([]);
    const [film, setFilm] = useState<Film | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadCharacters = async () => {
            try {
                const { film, characters } = await fetchCharacters(filmId);
                setFilm(film);
                setCharacters(characters);
            } catch (error) {
                console.error(`Error fetching characters: ${error}`);
            }
                setIsLoading(false);
        };

        loadCharacters();
    }, []);

    return { film, characters, isLoading };
}

export {useCharactersViewModel}