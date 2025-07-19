import axios from "axios";
import React, { useState } from "react";
import "./AddMovie.css";

const BASEURL = import.meta.env.VITE_BASEURL;

const AddMovie = () => {
  const [formData, setFormData] = useState({
    title: "",
    genre: "",
    director: "",
    releaseYear: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${BASEURL}/movie/create`, formData, {
        withCredentials: true,
      });
      alert("Movie created successfully!");
      setFormData({
        title: "",
        genre: "",
        director: "",
        releaseYear: "",
        description: "",
      });
    } catch (err) {
      alert("Error creating Movie data!");
      console.error(err);
    }
  };

  return (
    <div className="add-movie-container">
      <div className="form-wrapper">
        <h2 className="form-title">Add Movie</h2>
        <form onSubmit={handleSubmit} className="movie-form">
          {["title", "genre", "director", "releaseYear"].map((field) => (
            <div className="form-group" key={field}>
              <input
                type="text"
                className="form-input"
                name={field}
                value={formData[field]}
                onChange={handleChange}
                required
                placeholder=" "
              />
              <label className="form-label">
                {field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
              <div className="form-line"></div>
            </div>
          ))}
          <div className="form-group">
            <textarea
              className="form-textarea"
              rows="5"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              placeholder=" "
            />
            <label className="form-label">Description</label>
            <div className="form-line"></div>
          </div>
          <button type="submit" className="submit-button">
            <span>Submit</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddMovie;
