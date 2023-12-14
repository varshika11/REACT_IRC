import React, { useState } from 'react';
import './Signup.css';

function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleSignup = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match");
    } else {
      console.log(`Email: ${email}, Password: ${passwordsMatch}`);
      setPasswordsMatch(true);
    }
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="signup-page">
      <div className="signup-card">
        <h2 className="signup-heading">SIGNUP</h2>

        <form onSubmit={handleSignup}>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <br />
          <br />

          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <br />
          <br />

          <div className="form-group">
            <label>Confirm Password:</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <br />
          <br />
          <br />
          <div className="form-group">
            <label>
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              I agree to the terms and conditions
            </label>
          </div>
          <br/>
          <br/>

          <div className="form-group">
            <center>
              <input type="submit" value="Create" />
            </center>
          </div>
        </form>
        <br />
      </div>
    </div>
  );
}

export default SignupPage;
