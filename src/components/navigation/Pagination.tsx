import { Button } from '../button/Button';
import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from '@heroicons/react/24/outline';
interface PaginationProps {
  page: number;
  totalPages: number;
  changePage: (pageNumber: number) => void;
}

export const Pagination = ({
  page,
  totalPages,
  changePage,
}: PaginationProps) => {
  return (
    <div className="flex gap-2 justify-center items-center">
      <Button
        onClick={() => changePage(page - 1)}
        disabled={page <= 1}
        className="border-0 rounded-full p-1"
      >
        <ArrowLeftCircleIcon strokeWidth="0.8" />
      </Button>
      <span>
        {page} / {totalPages}
      </span>
      <Button
        onClick={() => changePage(page + 1)}
        disabled={page >= totalPages}
        className="border-0 rounded-full p-1"
      >
        <ArrowRightCircleIcon strokeWidth="0.8" />
      </Button>
    </div>
  );
};
