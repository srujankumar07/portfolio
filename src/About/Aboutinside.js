import React from 'react'
import { portimg2 } from '../assets'
import Skillsinside from '../About/Skillsinside'


const Aboutinside = () => {
  
  return (

    
    <div className='container mx-auto flex px-4 py-15 md: flex-col '>
  <div className=''>
  <section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img class="object-cover object-center rounded" alt="hero" src={portimg2}/>
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl text-cyan-400 font-nunito mb-4 font-medium">Welcome to My Portfolio!
        <br class="hidden  text-cyan-400 font-nunito lg:inline-block"/>Who Am I?
      </h1>
      <p class="mb-8  text-white leading-relaxed font-nunito">Hey there! I'm Srujan Kumar, a passionate and driven IT student, constantly exploring the fascinating realms of software industry. This corner of the web is where my journey, fueled by curiosity and creativity, unfolds.I'm an avid learner, always seeking new challenges to expand my skills. Whether it's delving into web development, experimenting with DSA, or honing my abilities in Full-stack development, I thrive on pushing boundaries and embracing innovation.</p>
      
    </div>
  </div>
</section>
  </div>
  <div className='container mx-auto flex py-24 md: flex-col gap-10 '>
    <h1 className='text-4xl text-cyan-400 underline py-10 font-garamond flex items-center justify-center'>Education</h1>
    <div className='shadow-2xl shadow-cyan-400/50 rounded-3xl'>
    <div class="justify-between py-10 sm:flex">
    <div>
      <h5 class="text-xl font-bold px-10 text-white font-nunito">
      BTech in Information Technology 
      </h5>
      <p class="mt-1 text-xs font-medium px-10 text-white font-nunito">Geethanjali College Of Engineering And Technology(2020-2024)</p>
    </div>

    <div class="flex-shrink-0 hidden px-10 ml-3 sm:block">
      <img
        class="object-cover w-16 h-16 rounded-lg shadow-sm"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTln1iTkM0LrZhqDm-mnex0DU4r_ZIKoRMpGRpL3UTZeumk5GhIcNCeUS_0NFr5B6WlmmI&usqp=CAU"
        alt=""
      />
    </div>
  </div>

  

  <dl class="flex mt-6 pb-5">
    <div class="flex flex-col-reverse">
      <dt class="text-sm px-10 font-medium text-white font-nunito">8.3 cgpa</dt>
      <dd class="text-xs px-10 text-white font-nunito">Aggregate:</dd>
    </div>

  
  </dl>
  </div>
<div className='shadow-2xl shadow-cyan-500/50 rounded-3xl'>
  <div class="justify-between py-10 sm:flex">
    <div>
      <h5 class="text-xl font-bold px-10 text-white font-nunito">
      Intermediate(MPC)
      </h5>
      <p class="mt-1 text-xs font-medium px-10 font-nunito  text-white">Narayana Junior College(2018-2020)</p>
    </div>

    <div class="flex-shrink-0 hidden ml-3 px-10 sm:block">
      <img
        class="object-cover w-16 h-16 rounded-lg shadow-sm"
        src="https://directory.edugorilla.com/wp-content/uploads/sites/6/2019/07/27331579_184477595639800_3532686442370240359_n.jpg"
        alt=""
      />
    </div>
  </div>

  

  <dl class="flex mt-6 pb-5">
    <div class="flex flex-col-reverse">
      <dt class="text-sm px-10 font-medium font-nunito text-white">95%</dt>
      <dd class="text-xs px-10 font-nunito text-white">Aggregate:</dd>
    </div>


  
  </dl>
  </div>
  <div className='shadow-2xl shadow-cyan-500/50 rounded-3xl'>
  <div class="justify-between py-10 sm:flex  ">
    <div>
      <h5 class="text-xl px-10 font-bold font-nunito text-white">
      School(10th Standard)
      </h5>
      <p class="mt-1 text-xs font-medium px-10 font-nunito text-white">Vijaya Ratna High School(2018)</p>
    </div>

    <div class="flex-shrink-0 hidden ml-3 px-10 sm:block">
      <img
        class="object-cover w-16 h-16 rounded-lg shadow-sm"
        src="https://content.jdmagicbox.com/comp/hyderabad/y3/040pxx40.xx40.100616082455.w3y3/catalogue/vijaya-ratna-concept-school-uppal-hyderabad-schools-ov0ns9s51q-250.jpg"
        alt=""
      />
    </div>
  </div>

  

  <dl class="flex mt-6 pb-5">
    <div class="flex flex-col-reverse">
      <dt class="text-sm font-medium px-10 font-nunito text-white">9.8 cgpa</dt>
      <dd class="text-xs px-10 font-nunito text-white">Aggregate:</dd>
    </div>

  
  </dl>
  

  </div> 
 
  </div>
    <Skillsinside/>
    </div>
  )
}

export default Aboutinside