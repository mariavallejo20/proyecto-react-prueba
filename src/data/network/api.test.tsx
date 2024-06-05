
import { callAPI } from "./api";

// Mockeando la función fetch
global.fetch = jest.fn();
const fetchMock = global.fetch as jest.Mock;

describe('callAPI', () => {

  it('La llamada a la API devuelve datos correctamente', async () => {
    
    const mockData = { name: 'Luke Skywalker' };

    const mockResponse = {
      json: jest.fn().mockResolvedValue(mockData),
    };

    fetchMock.mockResolvedValue(mockResponse);

    const url = 'https://swapi.dev/api/films/1/';
    const result = await callAPI(url);

    expect(result).toEqual(mockData);
    expect(global.fetch).toHaveBeenCalledWith(url);
    expect(mockResponse.json).toHaveBeenCalled();
   
  });

  it('Error cuando la llamada a la API falla', async () => {
    const errorMessage = 'Failed to fetch data';
    fetchMock.mockRejectedValue(new Error(errorMessage));

    const url = 'https://swapi.dev/api/films/1/';

    await expect(callAPI(url)).rejects.toThrow(`Failed to fetch data from ${url}`);
    expect(global.fetch).toHaveBeenCalledWith(url);
  });


});
