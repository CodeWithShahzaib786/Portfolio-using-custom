import React from 'react'
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import '../app/styles/contact.css';

const Contact = () => {
  return (
    <div id='contact' className='contact-container'>
      <div className='grid md:grid-cols-2 gap-10'>
        <div className='contact-space'>
            <h2 className='contact-heading'>Get in touch</h2>
            <p className='contact-text'>
                Drop me a line, give me a call, or send me a message by submitting the form 
            </p>
            <div className='contact-flex'>
                <IoMdMail size={30}/> shahzaibkaimkhani2003@gmail.com
            </div>
            <div className='contact-flex'>
                <FaPhoneAlt size={30}/> (+92) 3323819058
            </div>
        </div>
        <div className='contact-space'>
            <div className='form'>
                <label htmlFor="name">Name</label>
                <input type="text" 
                className='input-field'
                id='name'
                />
            </div>
            <div className='form'>
                <label htmlFor="email">Email</label>
                <input type="text" 
                className='input-field'
                id='email'
                />
            </div>
            <div className='form'>
                <label htmlFor="msg">Message</label>
                <textarea id="msg" rows={8} className='textarea-field'></textarea>
            </div>
            <button className='button'>Send</button>
        </div>
      </div>
    </div>
  )
}

export default Contact;
