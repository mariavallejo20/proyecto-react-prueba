import React from 'react';
import { render, screen} from '@testing-library/react';
import { CharacterCard } from './CharacterCard';
import { Character } from '../../domain/entities/Character';


describe ("<CharacterCard />", () => {

    // Creamos un objeto Film para usar como datos de prueba
    const character: Character = {
        name: 'Luke Skywalker',
        gender: 'male',
        height: '172',
        mass: '77',
        films: ["A New Hope", "The Empire Strikes Back", "Return of the Jedi"]
    };

    test('Muestra la información de un personaje correctamente', () => {

          global.fetch = jest.fn().mockResolvedValue({
            ok: true,
            json: () => Promise.resolve(character)
        });
        
        // Renderizamos el componente, pasando los props necesarios
        render(
           <CharacterCard character={character} />
        )
      
        // Verificamos que la información de la película se muestra correctamente en el componente
        expect(screen.getByText(/Luke Skywalker/i)).toBeInTheDocument();
        expect(screen.getByText(/Género masculino/i)).toBeInTheDocument();
        expect(screen.getByText(/Estatura: 172 cm/i)).toBeInTheDocument();
        expect(screen.getByText(/Peso: 77 kg/i)).toBeInTheDocument();
    });

    
})

