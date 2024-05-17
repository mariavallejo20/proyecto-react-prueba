import React from 'react'
import { useState, useEffect } from 'react'
import { Link} from 'react-router-dom'

interface Film {
  title: string;
  director: string;
  producer: string;
  characters: string[];
  planets: string[];
  vehicles: string[];
}

function Films() {

  const [films, setFilms] = useState<Film[]>([]);

  // Estado para indicar si los datos están cargando
  const [isLoading, setIsLoading] = useState(true);
  // Estado para las películas favoritas
  const [favorites, setFavorites] = useState<Film[]>([]);

  useEffect(() => {
    const reqApi = async () => {
      try {
        const api = await fetch('https://swapi.dev/api/films/');
        const filmsAPI = await api.json();
        setFilms(filmsAPI.results);
      } catch (error) {
        console.error('Error al extaer las "peliculas":', error);
      }
      setIsLoading(false)
    };

    reqApi();
  }, []);

  function markAsFavorite(film: Film) 
  {
    const isFavorite = favorites.find((fav) => fav.title === film.title);
    if (!isFavorite) 
      {
      const updatedFavorites = [...favorites, film];
      setFavorites(updatedFavorites);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    } else 
    {
      const updatedFavorites = favorites.filter((fav) => fav.title !== film.title);
      setFavorites(updatedFavorites);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    }
  };

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
        setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  
  return (
    <header className="App-header">
      <h1 className="title">Stars Wars</h1>
    <div className='characters'>
    <button type="button" className='back-home'>
        <Link to="/">Home</Link>
    </button>
    {
        <>
        <h1>Películas</h1>
        {isLoading ?
        (
          <>
            <p>Cargando "Películas"...</p>
          </>
        ) :
        (
          <>
          <button type="button" className='film-fav-button'>
            <Link to="/favorites-films">Películas Favoritas</Link>
          </button>
          <div className='container-characters'>
            {films.map((film, index) => (
                <div className='character-container' key={index} >
                  <div>
                    <button
                      type='button'
                      onClick={() => markAsFavorite(film)}
                      className='fav-button'
                      style={{
                        color: favorites.find((fav) => fav.title === film.title) ? 'red' : '#000000',
                      }}
                    >
                      ❤
                    </button>
                    <h3>{film.title}</h3>
                    <p>Director: {film.director}</p>
                    <p>Productor: {film.producer}</p>
                    <p>
                        <span>Personajes: </span> 
                        <span>{film.characters.length}</span>
                    </p>
                    <p>
                        <span >Planetas: </span>
                        <span>{film.planets.length}</span>
                    </p>
                    <p>
                        <span>Vehículos: </span>
                        <span>{film.vehicles.length}</span>
                    </p>

                    <Link to={`/films/${index+1}/characters`}>
                      <button  type="button" className='films-button'>Personajes</button>
                    </Link>

                    <Link to={`/films/${index+1}/planets`}>
                      <button  type="button" className='films-button'>Planetas</button>
                    </Link>

                    {/* <button type="button" onClick={() => setCharacters(film)} className='films-button'>Personajes</button>
                    <button type="button" onClick={() => setPlanets(film)}className='films-button'>Planetas</button> */}
                  </div>
                </div>
              ))}
          </div>
          
          </>
        )
        }
        
      </>
  }
  </div>
  </header>
  ) 
}

export {Films}
