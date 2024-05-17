
// Función para obtener datos de la API SWAPI
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

export default fetchDataFromAPI;

