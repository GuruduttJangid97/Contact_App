import React from 'react';
import Header from './Header'
import AddContact from './AddContacts';
import ContacTlist from './ContactList'
import './App.css';

function App() {
  return (
    <div>
      <Header/>
      <AddContact/>
      <ContacTlist/>
    </div>
  );
}

export default App;
