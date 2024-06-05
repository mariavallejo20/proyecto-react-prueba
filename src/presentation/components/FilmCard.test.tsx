// FilmCard.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Film } from '../../domain/entities/Film';
import { BrowserRouter as Router } from 'react-router-dom';
import { FilmCard } from './FilmCard';
import userEvent from '@testing-library/user-event';

// Crear un objeto de prueba
const film : Film = {
    title: "A New Hope",
    director: "George Lucas",
    producer: "Gary Kurtz",
    characters: ["Luke Skywalker", "Han Solo"],
    planets: ["Tatooine", "Alderaan"],
    vehicles: ["X-wing", "TIE fighter"]
};

const mockToggleFavorite = jest.fn();

describe('<FilmCard />', () => {

    test('Muestra la información correcta de la película', () => {
        render(
            <Router>
                <FilmCard film={film} isFavorite={false} onToggleFavorite={mockToggleFavorite} index={0} />
            </Router>
        );
        expect(screen.getByText("A New Hope")).toBeInTheDocument();
        expect(screen.getByText("Director: George Lucas")).toBeInTheDocument();
        expect(screen.getByText("Productor: Gary Kurtz")).toBeInTheDocument();

    });

    test('Cambia el color del botón de favorito a rojo cuando es favorito', () => {
        render(
            <Router>
                <FilmCard film={film} isFavorite={true} onToggleFavorite={mockToggleFavorite} index={0} />
            </Router>
        );
        const favButton = screen.getByRole('button', { name: /❤/i });
        expect(favButton).toHaveStyle({ color: 'red' });
    });

    test('Llama a la función onToggleFavorite al hacer clic en el botón de favorito', () => {
        render(
            <Router>
                <FilmCard film={film} isFavorite={false} onToggleFavorite={mockToggleFavorite} index={0} />
            </Router>
        );
        const favButton = screen.getByRole('button', { name: /❤/i });
        fireEvent.click(favButton);
        expect(mockToggleFavorite).toHaveBeenCalledWith(film);
    });

    test('los enlaces de personajes y planetas funcionan correctamente', () => {
        render(
            <Router>
                <FilmCard film={film} isFavorite={false} onToggleFavorite={mockToggleFavorite} index={0} />
            </Router>
        );
        const charactersLink = screen.getByRole('link', { name: /Personajes/i });
        const planetsLink = screen.getByRole('link', { name: /Planetas/i });

        expect(charactersLink).toHaveAttribute('href', '/films/1/characters');
        expect(planetsLink).toHaveAttribute('href', '/films/1/planets');
    });
});
