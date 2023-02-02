import { useMemo } from "react";

export const usePagination = (array, totalPages) => {
  const pagesArray = useMemo(() => {
    for (let i = 1; i <= totalPages; i++) {
      array.push(i)
    }
    return array;
  }, [totalPages]);

  return pagesArray;
};
