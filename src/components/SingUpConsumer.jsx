import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { motion } from 'framer-motion';
import Footer from './Footer';
import axios from 'axios';

function SignUpConsumer() {

  const navigate = useNavigate();

  const [signUpData, setSignUpData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/consumers/register', {
        fullName: signUpData.name,
        email: signUpData.email,
        password: signUpData.password,
      });

      console.log("Registration successful:", response.data);
      alert("Registered successfully!");

      navigate("/sign-in")
    } catch (error) {
      console.error("Registration failed:", error.response?.data || error.message);
      alert("Registration failed! Check the console.");
    }
  };

  const changeHandler = (e) => {
    setSignUpData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-white font-poppins">
      <main className="flex flex-1 flex-col lg:flex-row">
        {/* Left Form Side */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="w-full lg:w-1/2 flex items-center justify-center bg-gradient-to-bl from-green-100 via-white to-green-50 p-8"
        >
          <div className="bg-white/80 backdrop-blur-md shadow-xl rounded-2xl p-10 w-full max-w-md hover:scale-[1.01] transition-transform duration-500">
            <h1 className="text-center text-3xl font-bold text-green-700 mb-1">LeftOverLift</h1>
            <p className="text-center text-sm text-gray-600 mb-6 font-semibold">
              Join the food rescue community
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-gray-700 font-medium mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={signUpData.name}
                  onChange={changeHandler}
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={signUpData.email}
                  onChange={changeHandler}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">Password</label>
                <input
                  type="password"
                  name="password"
                  value={signUpData.password}
                  onChange={changeHandler}
                  placeholder="Create a password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={signUpData.confirmPassword}
                  onChange={changeHandler}
                  placeholder="Re-enter your password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-500 to-lime-500 text-white py-2 rounded-lg font-semibold hover:scale-105 transition-transform"
              >
                Sign Up
              </button>

              <div className="relative my-4">
                <hr className="border-gray-300" />
                <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-white px-2 text-gray-500 text-sm">OR</span>
              </div>

              <button
                type="button"
                className="w-full flex items-center justify-center gap-2 bg-gray-100 py-2 rounded-lg border hover:bg-gray-200 transition"
              >
                <FcGoogle className="w-6 h-6" />
                Sign Up with Google
              </button>
            </form>

            <p className="text-center text-sm text-gray-600 mt-6">
              Already have an account?{' '}
              <Link to="/sign-in" className="text-green-600 font-medium hover:underline">
                Log in here
              </Link>
            </p>
          </div>
        </motion.div>

        {/* Right Info Side */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="hidden lg:flex w-full lg:w-1/2 bg-green-700 text-gray-800 p-12 items-center justify-center"
        >
          <div className="space-y-6 max-w-md">
            <h2 className="text-4xl font-extrabold leading-tight text-white">Why Join as a Consumer?</h2>
            <ul className="space-y-4 list-disc list-inside text-lg text-white">
              <li>Access affordable and safe leftover food</li>
              <li>Support your community and local businesses</li>
              <li>Help reduce food waste and hunger</li>
              <li>Find meals easily through location-based listings</li>
              <li>Be part of a sustainable future</li>
            </ul>
            <img
              src="/About/Food/About2.png"
              alt="Consumer accessing food"
              className="w-full mt-6 rounded-xl shadow-lg"
            />
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}

export default SignUpConsumer;