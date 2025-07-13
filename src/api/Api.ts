import { API_URL } from '../constants/Constants';
import type { ApiResponse } from '../interfaces/apiInterface';

export const getAllCharacters = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok)
      throw new Error(`Oops! Something went wrong with request`);
    const data: Promise<ApiResponse> = response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
