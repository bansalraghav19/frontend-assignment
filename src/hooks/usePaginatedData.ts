import { useState, useMemo, useCallback } from 'react';
import useCacheData from './useCacheData';

interface Project {
  's.no': number;
  'percentage.funded': number;
  'amt.pledged': string;
}

const usePaginatedData = (recordsPerPage: number) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const fetchData = useCallback(async (): Promise<Project[]> => {
    const response = await fetch(
      'https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json'
    );
    return await response.json();
  }, []);

  const [data, loading, error] = useCacheData<Project[]>('projects-data', fetchData);

  const totalPages = useMemo(() => (data ? Math.ceil(data.length / recordsPerPage) : 0), [data, recordsPerPage]);

  const paginatedData = useMemo(() => {
    if (data) {
      const startIndex = (currentPage - 1) * recordsPerPage;
      return data.slice(startIndex, startIndex + recordsPerPage);
    }
    return [];
  }, [data, currentPage, recordsPerPage]);

  const goToPage = (page: number) => {
    if (page < 1) page = 1;
    if (page > totalPages) page = totalPages;
    setCurrentPage(page);
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const setPage = (page: number) => {
    goToPage(page);
  };

  return {
    paginatedData,
    loading,
    error,
    currentPage,
    totalPages,
    goToNextPage,
    goToPreviousPage,
    setPage,
    goToPage, 
  };
};

export default usePaginatedData;
