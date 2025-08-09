import { useSearchParams } from 'react-router-dom';
import { useLocalStorage } from './useLocalStorage';
import { useGetCharactersQuery } from './useGetCharactersQuery';
import { useCallback } from 'react';

export const useGetCards = () => {
  const [searchValue, setSearchValue] = useLocalStorage('search', '');

  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get('page') || 1);
  const name = searchParams.get('name') || '';
  const { isLoading, data, isFetching, error, refetch } = useGetCharactersQuery(
    page,
    name || searchValue
  );
  const cards = data?.results || [];
  const totalPages = data?.info.pages || 1;
  const handlePageChange = useCallback(
    (newPage: number) => {
      if (newPage >= 1 && newPage <= totalPages) {
        searchParams.set('page', newPage.toString());
        setSearchParams(searchParams);
      }
    },
    [searchParams, setSearchParams, totalPages]
  );

  const handleGetSearchValue = (value: string) => {
    setSearchValue(value);
    setSearchParams({ page: '1', name: value });
  };

  const pagination = {
    totalPages,
    handlePageChange,
    page,
  };
  return {
    handleGetSearchValue,
    pagination,
    isLoading,
    error,
    cards,
    isFetching,
    refetch,
  };
};
