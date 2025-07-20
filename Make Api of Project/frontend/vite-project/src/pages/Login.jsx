import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // Assuming you have a CSS file for styling

function Login() {
  const [form, setForm] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/login", form);
      alert("Login successful");
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("username", form.username);
      navigate("/");
    } catch (err) {
      alert("Login failed: " + (err.response?.data?.message || err.message));
    }
  };

  return (
  <form onSubmit={handleSubmit} className="login-form">
  <h2>Login</h2>
  <input
    type="text"
    name="username"
    placeholder="Username"
    onChange={handleChange}
    required
  />
  <input
    type="password"
    name="password"
    placeholder="Password"
    onChange={handleChange}
    required
  />
  <button type="submit">Login</button>
</form>

  );
}

export default Login;
