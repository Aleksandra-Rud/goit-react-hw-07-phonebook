import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "23017101-47ea80d7a3291cc2e4e342e52";

export const fetchContact = createAsyncThunk(
  "contact/fetchContact",
  async () => {
    fetchContact.pending();
    try {
      const resp = await axios.get("/contacts");
      return resp.data;
    } catch (error) {
      return fetchContact.rejected(error);
    }
  }
);

export const addContact = createAsyncThunk(
  "contact/addContact",
  async ({ name, number }) => {
    const addedContact = {
      name,
      number,
    };

    const resp = await axios.post("/contacts", addedContact);
    return resp.data;
  }
);

export const deleteContact = createAsyncThunk(
  "contact/deleteContact",
  async (deletedContacts) => {
    await axios.delete(`/contacts"/${deletedContacts}`);
    return deletedContacts;
  }
);
