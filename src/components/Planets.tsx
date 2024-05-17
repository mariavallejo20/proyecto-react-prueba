import React, { useState, useEffect } from "react"
import { CharactersFilmsList } from "./CharactersFilmsList"
import fetchDataFromAPI from "../functions/useApiData"
import { Link, useParams } from "react-router-dom"

interface Planet {
    name: string;
    climate: string;
    diameter: string;
    orbital_period: string;
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

function Planets()
{

    const { idFilm } = useParams<{ idFilm: string }>();
    const [film, setFilm] = useState<Film | null>(null);

    useEffect(() => {
        const reqApi = async () => {
          try {
            const api = await fetch(`https://swapi.dev/api/films/${idFilm}/`);
            const filmAPI = await api.json();
            setFilm(filmAPI);
          } catch (error) {
            console.error(`Error al extaer la "pelicula" con idFilm: ${idFilm}:` , error);
          }
          setIsLoading(false)
        };
    
        reqApi();
    }, [idFilm]);

    const titleFilm = film?.title;
    const planetsFilm = film?.planets ?? [];

    const [planetsData, setPlanetsData] = useState<Planet[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        if(film)
        {
            // Función para buscar los datos de los personajes cuando charactersFilm cambia
        const fetchPlanetsData = async () => {
            const data = await fetchDataFromAPI(planetsFilm);
            setPlanetsData(data);
            setIsLoading(false);
        };

        // Llamar a la función fetchCharactersData
        fetchPlanetsData();
        }
    
    }, [film]); // Ejecutar el efecto cuando charactersFilm cambie

    return(
        <header className="App-header">
        <h1 className="title">Stars Wars</h1>
        <div className='characters'></div>
            <button type="button" className='back-home'>
                <Link to="/">Home</Link>
            </button>
            
            <button type="button" className='back'>
                <Link to="/films">Back</Link>
            </button>
            <h1>{titleFilm}</h1>
            <h2>Planetas</h2>
            {
            isLoading ?
            (
                <p>Cargando "Planetas"...</p>
            ) :
            (
                <>
                    <div className='container-characters'>
                        {planetsData.map((planet, index) => (
                            <div className='character-container' key={index} >
                                <div>
                                    <h3>{planet.name}</h3>
                                    <p>Clima: {planet.climate} </p>
                                    <p>Diámetro: {planet.diameter} km</p>
                                    <p>Periodo orbital: {planet.orbital_period} segundos</p>

                                    <CharactersFilmsList 
                                        charactersFilmsList={planet.films}
                                    />
                                </div>
                            </div>
                            
                        ))}
                    </div>
                </>
            )}
        </header>
    )

}

export {Planets}