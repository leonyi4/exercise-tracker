import React, { useState } from "react";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      name: username,
      email: email,
      password: password,
      confirmedPassword: confirmPassword,
    };
    console.log(formData);

    fetch("http://localhost:5000/register", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        console.log("acc created");
      })
      .catch((err) => {
        console.log(err);
        console.log(err.message);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-8 rounded-lg shadow-md bg-white dark:bg-gray-800 dark:shadow-white">
        <h1 className="text-3xl font-medium mb-6 text-gray-800 dark:text-white">
          Sign Up
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="font-medium block mb-2 text-gray-800 dark:text-white"
            >
              Username
            </label>
            <div className="flex items-center rounded-lg px-3 py-2 bg-gray-100 dark:bg-gray-500 dark:focus-within:bg-gray-400">
              <FaUser className="mr-2 text-gray-400 dark:text-gray-800" />
              <input
                type="text"
                id="username"
                className="w-full outline-none bg-transparent text-gray-800 dark:text-white"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="font-medium block mb-2 text-gray-800 dark:text-white"
            >
              Email
            </label>
            <div className="flex items-center rounded-lg px-3 py-2 bg-gray-100 dark:bg-gray-500 dark:focus-within:bg-gray-400">
              <FaEnvelope className="mr-2 text-gray-400 dark:text-gray-800" />
              <input
                type="email"
                id="email"
                className="w-full outline-none bg-transparent text-gray-800 dark:text-white"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="font-medium block mb-2 text-gray-800 dark:text-white"
            >
              Password
            </label>
            <div className="flex items-center rounded-lg px-3 py-2 bg-gray-100 dark:bg-gray-500 dark:focus-within:bg-gray-400">
              <FaLock className="mr-2 text-gray-400 dark:text-gray-800" />
              <input
                type="password"
                id="password"
                className="w-full outline-none bg-transparent text-gray-800 dark:text-white"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="confirmPassword"
              className="font-medium block mb-2 text-gray-800 dark:text-white"
            >
              Confirm Password
            </label>
            <div className="flex items-center rounded-lg px-3 py-2 bg-gray-100 dark:bg-gray-500 dark:focus-within:bg-gray-400">
              <FaLock className="mr-2 text-gray-400 dark:text-gray-800" />
              <input
                type="password"
                id="confirmPassword"
                className="w-full outline-none bg-transparent text-gray-800 dark:text-white"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="flex-col text-center gap-5">
            <button
              type="submit"
              className="w-full py-2 rounded-lg transition duration-300 bg-indigo text-white hover:bg-indigoDark mb-4"
            >
              Sign Up
            </button>
            <Link
              to="/login"
              className="border-2 border-indigoLight hover:bg-indigo p-2  rounded-lg "
            >
              back
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
