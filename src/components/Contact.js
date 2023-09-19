import React, { useState } from 'react';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isValid, setIsValid] = useState(true);

  const validateEmail = (e) => {
    const email = e.target.value;
    setEmail(email);

    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    setIsValid(re.test(String(email).toLowerCase()));
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
          />
        </label>
        <label>
          Email:
          <input 
            type="email" 
            name="email" 
            value={email}
            onChange={validateEmail} 
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
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Contact;
