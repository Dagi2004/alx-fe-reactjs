import React, { useState } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!formData.username.trim()) {
      validationErrors.username = "Username is required";
    }

    if (!formData.email.trim()) {
      validationErrors.email = "Email is required";
    }

    if (!formData.password.trim()) {
      validationErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      validationErrors.password = "Password must be at least 6 characters";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Handle form submission if no errors
      alert("Form submitted:", formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form">
        <div>
          <label>
            Username:
            <input
              type="text"
              name="username"
              placeholder="Enter UserName"
              value={formData.username}
              onChange={handleChange}
            />
          </label>

          {errors.username && (
            <span style={{ color: "red" }}>{errors.username}</span>
          )}
        </div>
        <div>
          <label>
            Email:
            <input
              type="text"
              name="username"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>

          {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
        </div>
        <div>
          <label>
            Password:
            <input
              type="text"
              name="username"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
            />
          </label>
          {errors.password && (
            <span style={{ color: "red" }}>{errors.password}</span>
          )}
        </div>
        <button className="submit" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default RegistrationForm;
