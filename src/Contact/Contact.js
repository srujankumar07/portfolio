import React from 'react'
import {icon} from '../assets'
import { BsGithub } from "react-icons/bs";
import { FaTwitter, FaLinkedinIn } from "react-icons/fa";
const Contact = () => {
  return (
    <div className='flex flex-col gap-5 items-center justify-center pb-20'>
      <div className='flex flex-row gap-5'>
      <div className="flex gap-3">
              <img src={icon} alt="logo" className="w-[50px] h-[50px]" />
            </div>
      <div className='flex '>
      <h1 className='flex items-center justify-center underline text-white text-3xl'>
        Srujan Kumar
      </h1>
      </div>
            </div>
      <p className='flex items-center justify-center text-white text-xl px-12 py-5'>
      To build my career by acquiring a suitable position in a well-established 
      company<br/> and working hard with commitment and sincerity in a challenging 
       and creative <br/>environment where my capabilities and technical skills are best utilized.
      </p>
    <div>
    <div className="flex gap-4">
            <a
              href="https://github.com/srujankumar07"
              className="bannerIcon text-white"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub />
            </a>
            <a
              className="bannerIcon text-white"
              href="https://twitter.com/srujankumar07"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/srujan-kumar-a19316249/"
              target="_blank"
              className="bannerIcon text-white"
              rel="noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </div>
    </div>
    </div>
  )
}

export default Contact
