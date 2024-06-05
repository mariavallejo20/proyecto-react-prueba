import React from 'react';
import { render, screen } from '@testing-library/react';
import { Loading } from './Loading';

describe("<Loading />", () =>
{
    test('Muestra el mensaje "Cargando..."', () => {
        // Renderizamos el componente
        render(<Loading />);
    
        // Verificamos que el texto "Cargando..." esté presente en el componente renderizado
        expect(screen.getByText(/Cargando.../i)).toBeInTheDocument();
    });
})

