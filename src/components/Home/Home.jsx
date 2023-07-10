import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContactsAsync } from 'redux/contacts/contactsOperation';
import ContactListItem from '../ContactListItem/ContactListItem';
import css from './ContactList.module.css';

function Home() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);
  const isLoading = useSelector(state => state.contacts.isLoading);

  useEffect(() => {
    dispatch(fetchContactsAsync());
  }, [dispatch]);

  const filteredContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <ul className={css.ContactListConteiner}>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        filteredContacts.map(contact => (
          <ContactListItem key={contact.id} {...contact} />
        ))
      )}
    </ul>
  );
}

export default Home;
