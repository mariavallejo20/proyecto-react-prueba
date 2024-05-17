// Manejo de la lógica de acceso a datos de personajes

import { Character } from "../../domain/entities/Character";
import { Film } from "../../domain/entities/Film";
import { fetchFilmById, fetchDataFromAPI  } from "../network/api";

const CharacterRepository = {

    getFilmById : async (idFilm: string) : Promise<Film> => {
        const data = await fetchFilmById(idFilm)
        return data
    },
    getCharacters: async (urls: string[]): Promise<Character[]> => {
        const data = await fetchDataFromAPI(urls);
        return data
    }
}

export {CharacterRepository}
