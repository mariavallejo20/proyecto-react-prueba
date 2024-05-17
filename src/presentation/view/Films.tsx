// Vista principal para películas

import React from 'react';
import { Link } from 'react-router-dom';
import { useFilmsViewModel } from '../viewmodels/useFilmsViewModel';
import { FilmCard } from '../components/FilmCard'
import { Loading } from '../components/Loading'

function Films()
{
    const { films, isLoading, favorites, handleToggleFavorite } = useFilmsViewModel();

    return (
        <header className="App-header">
            <h1 className="title">Stars Wars</h1>
            <div className='characters'>
                <button type="button" className='back-home'>
                    <Link to="/">Home</Link>
                </button>
                <h1>Películas</h1>
                {isLoading ? (
                    <Loading />
                ) : (
                    <>
                        <button type="button" className='film-fav-button'>
                            <Link to="/favorites-films">Películas Favoritas</Link>
                        </button>
                        <div className='container-characters'>
                            {films.map((film, index) => (
                                <FilmCard
                                    key={index}
                                    film={film}
                                    isFavorite={favorites.find((fav) => fav.title === film.title) !== undefined}
                                    onToggleFavorite={handleToggleFavorite}
                                    index={index}
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>
        </header>
    );
};

export {Films};
