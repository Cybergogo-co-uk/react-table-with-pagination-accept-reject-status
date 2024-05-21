import React, { useMemo } from "react";

function Pagination(props) {
  const { currentPage, onChangePage, rowsPerPage, data } = props;

  const pages = useMemo(() => {
    const dataLength = data.length;
    return Math.ceil(dataLength / rowsPerPage) === 0
      ? 1
      : Math.ceil(dataLength / rowsPerPage);
  }, [data]);

  const goNext = () => {
    onChangePage(currentPage + 1);
  };
  const goBack = () => {
    onChangePage(currentPage - 1);
  };

  return (
    <div className="pagination-container">
      <div className="pagination-infos">
        Page
        <span className="pagination-current-page">{` ${currentPage} `}</span>
        of
        {` ${pages}`}
      </div>
      <div className="pagination-next-prev-container">
        <PrevButton canGoBack={currentPage > 1} onChangePage={goBack} />
        <NextButton canGoNext={currentPage < pages} onChangePage={goNext} />
      </div>
    </div>
  );
}

export default Pagination;

const NextButton = ({ canGoNext, onChangePage }) => (
  <button
    className="pagination-button"
    onClick={onChangePage}
    disabled={!canGoNext}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m10 7l5 5l-5 5"
      ></path>
    </svg>
  </button>
);

const PrevButton = ({ canGoBack, onChangePage }) => (
  <button
    className="pagination-button"
    onClick={onChangePage}
    disabled={!canGoBack}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m14 7l-5 5l5 5"
      ></path>
    </svg>
  </button>
);
