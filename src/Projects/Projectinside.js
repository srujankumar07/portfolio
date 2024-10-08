import React from 'react'
import { projectone } from '../assets'
import { projecttwo } from '../assets'
import { projectthree } from '../assets'
import { projectfour } from '../assets'
import { projectfive } from '../assets'




const Projectinside = () => {
    const project=[{
        id:1,
        src:projectone,
        git:"https://github.com/srujankumar07/portfolio",
        view:"https://myportfolio-blue-six.vercel.app/",
      },
      {
        id:2,
        src:projecttwo,
        git:"https://github.com/srujankumar07/electronicmart",
        view:"https://electronicmart-two.vercel.app/",
      },
      {
        id:3,
        src:projectthree,
        git:"https://github.com/srujankumar07/todolist",
        view:"https://todolist-lac-nine.vercel.app/",
      },
      {
        id:4,
        src:projectfour,
        git:"https://github.com/srujankumar07/Foodmunch",
        view:"https://foodmunch-woad.vercel.app/",
      },
      {
        id:5,
        src:projectfive,
        git:"https://github.com/srujankumar07/BSbookstore",
        view:"https://b-sbookstore.vercel.app/",
      },
    ]
      return (
        <div className=' w-full text-red'>
         <div className='max-w-screen-lg p-4  mx-auto flex flex-col justify-center w-full h-full'>
         <div className='pb-0 flex flex-col justify-center items-center'>
           <p className='text-4xl text-cyan-400 font-bold inline font-garamond underline'>Projects</p>
          <p className='py-6 text-2xl text-cyan-400 font-nunito'>
            Check out some of my works here
          </p>
        </div>
    
      
        
         <div className=' grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-4'>
         {
          project.map(({id,src,git,view})=>(
            <div key={id} className='shadow-2xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] rounded-lg'>
              <div className='overflow-hidden rounded-md'>
              <img src={src} alt="" className='h-40 rounded-md object-cover w-full duration-200 hover:scale-105'/>
              </div>
            <div className='flex items-center justify-center'>
              <a href={view} className='text-center w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-cyan-700 text-white rounded-lg'>demo</a>
              <a href={git} className='text-center w-1/2 px-6 py-3 m-4  duration-200 hover:scale-105 bg-teal-200 rounded-lg'>code</a>
            </div>
          </div>
          ))
        }
       
         </div>
        </div>
        </div>
      )
    }

export default Projectinside
