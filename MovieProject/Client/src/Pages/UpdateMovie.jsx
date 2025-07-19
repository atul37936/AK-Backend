import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { Form, Container, Alert } from "react-bootstrap";
import "./UpdateMovie.css";

const BASEURL = import.meta.env.VITE_BASEURL;

const UpdateMovie = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const [formData, setFormData] = useState({
    title: "",
    genre: "",
    director: "",
    releaseYear: "",
    description: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  // ... rest of the state and effects remain the same ...

  return (
    <div className="update-movie-container">
      <div className="update-movie-card">
        <h2 className="form-title">Update Movie</h2>

        {error && (
          <div className="alert error-alert" role="alert">
            {error}
          </div>
        )}
        {successMsg && (
          <div className="alert success-alert" role="alert">
            {successMsg}
          </div>
        )}

        <form onSubmit={handleSubmit} className="update-form">
          {[
            { name: "title", type: "text", label: "Title" },
            { name: "genre", type: "text", label: "Genre" },
            { name: "director", type: "text", label: "Director" },
            { name: "releaseYear", type: "number", label: "Release Year" },
          ].map((field) => (
            <div className="form-group" key={field.name}>
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                required
                placeholder=" "
                className="form-input"
              />
              <label className="form-label">{field.label}</label>
              <div className="form-line"></div>
            </div>
          ))}

          <div className="form-group">
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              placeholder=" "
              className="form-textarea"
              rows={3}
            />
            <label className="form-label">Description</label>
            <div className="form-line"></div>
          </div>

          <button
            type="submit"
            className={`submit-button ${loading ? "loading" : ""}`}
            disabled={loading}
          >
            <span className="button-text">
              {loading ? "Updating..." : "Update Movie"}
            </span>
            <div className="button-loader"></div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateMovie;
