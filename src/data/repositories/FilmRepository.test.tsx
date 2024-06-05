import { fetchFilmsFromAPI } from "../network/apiDataSource";
import { saveToLocalStorage, getFromLocalStorage } from '../local/localStorageService';
import { Film } from '../../domain/entities/Film';
import { FilmRepository } from "./FilmRepository";

// Mockeamos las llamadas a la API y a localStorage
jest.mock('../network/apiDataSource', () => ({
    fetchFilmsFromAPI: jest.fn(),
}));

const fetchFilmsFromAPIMock = fetchFilmsFromAPI as jest.Mock;

jest.mock('../local/localStorageService', () => ({
    getFromLocalStorage: jest.fn(),
    saveToLocalStorage: jest.fn(),
}));

const getFromLocalStorageMock = getFromLocalStorage as jest.Mock;
const saveToLocalStorageMock = saveToLocalStorage as jest.Mock;

describe('FilmRepository', () => {

    // Mockeamos un array de películas
    const mockFilms: Film[] = [
        {
            title: 'A New Hope',
            director: 'George Lucas',
            producer: 'Gary Kurtz',
            characters: ['url1', 'url2'],
            planets: ['url3', 'url4'],
            vehicles: ['url5', 'url6']
        },
        {
            title: 'The Empire Strikes Back',
            director: 'Irvin Kershner',
            producer: 'Gary Kurtz',
            characters: ['url7', 'url8'],
            planets: ['url9', 'url10'],
            vehicles: ['url11', 'url12']
        }
    ];

    test('getFilms devuelve un array de películas', async () => {
        // Mockeamos la respuesta de fecthFilmsFromAPI
        fetchFilmsFromAPIMock.mockResolvedValue({ results: mockFilms })

        // LLamada a la función
        const results = await FilmRepository.getFilms()

        // Comprobamos el resultado
        expect(results).toEqual(mockFilms)
    })

    test('getFavorites devuelve un array de películas favoritas', () => {

        getFromLocalStorageMock.mockReturnValue(mockFilms);

        const result = FilmRepository.getFavorites();

        expect(result).toEqual(mockFilms);
        expect(getFromLocalStorageMock).toHaveBeenCalledWith('favorites');

    })

    test('getFavorites devuelve un array vacío si no hay películas favoritas', () => {

        getFromLocalStorageMock.mockReturnValue(null);

        const result = FilmRepository.getFavorites();

        expect(result).toEqual([]);
        expect(getFromLocalStorageMock).toHaveBeenCalledWith('favorites');

    })

    test('saveFavorites guarda películas en localStorage', () => {

        FilmRepository.saveFavorites(mockFilms);

        expect(saveToLocalStorageMock).toHaveBeenCalledWith('favorites', mockFilms);

    })


})