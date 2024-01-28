import React from 'react'
import { portimg2 } from '../assets'
import Skillsinside from '../About/Skillsinside'
const Aboutinside = () => {
  
  return (

    
    <div className='container mx-auto flex px-20 py-15 md: flex-col '>
  <div className=''>
  <section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img class="object-cover object-center rounded" alt="hero" src={portimg2}/>
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl text-white mb-4 font-medium">Welcome to My Portfolio!
        <br class="hidden  text-white lg:inline-block"/>Who Am I?
      </h1>
      <p class="mb-8  text-white leading-relaxed">Hey there! I'm Srujan Kumar, a passionate and driven IT student, constantly exploring the fascinating realms of software industry. This corner of the web is where my journey, fueled by curiosity and creativity, unfolds.I'm an avid learner, always seeking new challenges to expand my skills. Whether it's delving into web development, experimenting with DSA, or honing my abilities in Full-stack development, I thrive on pushing boundaries and embracing innovation.</p>
      
    </div>
  </div>
</section>
  </div>
  <div className='container mx-auto flex  py-24 md: flex-col gap-4 '>
    <h1 className='text-4xl text-white underline py-10'>Education</h1>
    <div className=' flex container py-10 px-5 bg-gray-300 flex-row justify-between '>
      <div className='flex flex-col'>
      <h1 className='text-2xl'>BTech in Information Technology </h1>
      <p>Geethanjali College Of Engineering And Technology(2020-2024)</p>
      </div>
      <div className='flex py-2 text-xl'>
        Aggregate:81%
      </div>
    </div>
    <div className='flex container py-10 px-5 bg-gray-300 flex-row justify-between '>
      <div className='flex flex-col'>
      <h1 className='text-2xl'>Intermediate in MPC</h1>
      <p>
        Narayana Junior College(2018-2020)
      </p>
      </div>
      <div className='flex py-2 text-xl'>
        Aggregate:95%
      </div>
    </div>
    <div className='flex container py-10 px-5 bg-gray-300 flex-row justify-between'>
      <div className='flex flex-col'>
    <h1 className='text-2xl'>School(10th Standard)</h1>
      <p>
        Vijaya Ratna High School(2018)
      </p>
      </div>
      <div className='flex py-2 text-xl'>
        Aggregate:9.8 cgpa
      </div>
    </div>
  </div>
    <Skillsinside/>
    </div>
  )
}

export default Aboutinside
