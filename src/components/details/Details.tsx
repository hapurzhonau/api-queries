import clsx from 'clsx';
import { useGetDetailsQuery } from '../../utils/custom-hook/useGetDetailsQuery';
import { Button } from '../button/Button';
import { DetailsSkeleton } from '../cardsSkeleton/DetailsSkeleton';

export const Details = () => {
  const { character, handleGoHome, isLoading, error, isFetching, refetch } =
    useGetDetailsQuery();
  return (
    <div className="relative">
      <aside className="p-2 flex flex-col gap-4 sticky top-0">
        <div className="flex gap-2 flex-wrap">
          <div
            className={clsx(
              'p-1 rounded-md',
              isLoading ? 'bg-green-400' : 'bg-blue-400'
            )}
          >
            Load
          </div>
          <div
            className={clsx(
              'p-1 rounded-md',
              isFetching ? 'bg-green-400' : 'bg-blue-400'
            )}
          >
            Fetch
          </div>
          <Button onClick={() => refetch()}>refetch</Button>
        </div>
        <Button onClick={handleGoHome}>Close</Button>
        {error && (
          <h2 className="text-xl font-bold text-red-300">{error.message}</h2>
        )}
        {isLoading && <DetailsSkeleton />}
        {character && (
          <>
            <h2 className="text-xl font-bold">{character.name}</h2>
            <img src={character.image} alt={character.name} />
            <p>Status: {character.status}</p>
            <p>Species: {character.species}</p>
            <p>Gender: {character.gender}</p>
          </>
        )}
      </aside>
    </div>
  );
};
