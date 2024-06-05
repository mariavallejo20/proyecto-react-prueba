import { PlanetRepository } from './PlanetRepository';
import { fetchFilmById, fetchDataFromAPI } from "../network/apiDataSource";
import { Film } from '../../domain/entities/Film';

// Mockeamos las llamadas a la API
jest.mock('../network/apiDataSource', () => ({
    fetchFilmById: jest.fn(),
    fetchDataFromAPI: jest.fn(),
}));

const fetchFilmByIdMock = fetchFilmById as jest.Mock;
const fetchDataFromAPIMock = fetchDataFromAPI as jest.Mock;


// Tests para el repositorio "Planetas"
describe('PlanetRepository', () => {
    test('getFilmById devuelve una película', async () => {
        // Mockeamos el objeto film
        const mockFilm : Film = {
            title: 'A New Hope',
            director: 'George Lucas',
            producer: 'Gary Kurtz',
            characters: ['url1', 'url2'],
            planets: ['url3', 'url4'],
            vehicles: ['url5', 'url6']
        }

        // Mockeamos la implementación de fetchFilmById
        fetchFilmByIdMock.mockResolvedValue(mockFilm);
    
        // Llamada a la función
        const film = await PlanetRepository.getFilmById('1');

        // Assertionscl
        expect(film).toEqual(mockFilm);
        
    });

    test('getPlanets devuelve un array de planetas', async () => {
        // Mockeamos el array de planetas
        const mockPlanets = [
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


        // Mockeamos la respuesta de fetchFilmById
        fetchDataFromAPIMock.mockResolvedValue(mockPlanets);
    
        // Llamada a la función
        const planets = await PlanetRepository.getPlanets(['url1', 'url2']);
    
        // Assertions
        expect(planets).toEqual(mockPlanets);
      });

  });