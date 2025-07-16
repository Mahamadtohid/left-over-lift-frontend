import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import Footer from './Footer'; // Adjust path as needed

function SignUp() {
  const [signUpData, setSignUpData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign-Up Data:", signUpData);
    // Implement sign-up logic
  };

  function changeHandler(event) {
    setSignUpData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-tr from-green-200 via-white to-green-100">
      <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="bg-white/80 backdrop-blur-xl shadow-xl rounded-2xl p-10 w-full max-w-md transform transition-transform duration-500 hover:scale-[1.01]">
          <h1 className="text-center text-3xl font-bold text-green-700 mb-1 animate-fade-in">LeftOverLift</h1>
          <p className="text-center text-sm text-gray-500 mb-6 font-bold">Join the movement to reduce food waste</p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Business Name</label>
              <input
                type="text"
                name="name"
                value={signUpData.name}
                onChange={changeHandler}
                placeholder="Enter your business or name"
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
              <span className="absolute top-[-12px] left-1/2 transform -translate-x-1/2 bg-white px-3 text-gray-500 text-sm">OR</span>
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
      </main>

      {/* <Footer /> */}
    </div>
  );
}

export default SignUp;
