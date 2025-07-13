import { API_URL } from '../constants/Constants';
import type { ApiResponse } from '../interfaces/apiInterface';

export const getAllCharacters = async () => {
  const raw = localStorage.getItem('search');
  const savedSearch = raw ? raw.trim() : '';
  const url = savedSearch ? `${API_URL}/?name=${savedSearch}` : API_URL;

  try {
    const response = await fetch(url);
    if (!response.ok)
      throw new Error(`Oops! Something went wrong with request`);
    const data: Promise<ApiResponse> = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
