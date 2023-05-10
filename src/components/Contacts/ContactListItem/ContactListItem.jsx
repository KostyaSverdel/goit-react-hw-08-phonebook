import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContactAsync } from '../../redux/contactsSlice';
import css from './ContactListItem.module.css';

function ContactListItem({ id, name, phone }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContactAsync(id));
  };

  return (
    <li className={css.item}>
      {name}: {phone}
      <button className={css.ButtonsDelete} onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
}

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default ContactListItem;
