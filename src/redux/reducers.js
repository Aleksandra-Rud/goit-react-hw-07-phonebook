import { combineReducers, createReducer } from "@reduxjs/toolkit";
// import { addContact, deleteContact, filterContact } from "./actions";
import { filterContact } from "./actions";
import { fetchContact, addContact, deleteContact } from "./operations";

const items = createReducer([], {
  [fetchContact.fulfilled]: (_, action) => action.payload,
  [addContact.fulfilled]: (state, action) => [action.payload, ...state],
  [deleteContact.fulfilled]: (state, action) =>
    state.filter((contact) => contact.id !== action.payload),
});

const isLoading = createReducer(false, {
  [fetchContact.pending]: () => true,
  [fetchContact.fulfilled]: () => false,
  [fetchContact.rejected]: () => false,
  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,
  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,
});

const filter = createReducer("", {
  [filterContact]: (_, action) => action.payload,
});

const error = createReducer(null, {});

const rootReducer = combineReducers({
  items,
  isLoading,
  filter,
  error,
});

export default rootReducer;
