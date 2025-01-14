import React, { useEffect, useLayoutEffect } from "react";
import {
  useLocation,
  useNavigate,
} from "react-router-dom";

import usePaginatedData from "../../hooks/usePaginatedData";
import Table from "../Table";
import TableHeader from "../Table/TableHeader";
import TableRow from "../Table/TableRow";
import TableCell from "../Table/TableCell";
import Pagination from "../Pagination";
import TableShimmer from "../TableShimmer";

const PaginatedTable: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const currentPageParam = new URLSearchParams(location.search).get("page");

  const currentPageFromPath = currentPageParam
    ? parseInt(currentPageParam, 10)
    : 1;

  const { paginatedData, loading, error, currentPage, totalPages, setPage } =
    usePaginatedData(5);

  useLayoutEffect(() => {
    setPage(currentPageFromPath);
  }, [currentPageFromPath, setPage]);

  const handlePageChange = (page: number) => {
    setPage(page);
    navigate(`/?page=${page}`);
  };

//   return <TableShimmer />

  if (loading) return <TableShimmer />;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="App">
      <h1>Saas Labs Paginated Table</h1>

      <Table>
        <TableHeader>
          <TableCell>S.No</TableCell>
          <TableCell>Percentage Funded</TableCell>
          <TableCell>Amount Pledged</TableCell>
        </TableHeader>

        {paginatedData.map((project, index) => (
          <TableRow key={index}>
            <TableCell>{project["s.no"]}</TableCell>
            <TableCell>{project["percentage.funded"]}%</TableCell>
            <TableCell>${project["amt.pledged"]}</TableCell>
          </TableRow>
        ))}
      </Table>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        goToPage={handlePageChange}
      />
    </div>
  );
};

export default PaginatedTable;
