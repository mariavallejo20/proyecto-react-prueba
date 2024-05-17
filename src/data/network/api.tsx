// Manejo de llamadas a la API: https://swapi.dev/

// Función para obtener TODAS las películas de la API
async function fetchFilmsFromAPI()
{
    try {
        const api = await fetch('https://swapi.dev/api/films/');
        const filmsAPI = await api.json();
        return filmsAPI
    } catch (error) {
        console.error('Error al extaer las "peliculas":', error);
        return null
    }
}

// Función para obtener una película por su ID
async function fetchFilmById(idFilm: string)
{
    try {
      const api = await fetch(`https://swapi.dev/api/films/${idFilm}/`);
      const filmAPI = await api.json();
      return filmAPI
    } catch (error) {
      console.error(`Error al extaer la "pelicula" con idFilm: ${idFilm}:` , error);
        return null
    }
  };

// Función para obtener datos de cualquier dato de una película de una película de la API
async function fetchDataFromAPI(urls: string[]): Promise<any[]> {
    try {
        const dataPromises = urls.map(async (url) => {
            const response = await fetch(url);
            return response.json();
        });

        const dataArray = await Promise.all(dataPromises);
        return dataArray;
    } catch (error) {
        console.error("Error al obtener los datos:", error);
        return [];
    }
}




export {fetchFilmsFromAPI, fetchFilmById, fetchDataFromAPI}

