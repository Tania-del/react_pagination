/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
export interface IPagination {
  total: number;
  perPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const generatePages = (number: number) => {
  // eslint-disable-next-line no-plusplus
  const result = [];

  for (let i = 1; i <= number; i += 1) {
    result.push(i);
  }

  return result;
};

export const Pagination: React.FC<IPagination> = ({
  total,
  currentPage,
  onPageChange,
}) => {
  return (
    <ul className="pagination">
      <li
        className={`page-item ${currentPage <= 1 ? 'disabled' : ''}`}
        onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
      >
        <a
          data-cy="prevLink"
          className="page-link"
          href="#prev"
          aria-disabled={currentPage <= 1}
        >
          «
        </a>
      </li>

      {generatePages(total).map((page) => (
        <li
          onClick={() => onPageChange(page)}
          className={`page-item ${currentPage === page ? 'active' : ''}`}
          key={page}
        >
          <a data-cy="pageLink" className="page-link" href={`#${page}`}>
            {page}
          </a>
        </li>
      ))}

      <li
        className={`page-item ${currentPage >= total ? 'disabled' : ''}`}
        onClick={() => onPageChange(Math.min(currentPage + 1, total))}
      >
        <a
          data-cy="nextLink"
          className="page-link"
          href="#next"
          aria-disabled={currentPage >= total}
        >
          »
        </a>
      </li>
    </ul>
  );
};
