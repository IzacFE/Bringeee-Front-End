import React from "react";
import { useState } from "react";
import { Pagination } from "@mantine/core";
import styles from "./Pagination.module.css";

function PaginList() {
  const [activePage, setPage] = useState(1);
  return (
    <Pagination
      page={activePage}
      onChange={setPage}
      total={10}
      color="yellow"
      className={styles.pagination}
    />
  );
}

export default PaginList;
