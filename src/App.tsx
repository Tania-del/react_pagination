/* eslint-disable @typescript-eslint/no-shadow */
import React, { useState } from 'react';
import './App.css';
import { Pagination } from './components/Pagination';
import { getNumbers } from './utils';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const items = getNumbers(1, 42).map((n) => `Item ${n}`);

export const App: React.FC = () => {
  const calculatePages = (total: number, perPage: number) => Math.ceil(
    total / perPage,
  );

  const [perPage, setPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const pages = calculatePages(items.length, perPage);

  const handlePerPage = ({
    target: { value },
  }: React.ChangeEvent<HTMLSelectElement>) => {
    setPerPage(Number(value));
    setCurrentPage(1);
  };

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="container">
      <h1>Items with Pagination</h1>

      <p className="lead" data-cy="info">
        {`Page ${currentPage} (items ${perPage * currentPage - perPage + 1} - ${Math.min(perPage * currentPage, items.length)} of 42)`}
      </p>

      <div className="form-group row">
        <div className="col-3 col-sm-2 col-xl-1">
          <select
            value={perPage}
            onChange={handlePerPage}
            data-cy="perPageSelector"
            id="perPageSelector"
            className="form-control"
          >
            <option value="3">3</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
          </select>
        </div>

        <label htmlFor="perPageSelector" className="col-form-label col">
          items per page
        </label>
      </div>

      <Pagination
        total={pages}
        perPage={perPage}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />

      <ul>
        {items
          .slice(perPage * currentPage - perPage, perPage * currentPage)
          .map((item) => (
            <li key={item} data-cy="item">
              {item}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default App;
