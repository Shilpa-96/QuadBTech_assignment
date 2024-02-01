import React, { useState } from "react";

function BookTicketForm({ showName }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sessionStorage.setItem("userDetails", JSON.stringify(formData));
    setFormData({
      name: "",
      email: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Book Ticket for {showName}</h3>
      <label>
        Name:
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </label>
      <button type="submit">Book Ticket</button>
    </form>
  );
}

export default BookTicketForm;
