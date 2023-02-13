import React from "react";
import SuperSelect from "../../../hw07/common/c5-SuperSelect/SuperSelect";
import { Pagination } from "@mui/material";
import s from "./SuperPagination.module.css";

export type SuperPaginationPropsType = {
  id?: string;
  page: number;
  itemsCountForPage: number;
  totalCount: number;
  onChange: (page: number, count: number) => void;
};

const SuperPagination: React.FC<SuperPaginationPropsType> = ({
  page,
  itemsCountForPage,
  totalCount,
  onChange,
  id = "hw15",
}) => {
  const lastPage = Math.ceil(totalCount / itemsCountForPage); // вычислить количество страниц

  const onChangeCallback = (event: any, page: number) => {
    onChange(page, itemsCountForPage);
  };

  const onChangeSelect = (event: any) => {
    onChange(page, event.currentTarget.value);
  };

  return (
    <div className={s.pagination}>
      <Pagination
        id={id + "-pagination"}
        sx={{
          // стили для Pagination
          ".MuiButtonBase-root": {
            width: "24px",
            size: "24px",
            borderRadius: "2px",
            color: "var(--color)",
          },
          ".MuiButtonBase-root.Mui-selected, .MuiButtonBase-root.Mui-selected:hover":
            {
              background: "#0066CC",
              color: "#fff",
              cursor: "default",
            },
        }}
        page={page}
        count={lastPage}
        onChange={onChangeCallback}
        hideNextButton
        hidePrevButton
      />

      <span className={s.text1}>show</span>

      <SuperSelect
        id={id + "-pagination-select"}
        value={itemsCountForPage}
        options={[
          { id: 4, value: 4 },
          { id: 7, value: 7 },
          { id: 10, value: 10 },
        ]}
        onChange={onChangeSelect}
        className={s.select}
      />

      <span className={s.text2}>rows in table</span>
    </div>
  );
};

export default SuperPagination;
