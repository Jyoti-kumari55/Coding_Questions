import React, { useState } from "react";
import Navbar from "../components/UiBars/Navbar";
import PasswordInput from "../components/Input/PasswordInput";
import { Link, useNavigate } from "react-router-dom";
import { validateEmail } from "../utils/helpers";
import { BACKENDS_URL } from "../utils/constants";
import axios from "axios";

const SignUp = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  

  const navigate = useNavigate();

  const signUpHandler = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");

    try {
      const registerForm = {
        email: email,
        username: username,
        name: name,
        password: password,
      };
      const response = await axios.post(
        `${BACKENDS_URL}/api/auth/register`,
        registerForm,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data && response.data.token) {
        localStorage.setItem("token", response.data.token);
        navigate("/login");
      }
    } catch (error) {
      console.error("Registration error:", error);

      if (error.response && error.response.data) {
        const errMessage = error.response.data;
        if (errMessage.message) {
          setError(
            Object.values(errMessage.message) ||
              "Something went wrong."
          );
        } else {
          setError(errMessage.message || "Something went wrong.");
        }
      } else {
        setError("An unexpected error occured. Please try some time later.");
      }
    }
  };
  return (
    <div style={{
      backgroundImage: `url('https://images.pexels.com/photos/2736499/pexels-photo-2736499.jpeg?auto=compress&cs=tinysrgb&w=1400')`,
      // backgroundImage: `url('https://images.pexels.com/photos/5546909/pexels-photo-5546909.jpeg?auto=compress&cs=tinysrgb&w=1400')`,

      backgroundSize: "cover",
      backgroundPosition: "center",
      minHeight: "100vh"
    }}>
      <Navbar />
      <div className="flex items-center justify-center mt-28">
        <div className="w-96 border-[3.5px] rounded-xl bg-white px-7 py-10 border-gray-200">
          <form onSubmit={signUpHandler}>
            <h4 className="text-3xl text-center mb-7 font-bold">Sign Up</h4>
            <input
              type="text"
              placeholder="Name"
              className="input-box"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Username"
              className="input-box"
              value={username}
              required
              onChange={(e) => setUsername(e.target.value)}
            />
            {/* {error && <p className="text-red-500 text-xs pb-1">{error}</p>} */}

            <input
              type="text"
              placeholder="Email"
              className="input-box"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            {/* {error && <p className="text-red-500 text-xs pb-1">{error}</p>} */}

            <PasswordInput
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />

            {error && <p className="text-red-500 text-xs pb-1">{error}</p>}
            <button type="submit" className="btn-primary">
              Create Account
            </button>
            <p className="text-sm text-center mt-4">
              Already have an account?{" "}
              <Link to="/login" className="font-medium text-blue-600 underline">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
