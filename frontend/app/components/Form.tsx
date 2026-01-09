"use client";


import React, { useState } from 'react'
import '../style/register.css';

const Form = () => {

  const [role, setRole] = useState("user");
  
   const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const payload = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      password: formData.get("password"),
      role, // 🔥 auto sent
    };

    console.log(payload); // send to API later
  };



   return (
    <div className="register-container">
      <div className="register-card">
        <h1 className="title">Create Account</h1>
        <p className="subtitle">Join us and start your journey</p>

           <div className="role-selector">
          <button
            type="button"
            className={`role-btn ${role === "user" ? "active" : ""}`}
            onClick={() => setRole("user")}
          >
            User
          </button>

          <button
            type="button"
            className={`role-btn ${role === "artist" ? "active" : ""}`}
            onClick={() => setRole("artist")}
          >
            Artist
          </button>
        </div>

        <form className="form">
          <div className="name-row">
            <input type="text" placeholder="First Name" required />
            <input type="text" placeholder="Last Name" required />
          </div>

          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />

          <button className="primary-btn" type="submit">
            Register
          </button>
        </form>

        <div className="divider">
          <span>OR</span>
        </div>

        <button className="google-btn">
          Sign in with Google
        </button>
      </div>
    </div>
  );
}

export default Form