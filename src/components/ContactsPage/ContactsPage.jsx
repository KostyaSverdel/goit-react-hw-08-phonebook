import ContactForm from 'components/Contacts/ContactForm/ContactForm';
import Filter from 'components/Contacts/Filter/Filter';
import ContactList from 'components/Contacts/ContactList/ContactList';

const ContactsPage = () => {
  return (
    <div>
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
};

export default ContactsPage;
