import React from 'react'

import { HiDocumentText } from 'react-icons/hi'

const Resume = () => {
  return (
    <div>
        <div className='absolute top-24 left-16 flex flex-col justify-center items-center text-[var(--primary-1)] rotate-12 hover:text-white cursor-pointer'>
      View Resume

        <HiDocumentText className='rotate-[350deg] mt-2' size={30}/>
        </div>
        <div className='border-8 border-dotted border-[var(--primary-1)] rounded-full w-60 h-60 hover:animate-spin'></div>
    </div>
  )
}

export default Resume
