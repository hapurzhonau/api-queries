import { Button } from '../button/Button';
import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from '@heroicons/react/24/outline';
interface PaginationProps {
  page: number;
  totalPages: number;
  onPrev: (page: number) => void;
  onNext: (page: number) => void;
}

export const Pagination = ({
  page,
  totalPages,
  onPrev,
  onNext,
}: PaginationProps) => {
  return (
    <div className="flex gap-2 justify-center">
      <Button
        onClick={() => onPrev(page - 1)}
        disabled={page <= 1}
        className="border-0 "
      >
        <ArrowLeftCircleIcon strokeWidth="0.8" />
      </Button>
      <span>
        {page} / {totalPages}
      </span>
      <Button
        onClick={() => onNext(page + 1)}
        disabled={page >= totalPages}
        className="border-0"
      >
        <ArrowRightCircleIcon strokeWidth="0.8" />
      </Button>
    </div>
  );
};
