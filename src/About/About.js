import React from 'react'
import {Link } from 'react-router-dom'
import Aboutinside from '../About/Aboutinside'
const About = () => {
  return (
    <div>
      <section class="text-white body-font px-5">
     <h1 className='text-5xl text-cyan-400 underline flex items-center justify-center font-garamond '>About</h1>
  <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <div class="text-center lg:w-2/3 w-full">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium font-nunito  text-white">So,who am I?</h1>
      <p class="mb-8 leading-relaxed font-nunito">Hi, I'm Srujan Kumar, nice to meet you. I am a Web developer with experience in building websites and web applications. I specialize in JavaScript and have experience working with ReactJS,HTML,CSS and Java.Click the below view more button to know more details about me and my skills</p>
      <div class="flex justify-center">
       
      <div class="relative inline-flex  group">
        <div
            class="absolute transition-all duration-1000 opacity-70 -inset-px bg-cyan-400 rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
        </div>
        <Link to="/Aboutinside" title="Get quote now"
            class="relative inline-flex items-center justify-center px-8 py-4 text-lg text-white transition-all duration-200 bg-stone-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900" role="button">View More
        </Link>
    </div> 
    </div>
      
    </div>
  </div>
</section>
    </div>
  )
}

export default About
