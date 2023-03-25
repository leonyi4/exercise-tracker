import React, { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      email: email,
      password: password,
    };

    fetch("http://localhost:5000/login", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log(res);
        res.json().then((res) => {
          console.log(res);
        });
      })

      .catch((err) => {
        console.log(err);
        console.log(err.message);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-8 bg-gray-50  dark:bg-gray-800 rounded-lg shadow-md shadow-gray-300 ">
        <h1 className="text-3xl font-medium mb-6">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="text-gray-800 dark:text-white font-medium block mb-2"
            >
              Email
            </label>
            <div className="flex items-center bg-gray-100 dark:bg-gray-500 dark:focus-within:bg-gray-400 rounded-lg px-3 py-2">
              <FaEnvelope className="text-gray-400 dark:text-gray-800 mr-2" />
              <input
                type="email"
                id="email"
                className="w-full outline-none  bg-transparent "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="text-gray-800 font-medium block mb-2 dark:text-white"
            >
              Password
            </label>
            <div className="flex items-center  bg-gray-100 dark:bg-gray-500 dark:focus-within:bg-gray-400 rounded-lg px-3 py-2">
              <FaLock className="text-gray-400 mr-2 dark:text-gray-800 " />
              <input
                type="password"
                id="password"
                className="w-full bg-transparent outline-none  "
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo text-black py-2 dark:text-white rounded-lg hover:bg-indigoDark transition duration-300"
          >
            Login
          </button>
        </form>
        <p className="text-gray-800 dark:text-white text-sm mt-4">
          Don't have an account?{" "}
          <Link to="/register" className="text-indigo hover:text-indigo-600">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
