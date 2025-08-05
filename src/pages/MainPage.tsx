import { Search } from '../components/search/Search';
import { Cards } from '../components/cards/Cards';
import { CardsSkeleton } from '../components/cardsSkeleton/CardsSkeleton';
import { Outlet, useParams } from 'react-router-dom';
import clsx from 'clsx';
import { Flyout } from '../components/flyout/Flyout';
import { Pagination } from '../components/navigation/Pagination';
import { useGetCards } from '../utils/custom-hook/useGetCards';

export const MainPage = () => {
  const { id: details } = useParams();
  const {
    cards,
    error,
    handleGetSearchValue,
    isLoading,
    pagination: { handlePageChange, page, totalPages },
  } = useGetCards();
  if (error) return <h3>{error}</h3>;
  return (
    <section role="region" className="flex-1 flex flex-col gap-4">
      <Search handleGetSearchValue={handleGetSearchValue} />
      {isLoading && <CardsSkeleton />}
      {!isLoading && (
        <>
          <Pagination
            page={page}
            totalPages={totalPages}
            changePage={handlePageChange}
          />
          <div role="complementary" className={clsx(details && 'flex')}>
            <Cards cards={cards} />
            <Outlet />
          </div>
          <Pagination
            page={page}
            totalPages={totalPages}
            changePage={handlePageChange}
          />
          <Flyout />
        </>
      )}
    </section>
  );
};
