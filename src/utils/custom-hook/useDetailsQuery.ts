import { useQuery } from '@tanstack/react-query';
import { cacheStaleTime } from '../../constants/Constants';
import { getDetails } from '../../api/Api';

export const useDetailsQuery = (id: string | undefined) => {
  return useQuery({
    queryKey: ['details', id],
    queryFn: () => getDetails(id),
    staleTime: cacheStaleTime,
    enabled: !!id,
  });
};
