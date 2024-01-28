import React from 'react'
import {projectone,projecttwo,projectthree} from "../assets";
import Projectinside from './Projectinside';
import {Link } from 'react-router-dom'
const Projects = () => {
  const project=[{
    id:1,
    src:projectone
  },
  {
    id:2,
    src:projecttwo
  },
  {
    id:3,
    src:projectthree
  },
]
  return (
    <div className=' w-full text-red md:h-screen'>
     <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
     <div className='pb-8'>
       <p className='text-4xl text-white font-bold inline border-b-4 border-gray-500'>Projects</p>
    <p className='py-6 text-white'>
      Check out some of my works here
    </p>
    </div>

  
    
     <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
     {
      project.map(({id,src})=>(
        <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
        <img src={src} alt="" className='rounded-md duration-200 hover:scale-105'/>
        <div className='flex items-center justify-center'>
          <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-indigo-500 text-white rounded-lg'>demo</button>
          <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-gray-300 rounded-lg'>code</button>
        </div>
      </div>
      ))
    }
   
     </div>
     <div class="flex justify-center py-10">
        <Link to='/Projectinside' class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">View More</Link>
      </div>
    </div>
    </div>
  )
}

export default Projects
