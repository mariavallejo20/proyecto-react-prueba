import { Planet } from "../entities/Planet";
import { Film } from "../entities/Film";
import { PlanetRepository } from "../../data/repositories/PlanetRepository";
import { fetchPlanets } from "./fetchPlanets";

// Mockeamos las llamadas a la API
jest.mock('../../data/repositories/PlanetRepository', () => ({
    PlanetRepository: {
        getFilmById: jest.fn(),
        getPlanets: jest.fn(),
    }
}));

const getFilmByIdMock = PlanetRepository.getFilmById as jest.Mock;
const getPlanetsMock = PlanetRepository.getPlanets as jest.Mock;

describe( 'fetchPlanets', () => {

    // Mockeamos una película y un array de planetas esperados como respuesta
    const mockFilm : Film = {
        title: 'A New Hope',
        director: 'George Lucas',
        producer: 'Gary Kurtz',
        characters: ['url1', 'url2'],
        planets: ['url3', 'url4'],
        vehicles: ['url5', 'url6']
    }

    const mockPlanets : Planet[] = [
        { 
          name: 'Mock Planet 1',
          climate: 'Mock Climate 1',
          diameter: 'Mock Diameter 1',
          orbital_period: 'Mock Orbital Period 1',
          films: ['url1', 'url2']
        },
        { 
          name: 'Mock Planet 2',
          climate: 'Mock Climate 2',
          diameter: 'Mock Diameter 2',
          orbital_period: 'Mock Orbital Period 2',
          films: ['url3', 'url4']
        }
    ];

    test('debe devolver una película y un array de planetas', async () => {

        // Mockeamos las respuestas de getFilmById y getPPlanets
        getFilmByIdMock.mockResolvedValue(mockFilm)
        getPlanetsMock.mockResolvedValue(mockPlanets)

        // LLamamos a fetchPlanets
        const result = await fetchPlanets('1')

        // Comprobamos el resultado
        expect(result.film).toEqual(mockFilm);
        expect(result.planets).toEqual(mockPlanets);

        // Verificamos que las funciones mockeadas fueron llamadas con los argumentos correctos
        expect(getFilmByIdMock).toHaveBeenCalledWith('1');
        expect(getPlanetsMock).toHaveBeenCalledWith(['url3', 'url4']);
    })

    test('debe lanzar un error cuando falla la obtención de planetas', async () => {
        // Mockeamos getPlanet para lanzar un error
        getPlanetsMock.mockRejectedValue(new Error('Error fetching planets for film with ID'))

        //Verificamos que se ha lanzado el error
        await expect(fetchPlanets('1')).rejects.toThrow('Error fetching planets for film with ID')
    })

})