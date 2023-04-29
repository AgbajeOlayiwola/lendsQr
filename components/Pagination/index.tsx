import React from "react";
import * as _ from "lodash";
import styles from "./styles.module.scss";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Pagination = ({
  items,
  pageSize,
  currentPage,
  onPageChange,
}: {
  items: any;
  pageSize: any;
  currentPage: any;
  onPageChange: any;
}) => {
  const pageCount = items / pageSize;

  if (Math.ceil(pageCount) === 1) return null;
  const pages = _.range(1, pageCount + 1);
  return (
    <nav aria-label="..." className={styles.navigation}>
      <div className={styles.direction}>
        <AiOutlineLeft />
      </div>
      <ul className={styles.pagination}>
        {pages.map((page: any) => (
          <li
            key={page}
            className={page === currentPage ? styles.active : styles.inactive}
          >
            <a
              onClick={() => onPageChange(page)}
              className="page-link"
              href="#"
            >
              {page}
            </a>
          </li>
        ))}
        <div className={styles.direction}>
          <AiOutlineRight />
        </div>
      </ul>
    </nav>
  );
};

export default Pagination;
