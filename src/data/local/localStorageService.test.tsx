import { saveToLocalStorage, getFromLocalStorage } from '../local/localStorageService';

describe('localStorageService', () => {
    
    it('deve guardar el valor en localStorage', () => {
        const key = 'testKey';
        const value = { name: 'Luke Skywalker' };

        saveToLocalStorage(key, value);

        const savedValue = localStorage.getItem(key);
        expect(savedValue).toEqual(JSON.stringify(value));
    });

    it('debe devolver la información de localStorage', () => {
        const key = 'testKey';
        const value = { name: 'Luke Skywalker' };
        localStorage.setItem(key, JSON.stringify(value));

        const retrievedValue = getFromLocalStorage(key);
        expect(retrievedValue).toEqual(value);
    });

    it('debe devolver null si la clave no existe en localStorage', () => {
        const key = 'nonExistingKey';

        const retrievedValue = getFromLocalStorage(key);
        expect(retrievedValue).toBeNull();
    });

});
