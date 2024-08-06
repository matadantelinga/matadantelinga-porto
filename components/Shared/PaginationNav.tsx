"use client";

import { usePaginationStore } from "@/hooks/usePagination";
import { useQueryParamsStore } from "@/hooks/useQueryParams";
import { calculatePaginationInfo } from "@/lib/utils/calculatePaginationInfo";
import { GridWrapper } from "./GridWrapper";

export const PaginationNav = () => {
  const { paginationProps, setPaginationProps, setLoading } =
    usePaginationStore();
  const { queryParams, setQueryParams } = useQueryParamsStore((state) => ({
    queryParams: state.queryParams,
    setQueryParams: state.setQueryParams,
  }));

  const handlePageNumberChange = (page: number) => {
    if (page < 1 || page > paginationProps.pageCount) return; // Ensure page is within valid range

    setLoading(true);

    // Update paginationProps and queryParams
    setPaginationProps({
      page,
    });
    setQueryParams({ page });

    // Optionally reset loading state after a delay
    setTimeout(() => {
      setLoading(false);
    }, 200);
  };

  const generatePaginationItems = () => {
    const paginationItems = [];

    if (paginationInfo.hasPrevious) {
      paginationItems.push(
        <li className="page-item" key="previous">
          <a
            className="cursor-pointer page-link prev-link"
            onClick={() => handlePageNumberChange(paginationProps.page - 1)}
          >
            Previous
          </a>
        </li>
      );
    }

    for (let i = paginationInfo.startPage; i <= paginationInfo.endPage; i++) {
      paginationItems.push(
        <li className="page-item" key={i}>
          <a
            className={`cursor-pointer page-link ${
              i === paginationProps.page ? "active" : ""
            }`}
            onClick={() => handlePageNumberChange(i)}
          >
            {i}
          </a>
        </li>
      );
    }

    if (paginationInfo.hasNext) {
      paginationItems.push(
        <li className="page-item" key="next">
          <a
            className="cursor-pointer page-link next-link"
            onClick={() => handlePageNumberChange(paginationProps.page + 1)}
          >
            Next
          </a>
        </li>
      );
    }

    return paginationItems;
  };

  const paginationInfo = calculatePaginationInfo(
    paginationProps.page,
    paginationProps.pageCount
  );
  const paginationItems = generatePaginationItems();

  return (
    <>
      <GridWrapper padding="py-0">
        <div className="col-span-12">
          <nav className="pagination-wrapper pt-4 pb-4">
            <ul className="pagination flex justify-end">{paginationItems}</ul>
          </nav>
        </div>
      </GridWrapper>
    </>
  );
};
