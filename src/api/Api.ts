import type { ApiResponse } from '../interfaces/apiInterface';

const URL = 'https://rickandmortyapi.com/api/character';

export const getAllCharacters = async () => {
  try {
    const response = await fetch(URL);
    if (!response.ok) throw new Error('Oops!');
    const data: Promise<ApiResponse> = response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
