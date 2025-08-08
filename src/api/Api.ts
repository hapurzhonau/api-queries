import { API_URL } from '../constants/Constants';
import type { ApiResponse } from '../interfaces/apiInterface';

export const getAllCharacters = async (page = 1, name = '') => {
  const url = `${API_URL}/?page=${page}&name=${encodeURIComponent(name)}`;

  const response = await fetch(url);
  const data: ApiResponse = await response.json();
  if (!response.ok) throw new Error(data.error);

  return data;
};
