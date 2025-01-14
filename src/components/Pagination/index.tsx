import React, { memo } from 'react';
import styles from './Pagination.module.css';

import { usePagination } from '../../hooks/usePagination';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  goToPage: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, goToPage }) => {
  const { pageNumbers, goToPage: handlePageChange } = usePagination({
    currentPage,
    totalPages,
    onPageChange: goToPage,
  });

  return (
    <div className={styles.pagination}>
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={styles.pageButton}
        aria-label="Go to first page"
      >
        Prev
      </button>

      <div className={styles.pages}>
        {pageNumbers.map((page, index) => (
          page === '...' ? (
            <span key={index} className={styles.dots}>...</span>
          ) : (
            <button
              key={index}
              onClick={() => handlePageChange(page as number)}
              className={`${styles.pageButton} ${currentPage === page ? styles.active : ''}`}
              disabled={currentPage === page}
              aria-label={`Go to page ${page}`}
            >
              {page}
            </button>
          )
        ))}
      </div>

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={styles.pageButton}
        aria-label="Go to next page"
      >
        Next
      </button>
    </div>
  );
};

export default memo(Pagination);
