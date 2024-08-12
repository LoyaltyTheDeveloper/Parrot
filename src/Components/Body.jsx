import React from 'react'
import image1 from '../assets/Group 1000003970.png'


function Body() {
  return (<>
   <div className="bg-[#000462] items-center justify-center">
    <div className="items-center justify-center bg-[#000462] flex-row lg:flex pt-[150px]">
  <div className="input mt-[-30px] lg:absolute lg:mt-[-200px] lg:absolute left-[100px] lg:ml-[-20px]">
  <div className="texts flex justify-center items-center text-[white] text-[32px] lg:text-[60px] lg:justify-start">
       Parrot lets you
      </div>
      <br></br>
        <div className="text-[white] text-[20px]">
      <p className="texts flex justify-center items-center lg:text-[28px] lg:justify-start">Find Trustworthy Businesses.</p>
      <p className="texts flex justify-center items-center lg:text-[28px] lg:justify-start">Read Reviews of Past Customers.</p>
      <p className="texts flex justify-center items-center lg:text-[28px] lg:justify-start">Write Reviews & Rate Businesses.</p>
      </div>
      <br></br>
    <div className="inputs gap-[20px] items-center justify-center flex flex-col lg:flex lg:flex-row sm:flex sm:flex-col lg:gap-[0px]">
        <input className="bg-[white] h-[40px] w-[90%] lg:w-[500px] rounded" placeholder="hi" type="text"/>
        <input className="bg-[white] h-[40px] w-[90%] lg:w-[500px] rounded" placeholder="hi" type="text"/>
        <div className="w-[90%] lg:ml-[20px]">
        <button className="bg-orange-500 text-white text-[19px] w-[100%] lg:w-[20%] h-auto py-1.5 rounded">Ask Parrot</button>
        </div>
    </div>
  </div>
  <div className="image-div items-center ml-[20px] justify-center flex size-[90%] lg:w-[100%] mt-[40px] lg:ml-[60%]">
    <img src={image1} className="flex"/> 
  </div>
  </div>
</div>
  </>)
}

export default Body
