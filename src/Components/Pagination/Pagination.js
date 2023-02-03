import React from "react";
import "./Page.css";

const Pagination = ({ totalCards, cardsPerPage, setCurrentPage }) => {
  let pages = [];
  //to total number of pages
  for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
    pages.push(i);
  }
  return (
    <div>
      {pages.map((page, index) => {
        return (
          <button
            className="button"
            key={index}
            onClick={() => setCurrentPage(page)} //to set current page
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
