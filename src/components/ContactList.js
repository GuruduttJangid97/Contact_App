import React from 'react'
import Contactcard from './Contactcard';

const ContactList = (props) => {
  const renderContactList = props.contacts.map((contacts)=>{
    return(
      <Contactcard contacts={contacts}></Contactcard>
    );
  })
  return(
    <div className='ui celled list'>
      {renderContactList}
    </div>
  );
}

export default ContactList;