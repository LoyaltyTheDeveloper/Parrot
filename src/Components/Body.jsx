import React from 'react'
import image1 from '../assets/Group 1000003970.png'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { FaRegThumbsUp } from "react-icons/fa";
import { FaRegThumbsDown } from "react-icons/fa";
import { IoChatbubbleOutline } from "react-icons/io5";
import { TiArrowForward } from "react-icons/ti";
import img1  from '../assets/img1.png';
import img2  from '../assets/Group 3.png';
import img3 from '../assets/Rectangle 6.png';
import img4 from '../assets/Rectangle 7.png';
import img5  from '../assets/Group 4.png';
import img6  from '../assets/image 58.png';
import img7  from '../assets/image 7.png';
import img8  from '../assets/image 8.png';
import img9  from '../assets/image 9.png';
import gifimage from '../assets/Gifimage.png';
import { FaCheckCircle } from "react-icons/fa";
import img10 from '../assets/Group 89.png';
import { FaApple } from "react-icons/fa";
import { BiLogoPlayStore } from "react-icons/bi";
import img11 from '../assets/Group 129.png';
import img12 from '../assets/Rectangle 32.png';
import img13 from '../assets/Rectangle 33.png';
import img14 from '../assets/Frame 888.png'
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";


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
        <input className="bg-[white] h-[40px] w-[90%] lg:w-[500px] rounded" placeholder="  e.g Amala Skot, Restaurant, Hotels" type="text"/>
        <input className="bg-[white] h-[40px] w-[90%] lg:w-[500px] rounded" placeholder="  location.." type="text"/>
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

{/* Reviews section */}
<div className="">
<div className="font-bold text-[25px] mt-[60px] flex justify-center lg:text-[30px]">Recent Reviews</div>
<div className="reviews flex justify-center items-center mt-[40px]">
  <div className=" border-[1px] w-[400px] h-[auto] p-[20px] mb-[20px] flex-row rounded lg:flex lg:w-[auto]">
<div className="">
  <div className="">
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
<div className="flex justify-center mt-[20px] mb-[20px]"><button className="border-[1px] py-[15px] px-[30px] rounded-[10px]">Read More Reviews</button></div>
</div>
<div className="section mt-[60px]">
  <div className="flex mt-[40px]">
  <div className="font-bold text-[25px] absolute left-[20px] lg:text-[30px] lg:absolute lg:left-[40px]">Explore Categories</div>
  <div className="absolute right-[20px] lg:absolute lg:right-[100px]">View all</div>
  </div>
  {/* Categories section */}
  <div className="categories mt-[60px] mb-[20px] flex justify-center align-center">
    <div className="grid gap-[10px] w-[95%] lg:grid lg:grid-cols-3">
    <div className="category border-[1px] bg-[#FAFAFA] py-8 w-[95%] rounded-[10px]">
      <div className="category content">
        <div className="ml-[20px]">Restaurants and bars</div>
      </div>
    </div>
    <div className="category border-[1px] bg-[#FAFAFA] py-8 w-[95%] rounded-[10px]">
      <div className="category content">
        <div className="ml-[20px]">Restaurants and bars</div>
      </div>
    </div>
    <div className="category border-[1px] bg-[#FAFAFA] py-8 w-[95%] rounded-[10px]">
      <div className="category content">
        <div className="ml-[20px]">Restaurants and bars</div>
      </div>
    </div>
    <div className="category border-[1px] bg-[#FAFAFA] py-8 w-[95%] rounded-[10px]">
      <div className="category content">
        <div className="ml-[20px]">Restaurants and bars</div>
      </div>
    </div>
    <div className="category border-[1px] bg-[#FAFAFA] py-8 w-[95%] rounded-[10px]">
      <div className="category content">
        <div className="ml-[20px]">Restaurants and bars</div>
      </div>
    </div>
    <div className="category border-[1px] bg-[#FAFAFA] py-8 w-[95%] rounded-[10px]">
      <div className="category content">
        <div className="ml-[20px]">Restaurants and bars</div>
      </div>
    </div>
    <div className="category border-[1px] bg-[#FAFAFA] py-8 w-[95%] rounded-[10px]">
      <div className="category content">
        <div className="ml-[20px]">Restaurants and bars</div>
      </div>
    </div>
    </div>
  </div>
</div>
<div className="mt-[80px]">
  <div className="">
    <div className="">
      <div className="flex justify-center font-bold text-[20px] lg:text-[35px]">
      Find Trustworthy Businesses.
      </div>
      <div className="flex justify-center font-bold text-[20px] lg:text-[35px]">
      Shop Smartly.
      </div>
      <br></br>
      <div className="text flex justify-center mx-[50px] lg:mx-[350px]">
      Whether you're searching for the perfect restaurant to dine, a reliable contractor for home renovations, or a wellness center to rejuvenate your spirit, we believe that informed decisions lead to a more satisfying life.
      </div>
    </div>
    <div className="mt-[40px] mb-[40px]">
    <div className="flex flex-col gap-[5px] md:flex-row lg:flex-row">
    <div className="flex gap-[5px]">
    <div className="images">
      <img src={img1} className=""/>
    </div>
    <div className="flex flex-col">
      <div><img src={img2}/></div>
      <div className="mt-[7px] lg:mt-[10px]"><img src={img3}/></div>
    </div>
  </div>
  <div className="flex gap-[5px]">
    <div><img src={img4}></img></div>
    <div><img src={img5}></img></div>
  </div>
  </div>
  </div>
  </div>
</div>


<div className="mt-[50px] mb-[50px]">
  <div className="text-[23px] font-bold flex justify-center align-center pr-[70px] pl-[70px] lg:pr-[400px] lg:pl-[400px] lg:text-[30px]">Unparalleled shopping experience, rooted in trust, transparency and authenticity.</div>
  <div>
    <div className="mt-[50px] gap-[20px] flex flex-col justify-center items-center lg:flex-row lg:justify-center lg:flex-wrap">
    <div className="card flex flex-col bg-[#FAFAFA] gap-[20px] w-[90%] p-[20px] rounded lg:w-[45%] lg:flex lg:flex-row lg:h-auto">
      <div><img src={img7} className="lg:w-[400px] lg:h-[200px]"></img></div>
      <div className="lg:mt-[30px]">
        <div className="font-bold text-[20px]">User-Generated Reviews</div>
        <div>Real people, real experiences. Our community of users shares their reviews, providing you with firsthand knowledge.</div>
      </div>
    </div>
    <div className="card flex flex-col bg-[#FAFAFA] gap-[20px] w-[90%] p-[20px] rounded lg:w-[45%] lg:flex lg:flex-row lg:h-auto">
      <div><img src={img8} className="lg:w-[400px] lg:h-[200px]"></img></div>
      <div className="lg:mt-[30px]">
        <div className="font-bold text-[20px]">Real Experiences, Real Voices</div>
        <div>Parrot is a vibrant community of verified users who share their authentic experiences, insights, and opinions. You can trust that the reviews and ratings you find here are genuine and based on real encounters.</div>
      </div>
    </div>
    <div className="card flex flex-col bg-[#FAFAFA] gap-[20px] w-[90%] p-[20px] rounded lg:w-[45%] lg:flex lg:flex-row lg:h-auto">
      <div><img src={img6} className="lg:w-[400px] lg:h-[200px]"></img></div>
      <div className="lg:mt-[30px]">
        <div className="font-bold text-[20px]">Verified Businesses</div>
        <div>We work diligently to verify businesses and maintain high-quality standards, so you can trust the options you find here.</div>
      </div>
    </div>
    <div className="card flex flex-col bg-[#FAFAFA] gap-[20px] w-[90%] p-[20px] rounded lg:w-[45%] lg:flex lg:flex-row lg:h-auto">
      <div><img src={img9} className="lg:w-[400px] lg:h-[200px]"></img></div>
      <div className="lg:mt-[30px]">
        <div className="font-bold text-[20px]">Real Experiences, Real Voices</div>
        <div>Whether you're in search of fine dining, healthcare services, automotive repair, or travel recommendations, Parrot provides a wide range of categories. Whatever your needs, we've got you covered.</div>
      </div>
    </div>
  </div>
  </div>
</div>


<div className="mt-[100px]">
  <div className="flex flex-col lg:flex-row lg:gap-[130px]">
    <div>
      <img src={gifimage} className="size-[95%]"/>
    </div>
    <div className="flex flex-col gap-[10px] justify-center px-4 lg:ml-[40px] lg:w-[36%]">
    <div className="flex flex-col gap-[10px]">
     <div><h1 className="text-[25px] font-bold lg:text-[31px]">Customer Voice = Customer Power. Make your Voice Heard. Leave your Mark.</h1></div>
     <div><p>Have you had a memorable experience with a business or service provider? Share your story and help others make informed choices. Your review can make a difference!</p></div>
     </div>
     <div className="mt-[20px] mpx]"><button className="bg-[#000462] text-white text-[19px] h-auto py-1.5 px-4 rounded">Tell Parrot</button></div>
    </div>
  </div>
</div>


<div className="bg-[#000462] mt-[40px]">
  <div className="pt-[90px] pb-[90px] flex flex-col gap-[100px] lg:justify-center lg:items-center lg:ml-[10%]">
    <div className="text-[white] font-semibold text-[30px] flex flex-col justify-center items-center px-8">
      <p>Are you a business?</p>
    <p className="">Collect, Read and Respond to Customer Reviews.</p>
    <div className="mt-[20px] mpx]"><button className="bg-orange-500 text-white text-[19px] h-auto py-1.5 px-4 rounded">Join Parrot</button></div>
    </div>
    <div className="flex flex-col gap-[20px] lg:flex-row">
      <div className="flex flex-row justify-center hidden lg:visible lg:flex"><img src={img10}/></div>
      <div>
        <div className="flex flex-col gap-[60px]">
        <div className="px-9">
          <div className="flex flex-row gap-[15px]">
            <div className="text-[white]"><FaCheckCircle /></div>
            <div className="text-[white] font-semibold">Authentic Reviews</div>
          </div>
          <div className="text-[white]">
          Receive honest and valuable feedback from real customers to help you improve and grow.
          </div>
        </div>
        <div className="px-9">
          <div className="flex flex-row gap-[15px]">
            <div className="text-[white]"><FaCheckCircle /></div>
            <div className="text-[white] font-semibold">Build Trust</div>
          </div>
          <div className="text-[white]">
          Show your commitment to transparency and excellence by joining a platform that values trust and authenticity.
          </div>
        </div>
        <div className="px-9">
          <div className="flex flex-row gap-[15px]">
            <div className="text-[white]"><FaCheckCircle /></div>
            <div className="text-[white] font-semibold">Engage with Your Audience</div>
          </div>
          <div className="text-[white]">
          Connect directly with your customers, respond to reviews, and share updates about your business.
          </div>
        </div>
        <div className="px-9">
          <div className="flex flex-row gap-[15px]">
            <div className="text-[white]"><FaCheckCircle /></div>
            <div className="text-[white] font-semibold">Boost Your Visibility</div>
          </div>
          <div className="text-[white]">
          Increase your online visibility and reach potential customers actively seeking your products or services.
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</div>


<div className="px-4 lg:px-[5%] pt-[30px] pb-[30px]">
  <div className="flex flex-col gap-[100px] justify-center items-center bg-[#B96C2F] bg-opacity-15 mt-[60px] pt-[50px] px-[20px] rounded-[10px] lg:flex-row">
    <div className="w-[100%] flex flex-col gap-[15px]">
    <div className="text-[25px] font-bold">Take Parrot with you everywhere.</div>
    <div>Read and explore reviews written by real customers, allowing you to gain valuable insights into the experiences of others with various businesses and services.</div>
    <div>
    </div>
      <div className="buttons text-white flex flex-row gap-[10px]">
        <button className="btn_1 bg-[black] rounded-[30px] flex flex-row gap-[20px] justify-center items-center gap-[7px] py-[1px] px-[20px]">
          <div><FaApple className="size-[25px]"/></div>
          <div>
          <div className="text-[13px]">Available on</div>
          <div>App Store</div>
          </div>
        </button>
        <button className="btn_2 bg-[black] rounded-[30px] flex flex-row gap-[20px] justify-center items-center gap-[7px] py-[1px] px-[20px]">
          <div><BiLogoPlayStore className="size-[25px]"/></div>
          <div>
          <div className="text-[13px]">Available on</div>
          <div>Play Store</div>
          </div>
        </button>
      </div>
    </div>
    <div className="flex justify-center lg:size-[80%]"><img src={img11}/></div>
  </div>
</div>



<div className="mt-[100px] px-[5%] pb-[200px] flex flex-col gap-[20px] lg:flex-row gap-[20px]">
  <div className="px-[40px] border-[1px] rounded bg-[#FAFAFA] flex flex-col lg:flex-row lg:pb-[20px] lg:gap-[20px] lg:w-[50%]">
    <div className="pt-[40px]"><img src={img12}/></div>
    <div className="flex flex-col gap-[40px] pt-[20px] lg:w-[50%]">
    <div>Parrot is my shopping assistant. I now shop with confidence and peace of mind knowing that what I order is what I will get. The reviews and testimonials of past customers come handy when I’m looking for a vendor to buy from. Love it 😘😘😘</div>
    <div className="flex flex-col pb-[20px]">
      <div className="text-[20px] font-bold">Ayomide Chimaroke</div>
      <div>
      <Stack spacing={1}>
      <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
    </Stack>
    </div>
    </div>
    </div>
  </div>
  <div className="px-[40px] border-[1px] rounded bg-[#FAFAFA] flex flex-col lg:flex-row lg:pb-[20px] lg:gap-[20px] lg:w-[50%]">
    <div className="pt-[40px]"><img src={img13}/></div>
    <div className="flex flex-col gap-[40px] pt-[20px] lg:w-[50%]">
    <div>Moved to a new neighbourhood and was looking for literarily everything -restaurants, saloon, painter, and a school to put kids. Parrot came handy, found a barber that gave me the perfect haircut. I also found a local restaurant on the app. The app is great.</div>
    <div className="flex flex-col pb-[20px]">
      <div className="text-[20px] font-bold">Gbenga Collins</div>
      <div>
      <Stack spacing={1}>
      <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
    </Stack>
    </div>
    </div>
    </div>
  </div>
</div>



<div className="bg-[#000462]">
  <div className="pt-[40px] pb-[40px]">
  <div className="flex flex-col gap-[60px] lg:flex-row lg:justify-center lg:gap-[100px]">
  <div className="flex flex-col items-center">
  <div className="flex flex-col items-center gap-[20px] lg:flex-col lg:items-stretch">
    <div><img src={img14}/></div>
    <div className="flex flex-row text-[white] gap-[10px]">
      <div><FaXTwitter /></div>
      <div><FaInstagram /></div>
    </div>
  </div>
  </div>
  <div className="text-[white] flex flex-col gap-[25px] items-center lg:items-stretch">
    <h1 className="text-[20px] font-semibold">Customers</h1>
    <p>How does Parrot work</p>
    <p>Content moderation</p>
    <p>FAQ</p>
    <p>Download App</p>
  </div>
  <div className="text-[white] flex flex-col gap-[25px] items-center lg:items-stretch">
    <h1 className="text-[20px] font-semibold">Business</h1>
    <p>Register</p>
    <p>Claim my Business</p>
    <p>Pricing</p>
    <p>News</p>
  </div>
  <div className="text-[white] flex flex-col gap-[25px] items-center lg:items-stretch">
    <h1 className="text-[20px] font-semibold">Legal</h1>
    <p>Privacy Policies</p>
    <p>Terms of Use</p>
    <p>Cookies Policy</p>
    <p>User Generated Content Policy</p>
  </div>
  <div className="text-[white] flex flex-col gap-[25px] items-center lg:items-stretch">
    <h1 className="text-[20px] font-semibold">Company</h1>
    <p>About us</p>
    <p>Support</p>
    <p>Blog</p>
  </div>
</div>
<div className="flex flex-col pt-[60px]">
  <div className="text-[white] h-[0.5px] px-[5%]"><hr></hr></div>
  <div className="text-[white] flex justify-center text-[15px]">© Copyright 2023 All Rights Reserved</div>
  </div>
  </div>
</div>
  </>)
}

export default Body
