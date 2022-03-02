import React from 'react';

const CardContact = (props) =>{
    const {id, name, email} = props.contacts;
    return(
      <div className='item'>
        <div className='content'>
          <div className='header'>{name}</div>
          <div>{email}</div>
        </div>
        <i className='trash alternate outline icon' style={{color: "red", marginTop: "7px"}}></i>
      </div>
    );
}

export default CardContact;