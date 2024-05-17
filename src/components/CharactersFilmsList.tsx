import React, { FC } from "react"
import { useState, useEffect } from 'react'
import fetchDataFromAPI from "../functions/useApiData";

interface Film {
    title: string;
}

interface CharactersFilmsListProps {
    charactersFilmsList: string[];
}

const CharactersFilmsList: FC<CharactersFilmsListProps> = ({ charactersFilmsList })  =>{
    
    // Estado para lista de películas de cada personaje
    const [charactersFilmsListData, setCharactersFilmsListData] = useState<Film[]>([]);

    useEffect(() => {
        // Función para buscar los datos de las películas cuando charactersFilmsList cambia
        const fetchCharactersFilmsListData = async () => {
            const data = await fetchDataFromAPI(charactersFilmsList);
            setCharactersFilmsListData(data);
        };

        // Llamar a la función fetchCharactersFilmsListData
        fetchCharactersFilmsListData();

    }, [charactersFilmsList]); // Ejecutar el efecto cuando charactersFilmsList cambie



    return(
        <>
            <p>Películas en las que aparece:</p>
            <ul>
                {charactersFilmsListData.map((film, index) => (
                    <li key={index}>{film.title}</li>
                ))}
            </ul>
        </>
    )
}

export {CharactersFilmsList}