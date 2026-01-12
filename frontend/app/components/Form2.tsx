"use client";

import React, { useState } from "react";
import "../style/register.css";
import { User, Mic } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import "../globals.css";
import axios from "axios";
import { useRouter } from "next/navigation";

const Form2 = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    const payload = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    console.log(payload);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email: form.email,
          password: form.password,
        },
        {
          withCredentials: true,
        }
      );

      alert("data logined");
      router.push('/');
    } catch (err) {
      console.log("error during registering in frontend", err);
    }
  }

  return (
    <div className="register-container">
      <div className="register-card">
        <h1 className="title customretro">Login Account</h1>
        <p className="subtitle font-bold customnormal">Join us and start your journey</p>

        <form className="form" onSubmit={handleSubmit}>
          
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
            Login :)
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

export default Form2;
