// Manejo de la lógica de acceso a datos de personajes,

import { Planet } from "../../domain/entities/Planet";
import { Film } from "../../domain/entities/Film";
import { fetchFilmById, fetchDataFromAPI } from "../network/api";

const PlanetRepository = {
    getFilmById : async (idFilm: string) : Promise<Film> => {
        const data = await fetchFilmById(idFilm)
        return data
    },
    getPlanets: async (urls: string[]): Promise<Planet[]> => {
        const data = await fetchDataFromAPI(urls);
        return data
    }
}

export {PlanetRepository}