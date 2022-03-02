import React from 'react';
import Header from './Header'
import AddContact from './AddContacts';
import ContactList from './ContactList'
import './App.css';

function App() {
  const contacts = [
    {
      id: 1,
      name: "Gurudutt Jangid",
      email: "Sharmagurudutt9950@hotmail.com"
    },
    {
      id: 2,
      name: "Jitendra Jangid",
      email: "dragonbladder@gmail.com"
    },
    {
      id: 1,
      name: "Anirudh Sharma",
      email: "anirudhsharma885@gmail.com"
    }
  ]


  return (
    <div className="ui container">
      <Header/>
      <AddContact/>
      <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
