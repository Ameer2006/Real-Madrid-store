import React from 'react';
import { useState } from 'react';
import { FaGoogle, FaFacebook } from 'react-icons/fa';

export default function SignUp() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Password and Confirm Password are not the same");
      return;
    }
    // Continue with your signup logic
    console.log("Password confirmed:", password);
  };

  return (
    <div className="container" style={{ marginTop: "6rem" }}>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h1 className="text-center">Signup</h1>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input type="text" name="username" className="form-control" placeholder="Username" required />
                </div>
                <div className="form-group">
                  <input type="password" name="password" id="password" className="form-control" placeholder="Password" required onChange={handlePasswordChange} />
                </div>
                <div className="form-group">
                  <input type="password" name="confirmPassword" id="confirm" className="form-control" placeholder="Confirm Password" required onChange={handleConfirmPasswordChange} />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
              </form>
              <div className="mt-3 d-flex text-center">
                <button className="btn btn-danger mr-2 me-4">
                  <FaGoogle className="mr-1" /> sign up with Google
                </button>
                <button className="btn btn-primary">
                  <FaFacebook className="mr-1" /> sign up with Facebook
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
