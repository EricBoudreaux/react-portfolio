import React from 'react'

import { AiFillLinkedin, AiFillGithub, AiOutlineInstagram } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className=' bg-[var(--primary-1)] py-12'>
        <div className='flex justify-center gap-5 mt-4 mb-2'>
            <AiFillLinkedin size={30}/>
            <AiFillGithub size={30}/>
            <AiOutlineInstagram size={30}/>
        </div>
        <a href='#'></a>
         <p className='marker text-4xl lg:text-5xl text-center'>Eric Boudreaux</p>
        </div>
  )
}

export default Footer