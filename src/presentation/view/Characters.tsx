// Vista principal para personajes

import React from "react";
import { useParams, Link } from "react-router-dom";
import { useCharactersViewModel } from "../viewmodels/useCharactersViewModel";
import { CharacterCard } from "../components/CharacterCard";
import { Loading } from "../components/Loading";

const Characters: React.FC = () => {
    const { idFilm } = useParams<{ idFilm: string }>();
    
    // Llamar al gancho siempre, pero manejar los valores devueltos según sea necesario
    const { film, characters, isLoading } = useCharactersViewModel(idFilm || '');
    
    return (
        <header className="App-header">
        <h1 className="title">Stars Wars</h1>
        <div className='characters'>
            <button type="button" className='back-home'>
                <Link to="/">Home</Link>
            </button>
            <button type="button" className='back'>
                <Link to="/films">Back</Link>
            </button>
            <h1>{film ? film.title : "Loading..."}</h1>
            <h2>Personajes</h2>
                {isLoading ? <Loading /> : (
                    <div className='container-characters'>
                        {characters.map((character, index) => (
                            <CharacterCard key={index} character={character} />
                        ))}
                    </div>
                )}
            </div>
        </header>
    );
};

export {Characters}