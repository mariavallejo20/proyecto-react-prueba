// src/presentation/components/CharactersFilmsList.tsx
import React, { FC } from "react";
import { useCharactersFilmsListViewModel } from "../viewmodels/useCharactersFilmsListViewModel";

interface CharactersFilmsListProps {
    charactersFilmsList: string[];
}

const CharactersFilmsList: FC<CharactersFilmsListProps> = ({ charactersFilmsList }) => {
    const { charactersFilmsListData } = useCharactersFilmsListViewModel(charactersFilmsList);

    return (
        <>
            <p>Películas en las que aparece:</p>
            <ul>
                {charactersFilmsListData.map((film, index) => (
                    <li key={index}>{film.title}</li>
                ))}
            </ul>
        </>
    );
};

export {CharactersFilmsList}
