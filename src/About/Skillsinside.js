import React from 'react'
import { git, css, html, js, bootstrap, java, react, tailwind,express,node,sql,mongodb } from '../assets'

const Skillsinside = () => {
    const project = [{
            id: 1,
            src: react,
            skill: 'REACTJS'
        },
        {
            id: 2,
            src: html,
            skill: 'HTML'
        },
        {
            id: 3,
            src: css,
            skill: 'CSS'
        },
        {
            id: 4,
            src: js,
            skill: 'JAVASCRIPT'
        },
        {
            id: 5,
            src: java,
            skill: 'JAVA'
        },
        {
            id: 6,
            src: tailwind,
            skill: 'TAILWINDCSS'
        },
        {
            id: 7,
            src: bootstrap,
            skill: 'BOOTSTRAP'
        },
        {
            id: 8,
            src: git,
            skill: 'GIT'
        },
        {
            id: 9,
            src: express,
            skill: 'EXPRESS'
        },
        {
            id: 10,
            src: node,
            skill: 'NODE'
        },
        {
            id: 11,
            src: mongodb,
            skill: 'MONGODB'
        },
        {
            id: 12,
            src: sql,
            skill: 'SQL'
        }
    ]
    return (
        <div className='flex flex-col pb-20 container'>
            <h1 className='flex text-4xl text-cyan-400 underline py-10'>Skills</h1>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-8 px-4'>
                {
                    project.map(({ id, src, skill }) => (
                        <div key={id} className='shadow-2xl shadow-cyan-400 rounded-2xl'>
                            <img src={src} alt="" className='rounded-md duration-200 w-full hover:scale-105' />
                            <div className='flex items-center justify-center text-center'>
                                <span className='px-6 py-3 m-4 text-white flex items-center justify-center'>{skill}</span>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default Skillsinside
