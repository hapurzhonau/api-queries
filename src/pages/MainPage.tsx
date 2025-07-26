import { useState, useEffect, useCallback } from 'react';
import { Search } from '../components/search/Search';
import { Cards } from '../components/cards/Cards';
import { getAllCharacters } from '../api/Api';
import type { Character } from '../interfaces/apiInterface';
import { ButtonError } from '../components/buttonError/ButtonError';
import { CardsSkeleton } from '../components/cardsSkeleton/CardsSkeleton';

export const MainPage = () => {
  const [cards, setCards] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);

  const getCharacters = useCallback(async () => {
    setIsLoading(true);
    const data = await getAllCharacters();
    setIsLoading(false);

    if (data.error) {
      setError(data.error);
    } else {
      setCards(data.results);
      setError(undefined);
    }
  }, []);

  const handleGetSearchValue = (value: string) => {
    localStorage.setItem('search', value);
    getCharacters();
  };

  useEffect(() => {
    getCharacters();
  }, [getCharacters]);

  return (
    <main
      className="gap-8 p-8"
      style={{ display: 'flex', flexDirection: 'column' }}
    >
      <ButtonError />
      <Search handleGetSearchValue={handleGetSearchValue} />
      {isLoading ? (
        <CardsSkeleton />
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <Cards cards={cards} />
      )}
    </main>
  );
};
