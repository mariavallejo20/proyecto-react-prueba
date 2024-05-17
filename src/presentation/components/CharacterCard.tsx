import React from "react";
import { Character } from "../../domain/entities/Character";
import { CharactersFilmsList } from "../view/CharactersFilmsList";


interface Props {
    character: Character;
}

const CharacterCard: React.FC<Props> = ({ character }) => {
    return (
        <div className='character-container'>
            <div>
                <h3>{character.name}</h3>
                <h6>
                    {character.gender === "male" ? (
                        <>
                            <span className='male' /> Género masculino
                        </>
                    ) : character.gender === "female" ? (
                        <>
                            <span className='female' /> Género femenino
                        </>
                    ) : (
                        <>
                            <span className='unknown' /> Género desconocido
                        </>
                    )}
                </h6>
                <p>Estatura: {character.height} cm</p>
                <p>Peso: {character.mass} kg</p>
                <CharactersFilmsList charactersFilmsList={character.films} />
            </div>
        </div>
    );
};


export {CharacterCard}