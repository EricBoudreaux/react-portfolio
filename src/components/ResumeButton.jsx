import React from 'react'

import ReactCurvedText from "react-curved-text";

import { HiDocumentText } from 'react-icons/hi'
import { Link } from 'react-router-dom';

const Resume = () => {
  return (
    <div className='group cursor-pointer'>
        {/* <div className='absolute top-24 left-16 flex flex-col justify-center items-center text-[var(--primary-1)] rotate-12 hover:text-white cursor-pointer font-bold group-hover:text-white duration-200 ease-in'>
      View Resume

        </div>
        <div className='border-8 border-dotted border-[var(--primary-1)] rounded-full w-60 h-60 animate-spin-slow'></div> */}
      <Link target='_blank' to='/resume'>
      <div className='text-white animate-spin-slow'>
        <ReactCurvedText 
          width='315'
          height='261'
          cx='160'
          cy='135'
          rx='90'
          ry='94'
          startOffset='0'
          reversed={false}
          text='view resusme•view resusme•'
          textProps={{"style": {"fontSize": "34"}}}
          textPathProps={{"fill": "#f2c41b"}}
          tspanProps={{"dy": "31"}}
          ellipseProps={null}
          svgProps={{"style": {"transform": "rotate(0deg)"}}} 
        />

          <div className='absolute top-24 left-32'>
            <HiDocumentText className='mt-2 text-[var(--primary-1)] group-hover:text-white duration-500 ease-in' size={60}/>
          </div>
    </div>
    </Link>


    </div>
  )
}

export default Resume
