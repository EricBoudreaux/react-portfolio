import React from 'react'

import Button from '../components/Button'

import { Link } from 'react-router-dom'

import SkillsEmote from '../img/Skills_emote.png'

const Skills = () => {
  return (
    <div name='skills'>
        <div className='text-white w-full pt-12'>
            <h1 className='text-center lg:text-left lg:ml-24 text-3xl lg:text-5xl my-12'>What i can do</h1>

            <div className='flex justify-center gap-6'>
                <div>
                    <img src={SkillsEmote} className='w-28 lg:hidden' alt="" />
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 lg:mt-12'>
                    <p className='text-1xl lg:text-2xl'>Web Developing</p>
                    <p className='text-1xl lg:text-2xl'>Web Design</p>
                    <p className='text-1xl lg:text-2xl'>Graphic Design</p>
                    <p className='text-1xl lg:text-2xl'>UX/UI Engineering</p>
                </div>
            </div>
            <h1 className='text-center mt-16 lg:text-left lg:ml-24 text-2xl lg:text-3xl my-12'>Technologies i use</h1>
            <div className='flex justify-center'>
                <div className='text-[14px] sm:text-[16px] md:text-2xl xl:text-3xl'>
                    <p>HTML/CSS ..................... 3 years</p>
                    <p>Javascript/Tyescript ......... 3 years</p>
                    <p>React ........................ 2 years</p>
                    <p>Vue ........................... 1 year</p>
                    <p>Tailwind/Bootstrap ........... 2 years</p>
                    <p>Npm ...................... 2 1/2 years</p>
                    <p>Node JS .................. 1 1/2 years</p>
                    <p>Npm ...................... 2 1/2 years</p>
                    <p>Git .......................... 3 years</p>
                    <p>Figma .................... 2 1/2 years</p>
                    <p>Adobe Suite ................. 10 years</p>
                    </div>
            </div>
            <div className='flex justify-center my-12 h-12'>
            <Link target='_blank' to='/resume'>
                <Button text='view my resume' />
            </Link>
            </div>
        </div>
    </div>
  )
}

export default Skills