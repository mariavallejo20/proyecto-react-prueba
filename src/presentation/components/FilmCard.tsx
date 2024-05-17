// Componente para la información de una película

import React from 'react';
import { Link } from 'react-router-dom';
import { Film } from '../../domain/entities/Film';

interface FilmCardProps {
    film: Film;
    isFavorite: boolean;
    onToggleFavorite: (film: Film) => void;
    index: number;
}

const FilmCard: React.FC<FilmCardProps> = ({film, isFavorite, onToggleFavorite, index}) => (
    <div className='character-container'>
        <div>
            <button
                type='button'
                onClick={() => onToggleFavorite(film)}
                className='fav-button'
                style={{ color: isFavorite ? 'red' : '#000000' }}
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
                <span>Planetas: </span>
                <span>{film.planets.length}</span>
            </p>
            <p>
                <span>Vehículos: </span>
                <span>{film.vehicles.length}</span>
            </p>
            <Link to={`/films/${index+1}/characters`}>
                <button type="button" className='films-button'>Personajes</button>
            </Link>
            <Link to={`/films/${index+1}/planets`}>
                <button type="button" className='films-button'>Planetas</button>
            </Link>
        </div>
    </div>
);

export {FilmCard}
