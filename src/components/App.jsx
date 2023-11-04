import { useState } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const handleInputChange = e => {
    setFilter(e.currentTarget.value);
  };

  const getFormData = data => {
    const id = nanoid(8);
    const obj = { id, ...data };

    const normalizedName = data.name.toLowerCase();
    const nameExists = contacts.some(
      ({ name }) => name.toLowerCase() === normalizedName
    );
    if (nameExists) {
      alert(`${data.name} is already in contacts.`);
      return;
    }

    setContacts(prevContacts => [obj, ...prevContacts]);
  };

  const deleteHandler = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const normalizedName = filter.toLowerCase();
  const visibleContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedName)
  );

  return (
    <div
      style={{
        height: '100vh',
        padding: 40,
        fontSize: 18,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm getFormData={getFormData} />
      {contacts.length !== 0 && (
        <>
          <h2>Contacts</h2>
          <Filter filter={filter} handleInputChange={handleInputChange} />
          <ContactList deleteHandler={deleteHandler}>
            {visibleContacts}
          </ContactList>
        </>
      )}
    </div>
  );
};
