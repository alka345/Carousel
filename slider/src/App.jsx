import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css'

function App() {
  const settings = {
    dots: true,
    infinte: true,
    speed : 500,
    slidesToShow:2,
    slidesToScroll: 1
  };

  return (
    <div className='w-3/4 m-auto'>
      <div className='mt-20'>
        <Slider {...settings}>
        {data.map((d) => (
          <div className='bg-white h-[450px] text-black rounded-xl'>
            <div className='h-56 rounded-t-xl bg-indigo-500 flex justify-center items-center'>
              <img src={d.img} alt="" className='h-44 w-44 rounded-full ' />
            </div>
            <div className='flex flex-col justify-center items-center gap-4 p-4 '>
              <p className='text-xl font-semibold'>{d.name}</p>
              <p>{d.review}</p>
              <button className='bg-indigo-500 text-white text-lg p-6 py-1 rounded-xl'>Read More</button>
            </div>
          </div>
        ))}
        </Slider>
      </div>
      
    </div>
  )
}

const data = [
  {
    name: `Alka1`,
    img:`image1`,
    review:`lorem10fuyiolldttgwidjfjdreowi[pfjhfkslbvcxnkiiryioepwj]`
  },
  {
    name: `Alka2`,
    img:`image2`,
    review:`lorem10fuyiolldttgwidjfjdreowi[pfjhfkslbvcxnkiiryioepwj]`
  },
  {
    name: `Alka3`,
    img:`image3`,
    review:`lorem10fuyiolldttgwidjfjdreowi[pfjhfkslbvcxnkiiryioepwj]`
  }
 
]
export default App
