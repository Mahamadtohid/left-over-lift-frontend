import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AppContext } from "../context/AppContext";
import { v4 as uuidv4 } from "uuid";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import Footer from "./Footer";

function SignIn() {
  const { isLoggeIn, setIsLoggedIn } = useContext(AppContext);
  const [loginData, setLoginData] = useState({
    id: uuidv4(),
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const formRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      formRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      }
    );
  }, []);

  function changeHandler(event) {
    setLoginData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { email, password, id } = loginData;

    let role = "user";
    let path = `/user/${id}`;
    if (email === "admin@gmail.com") {
      role = "admin";
      path = `/admin/${id}`;
    } else if (email === "business@gmail.com") {
      role = "business";
      path = `/business/${id}`;
    }

    setIsLoggedIn(true);
    navigate(path, { state: { role } });
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-100 to-green-300 px-4">
      <div
        ref={formRef}
        className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-md transition-all duration-700"
      >
        <h2 className="text-3xl font-extrabold text-center text-green-700 mb-2 animate-fade-in">
          Welcome Back!
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Sign in to rescue food and reduce waste.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Enter your email"
              value={loginData.email}
              onChange={changeHandler}
              name="email"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Enter your password"
              value={loginData.password}
              onChange={changeHandler}
              name="password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors shadow"
          >
            Sign In
          </button>

          <div className="flex items-center gap-2 justify-center">
            <span className="w-1/5 border-t border-gray-300"></span>
            <span className="text-gray-500 text-sm">or</span>
            <span className="w-1/5 border-t border-gray-300"></span>
          </div>

          <button
            type="button"
            className="w-full flex gap-3 justify-center items-center py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium shadow-sm"
          >
            <FcGoogle className="w-6 h-6" /> Sign In with Google
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Don't have an account?{' '}
          <Link to="/select-role" className="text-green-600 hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  
  );
}

export default SignIn;
