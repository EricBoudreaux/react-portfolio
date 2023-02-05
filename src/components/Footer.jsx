import React from 'react'

import { AiFillLinkedin, AiFillGithub, AiOutlineInstagram } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className=' bg-[var(--primary-1)] py-12'>
        <div className='flex justify-center gap-5 mt-4 mb-2'>
            <a href='https://www.linkedin.com/in/eric-boudreaux/' target='_blank'>
              <AiFillLinkedin size={30}/>
            </a>
            <a href='https://github.com/EricBoudreaux' target='_blank'>
              <AiFillGithub size={30}/>
            </a>
            <a href='https://www.instagram.com/lmaoateric/' target='_blank'>
              <AiOutlineInstagram size={30}/>
            </a>
        </div>
        <a href='#'></a>
         <p className='marker text-4xl lg:text-5xl text-center'>Eric Boudreaux</p>
        </div>
  )
}

export default Footer