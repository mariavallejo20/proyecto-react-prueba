
import { useState, useEffect } from 'react';
import { Film } from '../../domain/entities/Film';
import { fetchDataFromAPI } from '../../data/network/api';

const useCharactersFilmsListViewModel = (charactersFilmsList: string[]) => {
    const [charactersFilmsListData, setCharactersFilmsListData] = useState<Film[]>([]);

    useEffect(() => {
        const fetchCharactersFilmsListData = async () => {
            const data = await fetchDataFromAPI(charactersFilmsList);
            setCharactersFilmsListData(data);
        };

        fetchCharactersFilmsListData();
    }, [charactersFilmsList]);

    return { charactersFilmsListData };
};

export {useCharactersFilmsListViewModel}
