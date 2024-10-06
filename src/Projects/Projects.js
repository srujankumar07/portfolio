import React from 'react';
import { projectone, projecttwo, projectthree } from '../assets';
import Projectinside from './Projectinside';
import { Link } from 'react-router-dom';

const Projects = () => {
  const project = [
    {
      id: 1,
      src: projectone,
      git: 'https://github.com/srujankumar07/portfolio',
      view: 'https://myportfolio-blue-six.vercel.app/',
    },
    {
      id: 2,
      src: projecttwo,
      git: 'https://github.com/srujankumar07/electronicmart',
      view: 'https://electronicmart-two.vercel.app/',
    },
    {
      id: 3,
      src: projectthree,
      git: 'https://github.com/srujankumar07/todolist',
      view: 'https://todolist-lac-nine.vercel.app/',
    },
  ];

  return (
    <div className='w-full text-red md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='flex text-4xl text-cyan-400 underline items-center justify-center font-garamond font-bold '>Projects</p>
          <p className='flex items-center justify-center py-6 text-2xl font-nunito text-white'>Check out some of my works here</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          {project.map(({ id, src, git, view }) => (
            <div key={id} className='shadow-lg shadow-gray-600 rounded-lg'>
              <img
                src={src}
                alt=''
                className='rounded-md h-40 duration-200 hover:scale-105'
              />
              <div className='flex items-center justify-center'>
                <a
                  href={view}
                  className='text-center w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-cyan-700 text-white rounded-lg'>
                  demo
                </a>
                <a
                  href={git}
                  className='text-center w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-teal-200 rounded-lg'>
                  code
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className='flex justify-center py-10'>
          <div className='relative inline-flex group'>
          <div
            class="absolute transition-all duration-1000 opacity-70 -inset-px bg-cyan-400 rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
        </div>
        <Link to="/Projectinside" title="Get quote now"
            class="relative inline-flex items-center justify-center px-8 py-4 text-lg text-white transition-all duration-200 bg-stone-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900" role="button">View More
        </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
