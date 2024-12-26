import { useState } from "react";
import axios from "axios";
import { message } from "antd";

const Registration = () => {
  const [input, setInput] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const api = "http://localhost:8000/users/registration";

    try {
      const res = await axios.post(api, input);
      message.success(res.data.msg); // Display success message
      setInput({ name: "", mobile: "", email: "", password: "" }); // Reset form
    } catch (error) {
      message.error("Registration failed! Please try again."); // Display error message
      console.error("Error during registration:", error);
    }
  };

  return (
    <div
      style={{
        paddingTop: "5px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        border: "2px solid black",
        backgroundColor: "whitesmoke",
        borderRadius: "5px",
        width: "400px",
        margin: "0 auto",
      }}
    >
      <h2>Registration Form</h2>

      <form onSubmit={handleSubmit} style={{ width: "100%" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "15px" }}>
          <label htmlFor="name" style={{ fontSize: "20px" }}>
            Enter your name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={input.name}
            onChange={handleInput}
            style={{ width: "300px", borderRadius: "5px" }}
            required
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "15px" }}>
          <label htmlFor="mobile" style={{ fontSize: "20px" }}>
            Enter mobile number
          </label>
          <input
            type="number"
            id="mobile"
            name="mobile"
            value={input.mobile}
            onChange={handleInput}
            style={{ width: "300px", borderRadius: "5px" }}
            required
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "15px" }}>
          <label htmlFor="email" style={{ fontSize: "20px" }}>
            Enter your email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={input.email}
            onChange={handleInput}
            style={{ width: "300px", borderRadius: "5px" }}
            required
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "15px" }}>
          <label htmlFor="password" style={{ fontSize: "20px" }}>
            Enter your password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={input.password}
            onChange={handleInput}
            style={{ width: "300px", borderRadius: "5px" }}
            required
          />
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <button
            type="submit"
            style={{
              backgroundColor: "#4CAF50",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Registration;

