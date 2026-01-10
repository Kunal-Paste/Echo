"use client";

import React, { useState } from "react";
import "../style/register.css";
import { User, Mic } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import "../globals.css";
import axios from "axios";

const Form = () => {
  const [role, setRole] = useState("user");
  const [form, setForm] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
  });
  const [submitting, setSubmitting] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    const payload = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      password: formData.get("password"),
      role, // 🔥 auto sent
    };

    console.log(payload);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          email: form.email,
          fullName: {
            firstName: form.firstName,
            lastName: form.lastName,
          },
          password: form.password,
          role: role,
        },
        {
          withCredentials: true,
        }
      );

      alert("data registered");
    } catch (err) {
      console.log("error during registering in frontend", err);
    }
  }

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

        <form className="form" onSubmit={handleSubmit}>
          <div className="name-row">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              required
              value={form.firstName}
              onChange={handleChange}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              required
              value={form.lastName}
              onChange={handleChange}
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={form.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            value={form.password}
            onChange={handleChange}
          />

          <button
            className="primary-btn customnormal text-3xl tracking-[.5rem]"
            type="submit"
          >
            Register
          </button>
        </form>

        <div className="divider">
          <span>OR</span>
        </div>

        <button
          className="google-btn flex gap-4"
          onClick={() => {
            window.location.href =
              "http://localhost:5000/api/auth/google";
          }}
        >
          <span className="ml-16 text-[1em] font-black customnormal  tracking-[.2rem]">
            Sigin with Google
          </span>
          <FcGoogle size={25} />
        </button>
      </div>
    </div>
  );
};

export default Form;
