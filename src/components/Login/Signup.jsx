import React, { useState } from "react";
import backgroundImage from "../../Images/G3.jpg";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import { useFirebase } from "../../context/FirebaseContext";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const firebase = useFirebase();
  const navigate =useNavigate()

  const SignUpHandler = async () => {
    try {
      console.log('Create account button was clicked');
      const response = await firebase.signupUserWithEmailAndPassword(email, password);
      if (response) {
        alert('Account Logged In Successfully');
        navigate('/')
      }
    } catch (error) {
      console.error('Error creating account:', error.message);
      alert('Error in  Signing In:', error.message);
    }
  };

  const googleHandler = async () => {
    try {
      console.log('Create account button was clicked');
      const response = await firebase.signInWithGoogle();
      console.log('response:',response);
      if (response) {
        alert('Authentication successful');
        navigate('/')
      }
    } catch (error) {
      console.error('Error creating account:', error.message);
      if(error.code=='auth/invalid-credential'){
        alert('invalid credentials ')
    }
    }
  };
  return (
    <div className="bg-orange-50 min-h-screen flex flex-col lg:flex-row">
      {/* Image section */}
      <div
        className="w-full lg:w-1/2 bg-cover bg-center flex-shrink-0 md:ml-2 md:mt-2 md:mb-2"
        style={{ backgroundImage: `url(${backgroundImage})`, minHeight: "300px" }}
      ></div>
      
      {/* Form section */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center px-4 lg:px-20 xl:px-40 mt-4 mb-4">
        <h1 className="text-2xl font-bold mt-4 mb-8 lg:mb-20">
          <a href="/">Bharat Bridal Week</a>
        </h1>
        <h1 className="text-2xl font-bold mt-10">Sign Up</h1>
        <div className="w-full p-8 rounded-lg shadow-lg mb-8 lg:mb-40">
          <div className="mb-4">
            <label className="block font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full bg-orange-50 border border-gray-300 rounded-md py-2 px-3"
              type="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label className="block font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="w-full bg-orange-50 border border-gray-300 rounded-md py-2 px-3"
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>
          <div className="mb-4">
            <p>
              Already have an account?{" "}
              <span>
                {" "}
                <a
                  href="/login"
                  className="text-blue-500 hover:text-blue-700 font-bold"
                >
                  Login
                </a>{" "}
              </span>
            </p>
          </div>
          <button onClick={()=>SignUpHandler()} className="w-full bg-black text-white py-2 rounded-md mb-4">
            Signup
          </button>
          <div className="flex justify-center space-x-4">
            <div className="text-blue-500 hover:text-blue-700 p-2 border border-gray-300 rounded-full shadow-md">
              <FaGoogle size={24} onClick={()=>googleHandler()}/>
            </div>
            <div className="text-blue-500 hover:text-blue-700 p-2 border border-gray-300 rounded-full shadow-md">
              <FaFacebookF size={24} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;