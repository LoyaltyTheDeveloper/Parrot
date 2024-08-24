import React, { useEffect } from 'react'
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useAuthContext } from '../hooks/useAuthContext';

function HomePage() {

  const history = useHistory();
   const {dispatch } = useAuthContext();
   const { user } = useAuthContext();

   
   const Logout = () => {
    localStorage.removeItem('user');
    history.push('/signin');
   dispatch({type: 'LOGOUT'})
   }
  
  return (
    <div>
      {user && <div className="pt-[100px] text-[30px] text-[black]">
      <h1>Hi, {user.userName}</h1>
      <button onClick={Logout}>Logout</button>
      </div>}
      {!user && <div className="pt-[100px] text-[30px] text-[black]">
      <h1>Loading..you might not be logged in.</h1>
      </div>}
    </div>
  )

}
export default HomePage
