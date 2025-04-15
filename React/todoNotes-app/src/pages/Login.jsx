import React, { useState } from "react";
import Navbar from "../components/UiBars/Navbar";
import { Link } from "react-router-dom";
import PasswordInput from "../components/Input/PasswordInput";
import { validateEmail } from "../utils/helpers";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const loginHandler = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!password) {
      setError("Please enter a valid password.");
      return;
    }
    setError("");
  };

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center mt-28">
        <div className="w-96 border-[3.5px] rounded-xl bg-white px-7 py-10 border-gray-200">
          <form onSubmit={loginHandler}>
            <h4 className="text-3xl text-center mb-7 font-bold">Login</h4>
            <input
              type="text"
              placeholder="Email"
              className="input-box"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {/* <input type='text' placeholder='Password' className='input-box' /> */}
            <PasswordInput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {error && <p className="text-red-500 text-xs pb-1">{error}</p>}
            <button type="submit" className="btn-primary">
              Login
            </button>
            <p className="text-sm text-center mt-4">
              Not registered yet?{" "}
              <Link
                to="/signUp"
                className="font-medium text-blue-600 underline"
              >
                Create an Account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
