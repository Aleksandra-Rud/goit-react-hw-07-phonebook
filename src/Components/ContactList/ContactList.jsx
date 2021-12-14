import React from "react";
import s from "./ContactList.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchContact, deleteContact } from "../../redux/operations";
import { getLoading, onFilteredContacts } from "../../redux/selectors";

function ContactList() {
  const contacts = useSelector(onFilteredContacts);
  const isLoading = useSelector(getLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

  return (
    !isLoading &&
    contacts && (
      <ul className={s.contactLists}>
        {contacts.map(({ name, number, id }) => (
          <li key={id} className={s.contactItem}>
            <p className={s.contactName}>
              {name}: <span className={s.contactNumber}>{number}</span>
            </p>
            <button
              type="button"
              onClick={() => dispatch(deleteContact(id))}
              className={s.btnDelete}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    )
  );
}

export default ContactList;
