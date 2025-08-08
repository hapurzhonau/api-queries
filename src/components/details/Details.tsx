import { useGetDetails } from '../../utils/custom-hook/useGetDetails';
import { Button } from '../button/Button';
import { DetailsSkeleton } from '../cardsSkeleton/DetailsSkeleton';

export const Details = () => {
  const { character, handleGoHome, isLoading } = useGetDetails();
  return (
    <aside className="flex flex-col gap-4 w-3/5 pl-4">
      <Button onClick={handleGoHome}>Close</Button>
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
  );
};
