import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './api';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null
  },
  filter: ""
};

export const fetchContactsAsync = createAsyncThunk(
  'contacts/fetchAll',
  async () => {
    const contacts = await fetchContacts();
    return contacts;
  }
);

export const addContactAsync = createAsyncThunk(
  'contacts/addContact',
  async contact => {
    const addedContact = await addContact(contact);
    return addedContact;
  }
);

export const deleteContactAsync = createAsyncThunk(
  'contacts/deleteContact',
  async contactId => {
    await deleteContact(contactId);
    return contactId;
  }
);

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setFilter (state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContactsAsync.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchContactsAsync.fulfilled, (state, action) => {
        state.contacts = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchContactsAsync.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      })
      .addCase(addContactAsync.fulfilled, (state, action) => {
        state.contacts.push(action.payload);
      })
      .addCase(deleteContactAsync.fulfilled, (state, action) => {
        state.contacts = state.contacts.filter(
          contact => contact.id !== action.payload
        );
      });
  },
});

export const { setFilter } = contactsSlice.actions;

export default contactsSlice;
