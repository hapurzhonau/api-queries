import { useState, useCallback, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getAllCharacters } from '../../api/Api';
import type { Character } from '../../interfaces/apiInterface';
import { useLocalStorage } from './useLocalStorage';

export const useGetCards = () => {
  const [cards, setCards] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const [totalPages, setTotalPages] = useState(1);
  const [searchValue, setSearchValue] = useLocalStorage('search', '');

  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get('page') || 1);
  const name = searchParams.get('name') || '';

  const handlePageChange = useCallback(
    (newPage: number) => {
      if (newPage >= 1 && newPage <= totalPages) {
        setSearchParams({ page: newPage.toString(), name: searchValue });
      }
    },
    [searchValue, setSearchParams, totalPages]
  );

  const getCharacters = useCallback(async () => {
    setIsLoading(true);
    const data = await getAllCharacters(page, name);
    setIsLoading(false);

    if (data.error) {
      setError(data.error);
    } else {
      setCards(data.results);
      setError(undefined);
      setTotalPages(data.info.pages);
    }
  }, [page, name]);

  const handleGetSearchValue = (value: string) => {
    setSearchValue(value);
    setSearchParams({ page: '1', name: value });
  };

  useEffect(() => {
    getCharacters();
  }, [getCharacters]);

  const pagination = {
    page,
    totalPages,
    handlePageChange,
  };
  return { handleGetSearchValue, pagination, isLoading, error, cards };
};
