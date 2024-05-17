// Vista principal para personajes

import React from "react";
import { useParams, Link } from "react-router-dom";
import { usePlanetsViewModel } from "../viewmodels/usePlanetsViewModel";
import { PlanetCard } from "../components/PlanetCard";
import { Loading } from "../components/Loading";

const Planets: React.FC = () => {
    const { idFilm } = useParams<{ idFilm: string }>();
    
    // Llamar al gancho siempre, pero manejar los valores devueltos según sea necesario
    const { film, planets, isLoading } = usePlanetsViewModel(idFilm || '');
    
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
            <h2>Planetas</h2>
                {isLoading ? <Loading /> : (
                    <div className='container-characters'>
                        {planets.map((planet, index) => (
                            <PlanetCard key={index} planet={planet} />
                        ))}
                    </div>
                )}
            </div>
        </header>
    );
};

export {Planets}