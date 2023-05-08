import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export async function registerUser(credentials) {
  const { data } = await axios.post('/users/signup', credentials);
  return data;
}

export async function loginUser(credentials) {
  const { data } = await axios.post('/users/login', credentials);
  return data;
}

export async function logoutUser() {
  await axios.post('/users/logout');
}

export async function getCurrentUser() {
  const { data } = await axios.get('/users/current');
  return data;
}

export async function fetchContacts() {
  const { data } = await axios.get('/contacts');
  return data;
}

export async function addContact(contact) {
  const { data } = await axios.post('/contacts', contact);
  return data;
}

export async function deleteContact(contactId) {
  await axios.delete(`/contacts/${contactId}`);
  return contactId;
}

export async function updateContact(contactId, contact) {
  const { data } = await axios.patch(`/contacts/${contactId}`, contact);
  return data;
}
