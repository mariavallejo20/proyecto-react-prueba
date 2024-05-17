// src/presentation/views/FavoritesFilmsPage.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useFavoritesFilmsViewModel } from '../viewmodels/useFavoritesFilmsViewModel';
import { FavoritesFilmCard } from '../components/FavoritesFilmsCard';


const FavoritesFilms: React.FC = () => {
    const { favorites } = useFavoritesFilmsViewModel();

    return (
        <header className="App-header">
            <h1 className="title">Star Wars</h1>
            <button type="button" className='back-home'>
                <Link to="/">Home</Link>
            </button>
            <button type="button" className='back'>
                <Link to="/films">Back</Link>
            </button>
            <h1>Películas Favoritas</h1>
            <>
                {favorites.length === 0 ? (
                    <h3>No tienes películas favoritas</h3>
                ) : (
                    <div className='container-characters'>
                        {favorites.map((film, index) => (
                            <FavoritesFilmCard key={index} film={film} />
                        ))}
                    </div>
                )}
            </>
        </header>
    );
};

export {FavoritesFilms}
