import React, { useState } from 'react';
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css';
import { useHistory } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import ClipLoader from "react-spinners/ClipLoader";

function SignUp() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userName, setUserName] = useState('');
    const [phone, setPhone] = useState();
    const { dispatch } = useAuthContext();
    const [isLoading, setIsLoading] = useState(false);
    

    const handleSignup = (e) => {
        e.preventDefault();
        if (email === '' || password === '' || confirmPassword === '' || firstName === '' || lastName === '' || userName === '' || phone === '') {
            toast.error('All fields are required', { 
                autoClose: 2000, 
              });
            return;
        }
        if (password !== confirmPassword) {
            toast.error("Passwords do not match!", { 
                autoClose: 2000, 
              });
            return;
        }
        const formData = {
            firstName, 
            lastName, 
            email, 
            userName, 
            phone, 
            password
          };

          fetch('http://localhost:4000/signup', {
            credentials: 'include',
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          })
            .then((response) => response.json())
            .then((data) => {
              if (data.success) {
                localStorage.setItem('user', JSON.stringify(data))
                dispatch({type: 'SIGNUP', payload: data})
                toast.success(data.message, { 
                    autoClose: 2000, 
                  });
                  setIsLoading(true);
                    history.push('/signin');
                    
              } else {
                toast.error(data.message, { 
                    autoClose: 2000, 
                  });
              }
            })
            .catch((error) => {
              toast.error('An error occurred. Please try again.', { 
                autoClose: 2000, 
              });
              console.error('Error:', error);
            });
        };
    return (<>
<div>
{isLoading ? (
  <div>
  <div className="flex items-center justify-center min-h-screen">
  <div className="flex justify-center"><ClipLoader color="#3498db" loading={isLoading} size={50} /></div>
  </div>
  </div>
) : (
    <div className="flex items-center justify-center min-h-screen">
    <div className="p-8 rounded-lg mt-[100px]">
        <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
        <div className="pb-[20px]">Create a Parrot account to start reading and writing reviews or find trustworthy businesses.</div>
        <form onSubmit={handleSignup}>
        <div className="mb-4">
                <label className="block text-gray-700">First Name</label>
                <input
                    type="text"
                    name="firstname"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Enter your first name"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Last Name</label>
                <input
                    type="text"
                    name="lastname"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Enter your last name"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                    type="email"
                    name="email"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Parrot Username</label>
                <input
                    type="text"
                    name="username"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="Create a username e.g @yourusername"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Phone Number</label>
                <PhoneInput
                    type="text"
                    name="phone"
                    value={phone}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none"
                    onChange={setPhone}
                    placeholder="7030062606"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Create Password</label>
                <input
                    type="password"
                    name="password"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                />        
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Confirm Password</label>
                <input
                    type="password"
                    name="password"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm password"
                />
            </div>
            <button type="submit" className="w-full bg-[#000462] text-white py-2 rounded-lg active:bg-blue-800" onClick={handleSignup}>
                Sign Up
            </button>
            <div className="flex items-center justify-center my-4">
    <div className="border-t border-gray-300 flex-grow mr-3"></div>
    <span className="text-gray-500">Or</span>
   <div className="border-t border-gray-300 flex-grow ml-3"></div>
   </div>
            <button className="flex items-center justify-center w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
 <img className="w-5 h-5 mr-2" src="https://www.svgrepo.com/show/355037/google.svg" alt="Google Logo"/>
 Sign in with Google
</button>
<div className="flex gap-[7px] mt-[20px] justify-center"><div>Have an account?</div> <div><Link to="/signin">Sign In</Link></div></div>
        </form>
    </div>
</div>
)}
</div>
</>
        
    );
}


export default SignUp
