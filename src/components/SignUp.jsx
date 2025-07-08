import { useState } from 'react'
import {Link , useNavigate }from 'react-router-dom'
import { FcGoogle } from "react-icons/fc";

function SignUp(){

    const [ signUpData , setSignUpData] = useState({

    name : "",
    email : "",
    password : "",
    confirmPassword : "",

    })

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    // Add your login logic here (e.g. API call)
  };


 function changeHandler(event){

    setSignUpData((prev) =>({
        ...prev,
        [event.target.name] : event.target.value,
    }))
    
 }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-500">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-green-700 mb-6">
          Food Management System
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Business Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Enter your email"
              value={signUpData.name}
              onChange={changeHandler}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Enter your email"
              value={signUpData.email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Enter your password"
              value={signUpData.password}
              onChange={changeHandler}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Enter your password"
              value={signUpData.confirmPassword}
              onChange={changeHandler}
              required
            />
          </div>

          <button
            type="submit"
            className="mb-4 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            Sign Up
          </button>

          
            <button className="w-full flex gap-[0.5rem] justify-center items-center py-2 rounded-md  bg-gray-200 hover:bg-gray-300 "
          > 
          <span><FcGoogle className="w-7 h-7"/></span>
          Sign Up With Google </button>
          
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <Link to="/sign-in" className="text-green-600 hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
    )
     
}


export default SignUp;