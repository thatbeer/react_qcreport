import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import React, { useState } from 'react'
import img1 from "../../img/brand.png";
import { SquaresPlusIcon } from "@heroicons/react/24/outline";

import "./ViewImage.style.css"
import { useNavigate } from "react-router-dom";

//https://www.positronx.io/react-responsive-carousel-tutorial/
//https://mediajams.dev/post/add-a-responsive-image-carousel-to-your-react-app

const   ViewImage = () => {
  const navigate = useNavigate();

  const [activeIndex , setActiveIndex] = useState(0);
  const total = 3
  const onIndexChangeHandler = (index) => {setActiveIndex(index)}
  return (
    <div className= "relative lg:h-[200px]  h-auto w-auto  lg: mx-auto mt-0 lg:pt-0 lg:px-0">
        <h1 className='text-xl flex justify-center text-center font-bold mx-auto py-0 text-white bg-blue-400 border border-gray-600'>ภาพถ่าย</h1>
      <div className="">
        <Carousel infiniteLoop useKeyboardArrows
        onChange={onIndexChangeHandler} showArrows={true} showStatus={false}
        showThumbs={false} >
          <div className="lg:w-3/5 lg:h-[200px] h-full w-full m-auto my-2 hover:cursor-pointer" onClick={() => {navigate('/')}}>
            <img className="" src={"https://www.kraftwerk.at/app/uploads/fly-images/962/reference-img-worlds-of-adventure-park-4-1920x9999.jpg"} alt="img1"/>
            {/* <p className="legend bg-none">1/3</p> */}
          </div>
          <div className="lg:w-3/5 lg:h-[200px] h-full w-full m-auto my-2 hover:cursor-pointer" onClick={() => {navigate('/')}}>
            <img className="" src={"https://media.architecturaldigest.com/photos/57c7003fdc03716f7c8289dd/master/pass/IMG%20Worlds%20of%20Adventure%20-%201.jpg"} alt="img1"/>
            {/* <p className="legend">2/3</p> */}
          </div>
          <div className="lg:w-3/5 lg:h-[200px] h-full w-full m-auto my-2 hover:cursor-pointer" onClick={() => {navigate('/')}}>
            <img className="" src={"https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/udHvbKwV-IMG-Dubai-UAE-1-1200x800.jpg"} alt="img1"/>
            {/* <p className="legend">3/3</p> */}
          </div>
        </Carousel>
        <div className="pb-4 text-white items-start  relative justify-center text-center  ">
          <div className="relative flex  bg-black  justify-stat">
            <pre> {`Image ${activeIndex + 1} of ${total}`}</pre>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ViewImage