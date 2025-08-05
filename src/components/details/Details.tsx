import { useGetDetails } from '../../utils/custom-hook/useGetDetails';
import { Button } from '../button/Button';

export const Details = () => {
  const { character, handleGoHome, isLoading } = useGetDetails();
  return (
    <aside className="flex flex-col gap-4 w-3/5 border-l pl-4">
      <Button onClick={handleGoHome}>Close</Button>
      {isLoading && (
        <div
          aria-busy="true"
          className="bg-gray-700 rounded-sm p-1 animate-pulse"
        >
          <div className="w-full aspect-square object-cover rounded-t-sm bg-gray-500 mb-1" />
          <p>Status: Loading ...</p>
          <p>Species: Loading ... </p>
          <p>Gender: Loading ...</p>
        </div>
      )}
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
