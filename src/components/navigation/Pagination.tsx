import { Button } from '../button/Button';

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
      <Button onClick={() => onPrev(page - 1)} disabled={page <= 1}>
        Prev
      </Button>
      <span>
        {page} / {totalPages}
      </span>
      <Button onClick={() => onNext(page + 1)} disabled={page >= totalPages}>
        Next
      </Button>
    </div>
  );
};
