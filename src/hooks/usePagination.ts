import { useMemo } from 'react';

interface UsePaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const usePagination = ({ currentPage, totalPages, onPageChange }: UsePaginationProps) => {
  const generatePageNumbers = useMemo(() => {
    const pageNumbers: (number | string)[] = [];

    if (currentPage > 3) pageNumbers.push(1);

    if (currentPage > 4) pageNumbers.push('...');

    const startPage = Math.max(currentPage - 1, 1);
    const endPage = Math.min(currentPage + 1, totalPages);

    for (let i = startPage; i <= endPage; i++) {
      if (!pageNumbers.includes(i)) {
        pageNumbers.push(i);
      }
    }

    if (currentPage < totalPages - 2) pageNumbers.push('...');

    if (currentPage < totalPages - 1) pageNumbers.push(totalPages);

    return pageNumbers;
  }, [currentPage, totalPages]);

  return { pageNumbers: generatePageNumbers, goToPage: onPageChange };
};
