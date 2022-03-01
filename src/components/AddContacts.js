import React from 'react';

const x = React.Component;

class AddContact extends x {
    render(){
        return(
            <div className='ui main'>
                <h2>AddContact</h2>
                <form className='ui form'>
                    <div className='field'>
                        <label>Name</label>
                        <input type="Text" name="name" placeholder='name'/>
                     </div>
                    <div className='field'>
                        <label>Name</label>
                        <input type="Text" name="name" placeholder='name'/>
                     </div>
                    </form>
                    <button className='ui button blue'>Button</button>
            </div>
        );
    }
}

export default AddContact;