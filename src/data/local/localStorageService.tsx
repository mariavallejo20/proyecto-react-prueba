// Manejo de localStorage

// Función para guardar información en localStorage
function saveToLocalStorage(key: string, value: any): void 
{
    localStorage.setItem(key, JSON.stringify(value));
}

// Función para obtener información de localStorage
function getFromLocalStorage(key: string): any
{
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
}

export {saveToLocalStorage, getFromLocalStorage}
