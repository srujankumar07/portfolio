import React from 'react'
import { portimg } from '../assets'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Projects from '../Projects/Projects'

import { FaDownload } from "react-icons/fa";
import Pdf from '../finalcv.pdf';
const Home = () => {
  
  return (
    <div>
      <div className='container  mx-auto flex  md: flex-col'>
      <section class="text-white body-font">
      <div class="container mx-auto flex px-20 py-20 md:flex-row flex-col items-center">
      <div class="lg:flex-grow md:w-2/3 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Hi,I'm Srujan Kumar
        <br class=" text-white hidden lg:inline-block"/> a Web Developer
      </h1>
      <p class="mb-8 leading-relaxed">I am a rising senior from Geethanjali College of Engineering and Technology pursuing Bachelor of Technology in Information Technology. The skills I possess include web development and Java programming.</p>
      <div class="flex justify-center">
        <a href={Pdf} target="_blank" download class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Download</a>
        {/* <button class="btn"><i class="fa fa-download"></i> Download</button> */}
        
      </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded " alt="hero" src={portimg}/>
    </div>
  </div>
</section>
</div>
<About/>
<Projects/>
<Contact/>
    </div>
  )
}

export default Home
