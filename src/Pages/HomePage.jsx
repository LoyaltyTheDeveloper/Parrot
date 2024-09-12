import React, { useEffect } from 'react'
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useAuthContext } from '../hooks/useAuthContext';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';


function HomePage() {
  const history = useHistory();
  const [review, setReview] = useState('');
  const [organization, setOrganization] = useState('');
   const {dispatch } = useAuthContext();
   const [images, setImages] = useState();
   const { user } = useAuthContext();
   const Logout = () => {
    localStorage.removeItem('user');
    history.push('/signin');
   dispatch({type: 'LOGOUT'})
   }
  
   const submitReview = (e) => {

    e.preventDefault();
     
    if (organization === '' || review === '') {
        alert('Both fields are required');
        return;
    }

    const commentData = {
      organization: organization,
      review: review,
    };

    fetch('https://parrot-api-9.onrender.com/uploadcomment', {
      credentials: 'include',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`
      },
      body: JSON.stringify(commentData),
    })
    .then((response) => response.json())
    .then((data) => { 
            alert(data.message)
     })
     .catch((error) => {
      alert('Could not upload comment. Please check your internet connection.');
      console.log(error);
    });
    setOrganization('');
    setReview('');

   }
    // const uploadFile = (e) => {
    //   e.preventDefault();
    //     const formData = new FormData();
    //     formData.append('images', images); 

    //     fetch('http://localhost:4000/uploadimage', {
    //       method: 'POST',
    //       body: formData,
    //     })
    //     .then((response) => response.json())
    //     .then((data) => alert(data.error))
    //     .catch((error) => console.log(error))
    // }

    // const handleImageChange = (e) => {
    //   console.log(e.target.files);
    //   setImages(e.target.files);
    // }
  return (
    <div>
      {
      user && <div className="pt-[100px] text-[30px] text-[black] ml-[20px] flex">
        <div>
      <h1>Hi, {user.userName}</h1>
      </div>
      <div className="ml-[40%] md:ml-[65%] lg:ml-[75%]">
      <button onClick={Logout}>Logout</button>
      </div>
      <br></br>
      </div>}
      {user && <><div className="mt-[20px] text-[20px] flex justify-center mt-[150px]">Tell parrot about your experience</div>
      <div className="flex flex-col items-center">
      <form>
            <div className="mb-4">
                {/* <input
                    type="text"
                    value={organization}
                    className="w-[400px] px-3 py-2 border rounded-lg focus:outline-none"
                    onChange={(e) => setOrganization(e.target.value)}
                /> */}
                <select className="w-[400px] outline-none"
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                    required
                >
                   <option value="" disabled>Organization name</option>
                   <option value="Zacrac">Zacrac</option>
                   <option value="Diamond Image">Diamond Image</option>
                   <option value="St Jacobs">St Jacobs</option>
                   <option value="Royal Birds">Royal Birds</option>
                   <option value="Deja Vu">Deja Vu</option>
                  </select>
            </div>
              <div className="mb-[10px]">
                <div className="font-bold">Rate this organization</div>
                 <div className="">
                   <Stack spacing={1}>
                    <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                   </Stack>
                </div>
                </div>
            <div className="mb-4">
                <label className="block text-gray-700">Write review</label>
                <textarea
                placeholder="Please share your honest experiences with this company, both the positive and negative aspects."
                    type="text"
                    value={review}
                    className="w-[400px] px-3 py-2 border rounded-lg focus:outline-none"
                    onChange={(e) => setReview(e.target.value)}
                />
            </div>
            <br></br>
            <button type="submit" className="w-full bg-[#000462] text-white py-2 rounded-lg" onClick={submitReview}>
                Submit
            </button>
        </form>
      </div></>}

      
      {!user && <div className="pt-[100px] text-[30px] text-[black]">
      <h1>You are not logged in..</h1>
      </div>}
    </div>
  )
}
export default HomePage
