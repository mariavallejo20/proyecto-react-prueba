import React from "react"
import { useState, useEffect } from 'react'
import { CharactersFilmsList } from "./CharactersFilmsList";
import fetchDataFromAPI from "../functions/useApiData";
import { Link, useParams } from "react-router-dom";

interface Character {
    name: string;
    gender: string;
    height: string;
    mass: string;
    films: string[];
}

interface Film {
    title: string;
    director: string;
    producer: string;
    characters: string[];
    planets: string[];
    vehicles: string[];
}

function Characters() 
{

    const { idFilm } = useParams<{ idFilm: string }>();
    const [film, setFilm] = useState<Film | null>(null);
    // Estado para indicar si los datos están cargando
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const reqApi = async () => {
          try {
            const api = await fetch(`https://swapi.dev/api/films/${idFilm}/`);
            const filmAPI = await api.json();
            setFilm(filmAPI);
          } catch (error) {
            console.error(`Error al extaer la "pelicula" con idFilm: ${idFilm}:` , error);
          }
        };
    
        reqApi();
    }, []);

    const titleFilm = film?.title;
    const charactersFilm = film?.characters ?? [];

    // Estado para datos de los personajes
    const [charactersData, setCharactersData] = useState<Character[]>([]);

    useEffect(() => {
        if (film)
        {
            const fetchCharactersData = async () => {
                const data = await fetchDataFromAPI(charactersFilm);
                setCharactersData(data);
                setIsLoading(false);
            };
            fetchCharactersData();
        }
        
    }, [film]);

    return(
        <header className="App-header">
        <h1 className="title">Stars Wars</h1>
        <div className='characters'>
            <button type="button" className='back-home'>
                <Link to="/">Home</Link>
            </button>
            <button type="button" className='back'>
                <Link to="/films">Back</Link>
            </button>
            <h1>{titleFilm}</h1>
            <h2>Personajes</h2>
            {
                isLoading ? 
                (
                    <p>Cargando "Personajes"...</p>
                ) :
                (
                    <>
                        <div className='container-characters'>
                            {charactersData.map((character, index) => (
                                <div className='character-container' key={index} >
                                    <div>
                                        <h3>{character.name}</h3>
                                        <h6>
                                            {character.gender === "male" ?
                                                (
                                                    <>
                                                        <span className='male' /> Género masculino
                                                    </> 
                                                ) : character.gender === "female" ?
                                                (
                                                    <>
                                                        <span className='female' /> Género femenino
                                                    </> 
                                                ) :
                                                (
                                                    <>
                                                        <span className='unknown' /> Género desconocido
                                                    </>
                                                )
                                            }
                                        </h6>
                                        <p>Estatura: {character.height} cm</p>
                                        <p>Peso: {character.mass} kg</p>

                                        <CharactersFilmsList 
                                            charactersFilmsList={character.films}
                                        />
                                    </div>
                                </div>
                                
                            ))}
                        </div>
                    </>
                )
            }
        </div>
        </header>
    )

}

export {Characters}