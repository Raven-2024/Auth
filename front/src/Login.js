import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./assets/css/Login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const token = localStorage.getItem("token");

    if (token) {
      alert("Already logged in. Please log out first.");
      return;
    }
    try {
      const res = await axios.post("http://localhost:8000/api/login", {
        username,
        password,
      });
      
      const token = res.data;
      
      localStorage.setItem("token", token);
      console.log("Login successful!");
      console.log(token)
      navigate("/show-user");
    } catch (err) {
      console.log("Login failed: " + err.response.data.message);
    }
  };

  return (
    <>
    <div className="login-form">
   
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          Username:{" "}
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)} className="input"
          />{" "}
          <br />
          <br />
          Password:{" "}
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)} className="input"
          />{" "}
          <br />
          <br />
          <input type="submit" className="btn-submit" />

          <div > 
          <h3>You don't have an account yet</h3>
          <button className="register-btn" onClick={() => navigate("/show-contact")}>
            <span>Sign Up</span>
          </button>
          </div>

        </form>
        <br />
        <br />
  
      </div>
    </>
  );
}

export default Login;
