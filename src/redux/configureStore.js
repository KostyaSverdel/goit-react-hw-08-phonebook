import { configureStore } from '@reduxjs/toolkit';
import contactSlice from './contactsSlice';

export default configureStore({
reducer: {
contacts: contactSlice.reducer,
},
});