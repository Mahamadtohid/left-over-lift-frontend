import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { motion } from 'framer-motion';
import Footer from './Footer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignUp() {


  const navigate = useNavigate();

  const [signUpData, setSignUpData] = useState({
    name: '',
    ownerName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    businessType: '',
    address: '',
    city: '',
    state: '',
    zipcode: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const response = await axios.post('http://localhost:8080/api/business/register', {
        ownerName: signUpData.name,
        email: signUpData.email,
        password: signUpData.password,
        businessType: signUpData.businessType,
        businessName: signUpData.name,
        address: signUpData.address,
        city: signUpData.city,
        state: signUpData.state,
        phoneNumber: signUpData.phone,
        zipCode: signUpData.zipcode,
      });

      console.log("Business Registration successful:", response.data);
      alert("Business Registered successfully!");
      
    } catch (error) {
      console.error("Business Registration failed:", error.response?.data || error.message);
      alert("Business Registration failed! Check the console.");
      
    }
    console.log("Sign-Up Data:", signUpData);
    // Add your sign-up API logic here

    navigate("/sign-in")

  };

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setSignUpData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-white font-poppins">
      <main className="flex flex-1 flex-col lg:flex-row">
        {/* Form Section */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full lg:w-1/2 flex items-center justify-center bg-gradient-to-br from-green-100 via-white to-green-50 p-8"
        >
          <div className="bg-white/80 backdrop-blur-md shadow-xl rounded-2xl p-10 w-full max-w-md hover:scale-[1.01] transition-transform duration-500">
            <h1 className="text-center text-3xl font-bold text-green-700 mb-1">LeftOverLift</h1>
            <p className="text-center text-sm text-gray-600 mb-6 font-semibold">
              Register your business to reduce food waste
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-1">Business Name (Shop Name)</label>
                <input type="text" name="name" value={signUpData.name} onChange={changeHandler}
                  className="w-full px-4 py-2 border rounded-lg" required />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">Owner Name</label>
                <input type="text" name="ownerName" value={signUpData.ownerName} onChange={changeHandler}
                  className="w-full px-4 py-2 border rounded-lg" required />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">Email</label>
                <input type="email" name="email" value={signUpData.email} onChange={changeHandler}
                  className="w-full px-4 py-2 border rounded-lg" required />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">Phone Number</label>
                <input type="tel" name="phone" value={signUpData.phone} onChange={changeHandler}
                  className="w-full px-4 py-2 border rounded-lg" required />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">Business Type</label>
                <select name="businessType" value={signUpData.businessType} onChange={changeHandler}
                  className="w-full px-4 py-2 border rounded-lg" required>
                  <option value="">-- Select Type --</option>
                  <option value="Bakery">Bakery</option>
                  <option value="Restaurant">Restaurant</option>
                  <option value="Grocery">Grocery</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">Address</label>
                <input type="text" name="address" value={signUpData.address} onChange={changeHandler}
                  className="w-full px-4 py-2 border rounded-lg" required />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-1">City</label>
                  <input type="text" name="city" value={signUpData.city} onChange={changeHandler}
                    className="w-full px-4 py-2 border rounded-lg" required />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-1">State</label>
                  <input type="text" name="state" value={signUpData.state} onChange={changeHandler}
                    className="w-full px-4 py-2 border rounded-lg" required />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">Zipcode</label>
                <input type="text" name="zipcode" value={signUpData.zipcode} onChange={changeHandler}
                  className="w-full px-4 py-2 border rounded-lg" required />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">Password</label>
                <input type="password" name="password" value={signUpData.password} onChange={changeHandler}
                  className="w-full px-4 py-2 border rounded-lg" required />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">Confirm Password</label>
                <input type="password" name="confirmPassword" value={signUpData.confirmPassword} onChange={changeHandler}
                  className="w-full px-4 py-2 border rounded-lg" required />
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

        {/* Info Section */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="hidden lg:flex w-full lg:w-1/2 bg-green-700 text-white p-12 items-center justify-center"
        >
          <div className="space-y-6 max-w-md">
            <h2 className="text-4xl font-extrabold leading-tight">Why Join as a Business?</h2>
            <ul className="space-y-4 list-disc list-inside text-lg text-white/90">
              <li>List surplus meals effortlessly</li>
              <li>Boost your brand's sustainability image</li>
              <li>Support your community with affordable food</li>
              <li>Reduce waste and operational costs</li>
              <li>Be a part of a green revolution</li>
              <li>List surplus meals effortlessly</li>
              <li>Boost your brand's sustainability image</li>
              <li>Support your community with affordable food</li>
              <li>Reduce waste and operational costs</li>
              <li>Be a part of a green revolution</li>
            </ul>
            <img
              src="/About/Food/About1.png"
              alt="Business Helping Food"
              className="w-full mt-6 rounded-xl shadow-lg"
            />
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}

export default SignUp;
