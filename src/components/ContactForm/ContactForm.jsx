import { useState } from 'react';

export const ContactForm = ({ getFormData }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    getFormData({ name, number });
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  const handleInputChange = e => {
    const name = e.target.name;
    const value = e.currentTarget.value;

    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', width: 200 }}
    >
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={handleInputChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        required
      />
      <label htmlFor="tel" style={{ marginTop: 20 }}>
        Number
      </label>
      <input
        type="tel"
        name="number"
        id="tel"
        value={number}
        onChange={handleInputChange}
        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        required
      />
      <button style={{ marginTop: 20, width: 'fit-content' }}>
        Add contact
      </button>
    </form>
  );
};
