import React, { useEffect } from 'react'
import { useAuthContext } from '../hooks/useAuthContext';
import { useState } from "react";
import Stack from '@mui/material/Stack';
import { FaRegThumbsUp } from "react-icons/fa";
import { FaRegThumbsDown } from "react-icons/fa";
import { IoChatbubbleOutline } from "react-icons/io5";
import { TiArrowForward } from "react-icons/ti";
import Rating from '@mui/material/Rating';

function Reviews() {
    const {dispatch } = useAuthContext();
    const { user } = useAuthContext();
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/getallcomments')
        .then((response) => response.json())
        .then((data) => {setComments(JSON.stringify(data.comments))})
        .catch((error) => console.error('Error fetching comments', error))
    }, [])

  return (<>
    <div>
       <div className="bg-[#000462] items-center justify-center">
    <div className="bg-[#000462] justify-center flex flex-row">
  <div className="mt-[100px] mb-[50px] input mt-[-30px] left-[100px]">
  <div className="texts flex justify-center items-center text-[white] text-[32px] lg:text-[60px]">
       Parrot lets you
      </div>
      <br></br>
      <div className="text-[white] text-[20px]">
      <p className="texts flex justify-center items-center">Find Trustworthy Businesses.</p>
      <p className="texts flex justify-center items-center">Read Reviews of Past Customers.</p>
      <p className="texts flex justify-center items-center">Write Reviews & Rate Businesses.</p>
      </div>
      <br></br>
    <div className="inputs gap-[20px] items-center justify-center flex flex-col">
      <div className="w-[100%]">
        <input className="bg-[white] w-[100%] h-[40px] lg:w-[500px] rounded" placeholder="  e.g Amala Skot, Restaurant, Hotels" type="text"/>
        </div>
        <div className="w-[100%] lg:w-[500px]">
        <button className="bg-orange-500 text-white text-[19px] w-[100%] h-auto py-1.5 rounded">Ask Parrot</button>
        </div>
    </div>
  </div>
  </div>
</div>
    </div>
  {/* Reviews list */}
  <div className="">
<div className="font-bold text-[25px] mt-[60px] flex justify-center lg:text-[30px]">Recent Reviews</div>

  <div className="reviews flex justify-center items-center mt-[40px] mb-[60px]">
  <div className="border-[1px] w-[400px] h-[auto] p-[20px] mb-[20px] flex-row rounded lg:flex lg:w-[auto]">
<div className="">
  <div>
  <div className="w-24 flex">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" className="rounded-[50%] size-[60%]"/>
    <div className="flex-row ml-[10px]">
  <div className="profile text-[20px] w-[200px] font-semibold">Mr. Yemi</div>
    <div className="">@yemi</div>
    </div> 
  </div>
    </div>
  <div className="flex">
  <div className="text-[15px]">Akure Nigeria</div>
  <div className="divider divider-horizontal h-7 w-px bg-[black] mx-4"></div>
  <div className="flex text-[15px]">Review for:<div className="text-[red] underline ml-[10px]">Organization</div></div>
  </div>
  </div>
  <div className="">
  <Stack className="mt-[10px] lg:ml-[200px]"spacing={1}>
      <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
      <div className="">3 days ago</div>
    </Stack>
    <div className="lg:mt-[50px] lg:ml-[-290px]">
  <br></br>
  <div>Comments..</div>
  <br></br>
  </div>
  <br></br>
  <div className="icons flex w-[auto] gap-[100px] lg:ml-[-290px]">
    <div className="flex gap-[20px]">
  <div className="flex gap-[15px] justify-center align-center">
  <div><FaRegThumbsUp className="size-[20px]"/></div><div>0 Upvote(s)</div>
  </div>
  <div className="flex gap-[15px] justify-center align-center">
  <FaRegThumbsDown className="size-[20px]"/><div>0 Downvote(s)</div>
  </div>
  <div className="flex gap-[20px] justify-center align-center" >
  <IoChatbubbleOutline className="size-[20px]"/>
  </div>
  <div className="lg:ml-[230px]">
  <TiArrowForward className="size-[30px]"/>
  </div>
  </div>
  </div>
  </div>
  </div>
</div>
</div>

 {/* <div>
        {comments.length > 0 ? (
          <ul>
            {comments.map((comment) => (
              <li key={comment.id}>
                <strong>{comment.user.userName}:</strong> {comment.user.reviews}
              </li>
            ))}
          </ul>
        ) : (
          <p>No comments available.</p>
        )}
  </div>  */}
<p>{comments}</p>
{/* <div>
      <h2>Comments</h2>
      {Array.isArray(comments) && comments.length > 0 ? (
        <ul>
          {comments.map((comment) => (
            <li key={comment._id}>
              <strong>{comment.user.userName}:</strong> {comment.review}
              <p>Organization: {comment.organization}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No comments available.</p>
      )}
    </div> */}
</>)
}
export default Reviews
