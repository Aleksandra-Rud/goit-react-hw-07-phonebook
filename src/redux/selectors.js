import { createSelector } from "reselect";

export const getAllItems = (state) => state.contacts.items;
export const getFilter = (state) => state.contacts.filter;
export const getLoading = (state) => state.contacts.loading;

export const onFilteredContacts = createSelector(
  [getAllItems, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase().trim();

    return contacts.filter((contact) =>
      contact.toLowerCase().includes(normalizedFilter)
    );
  }
);
