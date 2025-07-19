import axios from "axios";
import React from "react";
import "./Register.css";

const BASEURL = import.meta.env.VITE_BASEURL;

const Register = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = React.useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await axios.post(`${BASEURL}/auth/register`, formData);
      alert("Registration successful");
      window.location.href = "/login";
    } catch (error) {
      alert("There was an error in registration!");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <div className="card-header">
          <h2>Register</h2>
          <div className="header-line"></div>
        </div>
        <form onSubmit={handleSubmit} className="register-form">
          {[
            { name: "name", type: "text", label: "Name" },
            { name: "email", type: "email", label: "Email" },
            { name: "password", type: "password", label: "Password" },
          ].map((field, index) => (
            <div className="form-group" key={field.name}>
              <div className="input-container">
                <input
                  type={field.type}
                  name={field.name}
                  onChange={handleChange}
                  required
                  placeholder=" "
                />
                <label>{field.label}</label>
                <div className="form-line"></div>
              </div>
            </div>
          ))}
          <button
            type="submit"
            className={`submit-button ${isLoading ? "loading" : ""}`}
            disabled={isLoading}
          >
            <span className="button-text">
              {isLoading ? "Registering..." : "Register"}
            </span>
            <div className="button-loader"></div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
