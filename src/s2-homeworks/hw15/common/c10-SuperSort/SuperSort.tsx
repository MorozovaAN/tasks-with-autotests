import React from "react";
import iconUp from "../../iconUp.svg";
import iconDown from "../../iconDown.svg";
import iconDefault from "../../iconDefault.svg";
import s from "./SuperSelect.module.css";

// добавить в проект иконки и импортировать
const downIcon = iconDown;
const upIcon = iconUp;
const noneIcon = iconDefault;

export type SuperSortPropsType = {
  id?: string;
  sort: string;
  value: string;
  onChange: (newSort: string) => void;
};

export const pureChange = (sort: string, down: string, up: string) => {
  // sort: (click) => down (click) => up (click) => '' (click) => down
  return sort === down ? up : sort == up ? "" : down;
};

const SuperSort: React.FC<SuperSortPropsType> = ({
  sort,
  value,
  onChange,
  id = "hw15",
}) => {
  const up = "0" + value;
  const down = "1" + value;

  const onChangeCallback = () => {
    onChange(pureChange(sort, down, up));
  };

  const icon = sort === down ? downIcon : sort === up ? upIcon : noneIcon;

  return (
    <span
      id={id + "-sort-" + value}
      onClick={onChangeCallback}
      className={s.select}
    >
      <img id={id + "-icon-" + sort} src={icon} alt="" />
    </span>
  );
};

export default SuperSort;
