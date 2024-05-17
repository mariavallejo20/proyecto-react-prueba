import React from "react";
import { Planet } from "../../domain/entities/Planet";
import { CharactersFilmsList } from "../view/CharactersFilmsList";


interface Props {
    planet: Planet;
}

const PlanetCard: React.FC<Props> = ({ planet }) => {
    return (
        <div className='container-characters'>
            <div className='character-container'>
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
        </div>                   
    );
};


export {PlanetCard}