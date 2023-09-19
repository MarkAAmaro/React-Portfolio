import React, { useState } from 'react';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [nameError, setNameError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const validateEmail = (e) => {
    const email = e.target.value;
    setEmail(email);

    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    setIsValid(re.test(String(email).toLowerCase()));
  };

  const validateRequiredField = (value, setError) => {
    if (!value) {
      setError(true);
    } else {
      setError(false);
    }
  };

  return (
    <div id="contact">
      <h2>Contact</h2>
      <form>
        <label>
          Name:
          <input 
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={() => validateRequiredField(name, setNameError)}
          />
          {nameError && <div style={{color: 'red'}}>This field is required.</div>}
        </label>
        <label>
          Email:
          <input 
            type="email" 
            name="email" 
            value={email}
            onChange={validateEmail}
            onBlur={() => validateRequiredField(email, setIsValid)}
            style={{borderColor: isValid ? 'green' : 'red'}}
          />
          {!isValid && <div style={{color: 'red'}}>Invalid email address</div>}
        </label>
        <label>
          Message:
          <textarea 
            name="message" 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onBlur={() => validateRequiredField(message, setMessageError)}
          />
          {messageError && <div style={{color: 'red'}}>This field is required.</div>}
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Contact;

