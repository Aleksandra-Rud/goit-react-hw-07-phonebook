import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://61bb6f1fe943920017784ea8.mockapi.io/api/v1/";

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
  async (contactId) => {
    await axios.delete(`/contacts/${contactId}`);
    return contactId;
  }
);
