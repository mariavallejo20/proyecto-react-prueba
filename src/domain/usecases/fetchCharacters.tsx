import { Character } from "../entities/Character";
import { Film } from "../entities/Film";
import { CharacterRepository } from "../../data/repositories/CharacterRepository";

async function fetchCharacters(idFilm: string): Promise<{ film: Film; characters: Character[] }> {
    try {
        const filmData = await CharacterRepository.getFilmById(idFilm);
        const characterUrls = filmData.characters;
        const characters = await CharacterRepository.getCharacters(characterUrls);

        return {
            film: filmData,
            characters: characters,
        };
    } catch (error) {
        throw new Error(`Error fetching characters for film with ID ${idFilm}: ${error}`);
    }
}

export {fetchCharacters}