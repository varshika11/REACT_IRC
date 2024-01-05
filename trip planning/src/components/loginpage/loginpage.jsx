import React from 'react';
import './login.css';
const Description = () => {
  return (
    <div className="description-box">
      <h3><center><u>LOGIN</u> </center></h3>
      <p>
        <h4>USERNAME/EMAIL : <br/></h4>
        <input type="text" placeholder="Please Enter Your Username/Email"/>
        <h4>PASSWORD : <br/></h4>
        <input type="password" placeholder="Please Enter Your Password"/><br/>
        <button style={{ backgroundColor: 'blue', color: 'white', padding: '10px', borderRadius: '5px' }} type="submit">
        LOGIN
      </button>
          <br/>
          <br/>
          <button style={{ backgroundColor: 'red', color: 'white', padding: '10px', borderRadius: '5px' }} type="submit"> SIGNUP</button>
      </p>
    </div>
  );
}

export default Description;
