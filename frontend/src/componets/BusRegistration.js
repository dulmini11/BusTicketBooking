import React from 'react';
import "./BusRegistration.css";

const addbuses = () => {
  return (
    <div className="container-A">
    <h2>Fill This Form</h2>

    <form>
        <label htmlFor='name'>Name*</label>
        <input type ="text"  placeholder='Enter owner name' name='name'/>

        <label htmlFor='contact'>contact*</label>
        <input type ="text"  placeholder='Enter contact number' name='contact'/>

        <label htmlFor='email'>Email*</label>
        <input type ="email"  placeholder='Enter email' name='email'/>

        <label htmlFor='route'>Bus route</label>
        <input type ="text"  placeholder='Enter bus route' name='route'/>

        <label htmlFor='capacity'>capacity</label>
        <input type ="text"  placeholder='Enter bus capacity' name='capacity'/>

        <button type='submit'>Submit</button>
    </form> 
        
  </div>
  )
}

export default addbuses