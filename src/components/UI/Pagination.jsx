import React, { useState } from "react";
import { getPagesArray } from "../../utils/pages";
import "../../styles/App.scss";

const Pagination = ({ page, onChange, totalPages, limit }) => {
  let pagesArray = getPagesArray(totalPages);

  return (
    <div className="pagination">
      {pagesArray.map((p) => (
        <div
          onClick={() => onChange(p, limit)}
          key={p}
          className={
            page === p ? "pagination__number _active" : "pagination__number"
          }
        >
          {p}
        </div>
      ))}
    </div>
  );
};

export default Pagination;
