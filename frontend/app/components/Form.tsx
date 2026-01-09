"use client";

import React, { useState } from "react";
import "../style/register.css";
import { User, Mic} from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import '../globals.css';


const Form = () => {
  const [role, setRole] = useState("user");
  const [form, setForm] = useState({ email: '', firstname: '', lastname: '', password: '' });
  const [submitting, setSubmitting] = useState(false);

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
        <h1 className="title customretro">Create Account</h1>
        <p className="subtitle font-bold">Join us and start your journey</p>

        <div className="role-selector">
          <button
            type="button"
            className={`role-btn ${role === "user" ? "active" : ""} flex gap-4`}
            onClick={() => setRole("user")}
          >
            <span className="ml-9 text-[1em] font-black">User</span>
            <User size={20} />
          </button>

          <button
            type="button"
            className={`role-btn ${
              role === "artist" ? "active" : ""
            } flex gap-4`}
            onClick={() => setRole("artist")}
          >
            <span className="ml-9 text-[1em] font-black">Artist</span>
            <Mic size={20} />
          </button>
        </div>

        <form className="form">
          <div className="name-row">
            <input type="text" placeholder="First Name" required />
            <input type="text" placeholder="Last Name" required />
          </div>

          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />

          <button className="primary-btn customnormal text-3xl tracking-[.5rem]" type="submit">
            Register
          </button>
        </form>

        <div className="divider">
          <span>OR</span>
        </div>

        <button className="google-btn flex gap-4">
          <span className="ml-16 text-[1em] font-black customnormal  tracking-[.2rem]">Sigin with Google</span>
           <FcGoogle size={25} />
        </button>
      </div>
    </div>
  );
};

export default Form;
