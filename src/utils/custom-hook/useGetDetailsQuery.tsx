import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import { useDetailsQuery } from './useDetailsQuery';

export const useGetDetailsQuery = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const handleGoHome = () =>
    navigate({ pathname: '/', search: searchParams.toString() });
  const { isLoading, isFetching, error, data, refetch } = useDetailsQuery(id);
  return {
    handleGoHome,
    isLoading,
    isFetching,
    error,
    character: data,
    refetch,
  };
};
