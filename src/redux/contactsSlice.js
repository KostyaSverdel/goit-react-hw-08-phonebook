import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact, updateContact } from './api';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
  filter: ''
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

export const updateContactAsync = createAsyncThunk(
  'contacts/updateContact',
  async ({ contactId, contact }) => {
    const updatedContact = await updateContact(contactId, contact);
    return updatedContact;
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
        state.items = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchContactsAsync.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      })
      .addCase(addContactAsync.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteContactAsync.fulfilled, (state, action) => {
        state.items = state.items.filter(
          contact => contact.id !== action.payload
        );
      })
      .addCase(updateContactAsync.fulfilled, (state, action) => {
        const { id, ...rest } = action.payload;
        const index = state.items.findIndex(contact => contact.id === id);
        if (index !== -1) {
          state.items[index] = { id, ...rest };
        }
      });
  },
});

export const { setFilter } = contactsSlice.actions;

export default contactsSlice;
