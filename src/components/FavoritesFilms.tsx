import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface Film {
    title: string;
    director: string;
    producer: string;
    characters: string[];
    planets: string[];
    vehicles: string[];
}

function FavoritesFilms() {
    const [favorites, setFavorites] = useState<Film[]>([]);

    useEffect(() => {
        const storedFavorites = localStorage.getItem('favorites');
        if (storedFavorites) {
            setFavorites(JSON.parse(storedFavorites));
        }
      }, []);

    const removeFromFavorites = (title: string) => {
        const updatedFavorites = favorites.filter(film => film.title !== title);
        setFavorites(updatedFavorites);
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    };

    return(
        <header className="App-header">
        <h1 className="title">Stars Wars</h1>
        <button type="button" className='back-home'>
            <Link to="/">Home</Link>
        </button>
        <button type="button" className='back'>
            <Link to="/films">Back</Link>
        </button>
        <h1>Películas Favoritas</h1>
        <>
            { favorites.length === 0 ?
            (
                <>
                    <h3> No tienes películas favoritas </h3>
                </>
            ) :
            (
                <>
                <div className='container-characters'>
                    {favorites.map((film, index) => (
                        <div className='character-container' key={index} >
                        <div>
                            <h3>{film.title}</h3>
                            <p>Director: {film.director}</p>
                            <p>Productor: {film.producer}</p>
                            <p>
                                <span className='text-gey'>Personajes: </span> 
                                <span>{film.characters.length}</span>
                            </p>
                            <p>
                                <span className='text-grey'>Planetas: </span>
                                <span>{film.planets.length}</span>
                            </p>
                            <p>
                                <span className='text-grey'>Vehiculos: </span>
                                <span>{film.vehicles.length}</span>
                            </p>
                        </div>
                        {/* <button className="remove-button" onClick={() => removeFromFavorites(film.title)}>×</button> */}
                        </div>
                    ))}
                </div>
                </>
            )

        }
        </>
        </header>
    )
}


export {FavoritesFilms}