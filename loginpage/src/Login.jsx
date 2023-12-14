import React, { useState } from 'react';
import Lottie from 'lottie-react';
import './App.css'; 
import animationData from './wanimation.json';
import Signup from './Signup';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showSignup, setShowSignup] = useState(false); 

  const handleLogin = (event) => {
    event.preventDefault();
    console.log(`Username: ${username}, Password: ${password}`);
  };
  const abc = () => {
    setShowSignup(true); 
  };


  if (showSignup) {
    return <Signup />;
  }


  return (
    <div className="login-page">
      <Lottie
        className="centered-animation"
        animationData={animationData}
        autoplay
        loop
        speed={1.5} 
        style={{ width: '300px', height: '300px' }} 
      />
      <h2> LOGIN </h2>
      <form onSubmit={handleLogin}>
        <br />
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <br />
        <input type="submit" value="Login" />
      </form>
      <p>
        Don't have an account?{' '}
        <button><span className="link" onClick={abc}>
          Sign Up
        </span>
        </button>
      </p>
    </div>
  );
}

export default LoginPage;
