import { IPaginationInfo } from "../interfaces/igeneral";

export const calculatePaginationInfo = (
  currentPage: number,
  pageTotal: number
): IPaginationInfo => {
  const maxPagesToShow = 5; // You can adjust this value based on your preference

  let startPage: number, endPage: number;
  let hasPrevious: boolean, hasNext: boolean;

  if (pageTotal <= maxPagesToShow) {
    startPage = 1;
    endPage = pageTotal;
    hasPrevious = currentPage > 1;
    hasNext = currentPage < pageTotal;
  } else {
    const halfMaxPagesToShow = Math.floor(maxPagesToShow / 2);
    if (currentPage <= halfMaxPagesToShow) {
      startPage = 1;
      endPage = maxPagesToShow;
    } else if (currentPage + halfMaxPagesToShow >= pageTotal) {
      startPage = pageTotal - maxPagesToShow + 1;
      endPage = pageTotal;
    } else {
      startPage = currentPage - halfMaxPagesToShow;
      endPage = currentPage + halfMaxPagesToShow;
    }

    hasPrevious = startPage > 1;
    hasNext = endPage < pageTotal;
  }

  return { startPage, endPage, hasPrevious, hasNext };
};
