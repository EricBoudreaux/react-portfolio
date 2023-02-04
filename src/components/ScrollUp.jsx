import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll'


import { BsArrowUp } from 'react-icons/bs'


const ScrollUp = () => {


const [scrollPosition, setScrollPosition] = useState(0);
const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position)
    console.log(position)
}

useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true});

    return () => {
        window.removeEventListener('scroll', handleScroll);
    }
}, []);
  return (
    <div className={scrollPosition > 75 ? 'z-50 fixed right-8 bottom-5 ease-in duration-300' : 'z-50 fixed right-[-50px] bottom-5 ease-in duration-300'}>
        <div className='w-12 h-12 bg-black text-[var(--primary-1)] cursor-pointer flex justify-center items-center hover:scale-105'>
        <Link to='hero' smooth={true} offset={-180}><BsArrowUp size={15}/></Link>
        </div>
    </div>
  )
}

export default ScrollUp
