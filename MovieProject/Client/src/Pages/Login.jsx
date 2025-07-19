import axios from "axios";
import React from "react";
import "./Login.css";


const BASEURL = import.meta.env.VITE_BASEURL;

const Login = () => {
  const [formData, setformData] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(false);

  const handleChange = (e) => {
    setformData((pre) => ({
      ...pre,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await axios.post(`${BASEURL}/auth/login`, formData, {
        withCredentials: true,
      });
      console.log("Login successful:", res.data);
      localStorage.setItem("currentUser", JSON.stringify(res?.data?.user));
      alert("Login successful");
    } catch (error) {
      console.error("There was an error logging in!", error);
      alert("There was an error logging in!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="card-header">
          <h2>Login</h2>
          <div className="header-line"></div>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={formData.email || ""}
              required
              placeholder=" "
            />
            <label>Email address</label>
            <div className="form-line"></div>
          </div>

          <div className="form-group">
            <input
              type="password"
              name="password"
              onChange={handleChange}
              value={formData.password || ""}
              required
              placeholder=" "
            />
            <label>Password</label>
            <div className="form-line"></div>
          </div>

          <button 
            type="submit" 
            className={`submit-button ${isLoading ? 'loading' : ''}`}
            disabled={isLoading}
          >
            <span className="button-text">
              {isLoading ? 'Logging in...' : 'Login'}
            </span>
            <div className="button-loader"></div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;