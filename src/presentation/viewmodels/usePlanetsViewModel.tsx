// ViewModel que maneja el estado y la lógica de la vista de planetas

import { useState, useEffect } from "react";
import { Planet } from "../../domain/entities/Planet";
import { Film } from "../../domain/entities/Film";
import { fetchPlanets } from "../../domain/usecases/fetchPlanets";


function usePlanetsViewModel(filmId: string)
{
    const [planets, setPlanets] = useState<Planet[]>([]);
    const [film, setFilm] = useState<Film | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadPlaners = async () => {
            try {
                const { film, planets } = await fetchPlanets(filmId);
                setFilm(film);
                setPlanets(planets);
            } catch (error) {
                console.error(`Error fetching planets: ${error}`);
            }
                setIsLoading(false);
        };

        loadPlaners();
    }, []);

    return { film, planets, isLoading };
}


export {usePlanetsViewModel}