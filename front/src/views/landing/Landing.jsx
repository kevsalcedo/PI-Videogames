import React from "react";
import { useEffect, useState } from "react";
import Validation from "./Validation";

const Landing = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  useEffect(() => {
    if (userData.email !== "" || userData.password !== "") {
      const userValidated = Validation(userData);
      setErrors(userValidated);
    }
  }, [userData]);

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email: </label>
      <input
        type="email"
        name="email"
        value={userData.email}
        onChange={handleChange}
      />
      {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

      <br />

      <label htmlFor="password">Password: </label>
      <input
        type="password"
        name="password"
        value={userData.password}
        onChange={handleChange}
      />
      {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}

      <br />

      <button type="submit">Submit</button>
    </form>
  );
};

export default Landing;
