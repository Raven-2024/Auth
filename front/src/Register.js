import React, { useState } from "react";
import axios from "axios";
import "./assets/css/Login.css";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(
        "http://127.0.0.1:8000/api/register-user",
        { username, password }
      );
      alert(result.data.message);
      
    } catch (error) {
      alert(error);
    }
    navigate("/");  
  };

  return (
    <>
      <div className="login-form">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username:</label>
            <input
              type="text"
              className="input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
             <br />
             <br />
          </div>

          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              className="input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
             <br />
             <br />
          </div>

          <button type="submit" className="btn-submit">Register</button>

          <div > 
          <h3>Already have an account?</h3>
          <button className="login-btn" onClick={() => navigate("/")}>
            <span>Sign In</span>
          </button>
          </div>


        </form>
      </div>
    </>
  );
}

export default Register;
