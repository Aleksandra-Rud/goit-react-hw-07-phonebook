import React from "react";
import s from "./Filter.module.css";

import { useSelector, useDispatch } from "react-redux";

import { filterContact } from "../../redux/actions";
import { getFilter } from "../../redux/selectors";

function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <>
      <label className={s.filterInputLabel}>Find contacts by name</label>
      <br />
      <input
        className={s.filteredInput}
        type="text"
        name="filter"
        value={filter}
        onChange={(e) => dispatch(filterContact(e.target.value))}
        placeholder="Contact"
      />
    </>
  );
}

export default Filter;
