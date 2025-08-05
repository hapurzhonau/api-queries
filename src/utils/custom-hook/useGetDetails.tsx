import { useState, useEffect } from 'react';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import { API_URL } from '../../constants/Constants';
import type { Character } from '../../interfaces/apiInterface';

export const useGetDetails = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const handleGoHome = () =>
    navigate({ pathname: '/', search: searchParams.toString() });
  const [isLoading, setIsLoading] = useState(false);
  const [character, setCharacter] = useState<Character | null>(null);
  useEffect(() => {
    if (!id) return;
    const getOneCharacter = async () => {
      setIsLoading(true);
      setCharacter(null);
      try {
        const response = await fetch(`${API_URL}/${id}`);
        const data = await response.json();
        if (!response.ok) throw new Error(data.error);
        setCharacter(data);
        return data;
      } catch (err) {
        return { error: err instanceof Error ? err.message : 'Unknown error' };
      } finally {
        setIsLoading(false);
      }
    };
    getOneCharacter();
  }, [id]);
  return { handleGoHome, isLoading, character };
};
