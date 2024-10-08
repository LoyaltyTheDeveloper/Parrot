import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import ClipLoader from "react-spinners/ClipLoader";


function SignIn() {
 const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { dispatch } = useAuthContext();
  const { user } = useAuthContext();
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = (e) => {
      e.preventDefault();
      if (email === '' || password === '') {
          toast.error('Both fields are required', {
            autoClose: 2000,
          });
          return;
      }
      setIsLoading(true);
      const formData = {
        email: email,
        password: password,
      };
  
      fetch('https://parrot-api-17s2.onrender.com/signin', { 
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
                dispatch({type: 'SIGNIN', payload: data})
                toast.success(data.message, { 
                  autoClose: 2000, 
                });
                setIsLoading(false);
                  history.push('/homepage');
              } else {
                dispatch({type: 'LOGOUT'})
                toast.error(data.message, {
                  autoClose: 2000,
                });
                setIsLoading(false);
                return;
              }
            })
            .catch((error) => {
              toast.error("An error occurred. Please try again", {
                autoClose: 2000,
              });
              setIsLoading(false);
                console.error('Error:', error);
              });
    };
  return (<>
  <div>
    <div className="flex items-center justify-center min-h-screen">
    <div className="p-8 rounded-lg">
        <div className="flex flex-col gap-[0px]">
        <h2 className="text-2xl font-bold mb-6">Sign in</h2>
        <div className="pb-[20px]">Sign in to  Parrot to start reading and writing reviews or find trustworthy businesses.</div>
        </div>
        <form onSubmit={handleSignIn}>
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
                <label className="block text-gray-700">Password</label>
                <input
                    type="password"
                    name="password"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                />
            </div>
            <div className="mb-[20px]">Forgot password?</div>
            <button type="submit" className="w-full bg-[#000462] text-white py-2 rounded-lg active:bg-blue-800" onClick={handleSignIn}>
                Sign in
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
       <div className="flex gap-[7px] mt-[20px] justify-center"><div>Don't have an account?</div> <div><Link to="/signup">Sign up</Link></div></div>
        </form>
    </div>
</div>
</div>
{isLoading && <div className="mt-[-400px] flex justify-center"><ClipLoader color="#3498db" loading={isLoading} size={50} /></div>}


{/* <div>
      {isLoading ? (
        <div>
          <div className="flex items-center justify-center min-h-screen">
          <div className="flex justify-center"><ClipLoader color="#3498db" loading={isLoading} size={50} /></div>
          </div>
          </div>
      ) : (
        <div>
    <div className="flex items-center justify-center min-h-screen">
    <div className="p-8 rounded-lg">
        <div className="flex flex-col gap-[0px]">
        <h2 className="text-2xl font-bold mb-6">Sign in</h2>
        <div className="pb-[20px]">Sign in to  Parrot to start reading and writing reviews or find trustworthy businesses.</div>
        </div>
        <form onSubmit={handleSignIn}>
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
                <label className="block text-gray-700">Password</label>
                <input
                    type="password"
                    name="password"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                />
            </div>
            <div className="mb-[20px]">Forgot password?</div>
            <button type="submit" className="w-full bg-[#000462] text-white py-2 rounded-lg active:bg-blue-800" onClick={handleSignIn}>
                Sign in
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
       <div className="flex gap-[7px] mt-[20px] justify-center"><div>Don't have an account?</div> <div><Link to="/signup">Sign up</Link></div></div>
        </form>
    </div>
</div>
</div>
      )}
    </div> */}

</>
);
}
export default SignIn
