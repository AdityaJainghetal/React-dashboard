import { useState } from "react";
import axios from "axios";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate();
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
   
<div className="h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url(https://as2.ftcdn.net/jpg/06/58/35/49/1000_F_658354934_6YjHXHdI9EuxdgyjdNHGwnCYlqMcSfZ8.jpg)" }}>
<div className="bg-white rounded-lg shadow-lg p-8 max-w-sm w-full">
  <h2 className="text-2xl font-semibold text-center mb-6">Register Yourself 🔐</h2>
 

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
        Register
      </button>
      
    </div>
    <p className="mt-4 text-center">
          Already have an account? 
          <button  className="text-blue-500 hover:underline" onClick={()=>{navigate("/")}}> Login</button>
        </p>
  </form>

</div>
</div>
  );
};

export default Registration;

