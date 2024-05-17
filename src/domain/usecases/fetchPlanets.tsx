import { Planet } from "../entities/Planet";
import { Film } from "../entities/Film";
import { PlanetRepository } from "../../data/repositories/PlanetRepository";

async function fetchPlanets(idFilm: string): Promise<{ film: Film; planets: Planet[] }> {
    try {
        const filmData = await PlanetRepository.getFilmById(idFilm);
        const planetUrls = filmData.planets;
        const planets = await PlanetRepository.getPlanets(planetUrls);

        return {
            film: filmData,
            planets: planets,
        };
    } catch (error) {
        throw new Error(`Error fetching planets for film with ID ${idFilm}: ${error}`);
    }
}

export {fetchPlanets}