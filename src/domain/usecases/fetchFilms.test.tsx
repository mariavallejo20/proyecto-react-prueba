// fetchFilms.test.ts
import { FilmRepository } from '../../data/repositories/FilmRepository';
import { fetchFilms } from './fetchFilms';
import { Film } from '../entities/Film';

// Mockear la función getFilms de FilmRepository
jest.mock('../../data/repositories/FilmRepository', () => ({
    FilmRepository: {
        getFilms: jest.fn()
    }
}));
const getFilmsMock = FilmRepository.getFilms as jest.Mock;

describe('fetchFilms', () => {
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

    test('debe devolver una lista de películas', async () => {
        // Mockeamos la respuesta de getFilms para devolver mockFilms
        getFilmsMock.mockResolvedValue(mockFilms);

        // Llamamos a fetchFilms
        const result = await fetchFilms();

        // Verificamos que getFilms fue llamado
        expect(FilmRepository.getFilms).toHaveBeenCalled();
        // Verificamos que el resultado de fetchFilms es el esperado
        expect(result).toEqual(mockFilms);
    });

    test('debe lanzar un error cuando falla la obtención de películas', async () => {
        // Mockeamos getFilms para lanzar un error
        getFilmsMock.mockRejectedValue(new Error('Error al extaer las "peliculas"'));

        // Verificamos que fetchFilms lanza el error esperado
        await expect(fetchFilms()).rejects.toThrow('Error al extaer las "peliculas"');
    });
});
