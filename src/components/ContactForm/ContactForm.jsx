import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addContactAsync } from '../../redux/contactsSlice';
import css from '../ContactForm/ContactForm.module.css';

function ContactForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const contacts = useSelector(state => state.contacts.contacts);

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleNumberChange = e => {
    setPhone(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const isNameExist = contacts.find(contact => contact.name === name);
    const isNumberExist = contacts.find(contact => contact.phone === phone);

    if (!name || !phone) {
      alert('Please provide both name and number');
      return;
    }
    if (isNameExist) {
      alert(`${name} is already in contacts!`);
      return;
    }
    if (isNumberExist) {
      alert(`${phone} is already in contacts!`);
      return;
    }
    try {
      await dispatch(addContactAsync({ name, phone }));
      setName('');
      setPhone('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className={css.phoneForm} onSubmit={handleSubmit}>
      <label className={css.labelsPhone}>
        Name
        <input
          className={css.inputsForm}
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}
        />
      </label>
      <label className={css.labelsPhone}>
        Phone Number
        <input
          className={css.inputsForm}
          type="tel"
          name="number"
          value={phone}
          onChange={handleNumberChange}
        />
      </label>
      <button className={css.buttonForm} type="submit">
        Add contact
      </button>
    </form>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
//test push//
