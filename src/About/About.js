import React from 'react'
import {Link } from 'react-router-dom'
import Aboutinside from '../About/Aboutinside'
const About = () => {
  return (
    <div>
      <section class="text-white body-font px-5">
     <h1 className='text-5xl flex items-center justify-center underline'>About</h1>
  <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <div class="text-center lg:w-2/3 w-full">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">So,who am I?</h1>
      <p class="mb-8 leading-relaxed">Hi, I'm Srujan Kumar, nice to meet you. I am a Web developer with experience in building websites and web applications. I specialize in JavaScript and have experience working with ReactJS,HTML,CSS and Java.Click the below view more button to know more details about me and my skills</p>
      <div class="flex justify-center">
        <Link to='./Aboutinside' class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">View More</Link>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default About
