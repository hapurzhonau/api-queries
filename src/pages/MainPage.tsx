import { useState, useEffect, useCallback } from 'react';
import { Search } from '../components/search/Search';
import { Cards } from '../components/cards/Cards';
import { getAllCharacters } from '../api/Api';
import type { Character } from '../interfaces/apiInterface';
import { ButtonError } from '../components/buttonError/ButtonError';
import { CardsSkeleton } from '../components/cardsSkeleton/CardsSkeleton';
import { Button } from '../components/button/Button';
import { Outlet, useSearchParams } from 'react-router-dom';

export const MainPage = () => {
  const [cards, setCards] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const [totalPages, setTotalPages] = useState(1);

  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get('page') || 1);
  const name = searchParams.get('name') || '';

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setSearchParams({ page: newPage.toString(), name });
    }
  };

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
    localStorage.setItem('search', value);
    setSearchParams({ page: '1', name: value });
    getCharacters();
  };

  useEffect(() => {
    getCharacters();
  }, [getCharacters]);

  return (
    <>
      <section role="region" className="flex-1 flex flex-col gap-4">
        <ButtonError />
        <Search handleGetSearchValue={handleGetSearchValue} />
        {isLoading ? (
          <CardsSkeleton />
        ) : error ? (
          <h3>{error}</h3>
        ) : (
          <>
            <Cards cards={cards} />
            <div className="flex gap-2">
              <Button
                variant="light"
                onClick={() => handlePageChange(page - 1)}
                disabled={page <= 1}
              >
                Prev
              </Button>
              <span>
                {page} / {totalPages}
              </span>
              <Button
                onClick={() => handlePageChange(page + 1)}
                disabled={page >= totalPages}
              >
                Next
              </Button>
            </div>
          </>
        )}
      </section>
      <aside className="w-1/3 border-l pl-4">
        <Outlet />
      </aside>
    </>
  );
};
