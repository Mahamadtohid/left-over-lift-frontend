import React, { useState } from "react";
import {Link} from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import { AppContext } from '../context/AppContext'
import {useContext} from 'react'
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

function SignIn() {
  const {isLoggeIn , setIsLoggedIn} = useContext(AppContext)

  const [loginData , setLoginData] = useState({

    id : uuidv4(),
    email : "",
    password : "",

  }) 

  function changeHandler(event){

    setLoginData((prevData) => ({
      ...prevData,
      [event.target.name] : event.target.value
    }))

  }

  const navigate = useNavigate();

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Email:", email);
  //   console.log("Password:", password);
    
  //   if(email == "admin@gmail.com"){
  //     setIsLoggedIn(true); 
  //   }
  //   else if(email== "business@gmail.com"){
  //     setIsLoggedIn(true);
  //   }
  //   else{
  //     if(email){
  //       setIsLoggedIn(true);
  //     }
      
  //   }
  // };

function handleSubmit(e){
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

  // Redirect to role-based dashboard
  navigate(path, { state: { role } });
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-500">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-green-700 mb-6">
          Food Management System
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Enter your email"
              value={loginData.email}
              onChange={changeHandler}
              name="email"
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
              value={loginData.password}
              onChange={changeHandler}
              name="password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full mb-4 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            Sign In
          </button>

          <button className="w-full flex gap-[0.5rem] justify-center items-center py-2 rounded-md  bg-gray-200 hover:bg-gray-300 "
                    > 
                    <span><FcGoogle className="w-7 h-7"/></span>
                    Sign In With Google </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          Don't have an account?{" "}
          <Link to="/select-role" className="text-green-600 hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
