// Componente para la información de una película favorita 

import React from "react";
import { Film } from "../../domain/entities/Film";

interface Props {
    film: Film;
}

const FavoritesFilmCard: React.FC<Props> = ({ film }) => {
    return (
        <div className='character-container'>
            <div>
            <button
                type='button'
                className='fav-remove-button'
            >
                X
            </button>
                <h3>{film.title}</h3>
                <p>Director: {film.director}</p>
                <p>Productor: {film.producer}</p>
                <p>
                    <span className='text-grey'>Personajes: </span> 
                    <span>{film.characters.length}</span>
                </p>
                <p>
                    <span className='text-grey'>Planetas: </span>
                    <span>{film.planets.length}</span>
                </p>
                <p>
                    <span className='text-grey'>Vehículos: </span>
                    <span>{film.vehicles.length}</span>
                </p>
            </div>
        </div>
    );
};

export {FavoritesFilmCard}