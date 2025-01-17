import { PersistGate } from 'redux-persist/integration/react';
import { useSelector, useDispatch } from 'react-redux';
import ContactList from './ContactList/ContactList';
import SearchBox from './SearchBox/SearchBox';
import ContactForm from './ContactForm/ContactForm';
import { addContact, deleteContact } from '../redux/contactsSlice';
import { changeFilter } from '../redux/filtersSlice';
import { persistor } from '../redux/store';
import './App.css';

const App = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filters.name);
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  const handleAddContact = (name, number) => {
    dispatch(addContact({ name, number }));
  };

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      typeof contact.name === 'string' &&
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const handleRemoveContact = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <PersistGate loading={null} persistor={persistor}>
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={handleAddContact} />
        <SearchBox filter={filter} onFilterChange={handleFilterChange} />
        <ContactList contacts={getFilteredContacts()} onRemoveContact={handleRemoveContact} />
      </div>
    </PersistGate>
  );
};

export default App;
