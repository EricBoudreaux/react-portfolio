import React, { useState, useEffect} from 'react'
import { Link } from 'react-scroll'
import ButtonInvert from './ButtonInvert'

import AboutEmote from '../img/About_emote.png'



const About = () => {


  const [boxMargin, setBoxMargin] = useState('-80px')
  const handleScroll = () => {
      const position = window.pageYOffset;

      setBoxMargin(position + 'px')

  }
  
  useEffect(() => {
      window.addEventListener('scroll', handleScroll, { passive: true});
  
      return () => {
          window.removeEventListener('scroll', handleScroll);
      }
  }, []);


  return (
    <div name='about' className='bg-[var(--primary-1)] ml-12 mt-40 lg:mt-[-80px] pt-12 lg:p-20 xl:p-24 lg:ml-[-60px]'>
        <h1 className='text-center text-[40px]'>All about me</h1>
        <p className='mt-12 px-12 mx-auto text-[12px] sm:text-[16px]'>When I was a kid I was introduced to computers from 
        my grandmother's Windows 3.0 machine. Little did I 
        know then that experience would blossom into life
        long love for technology. After that, I was never 
        without some type of pc or mac in my immediate 
        vicinity. I still feel that same amazement when I 
        open my Macbook Pro twenty-five years later. Since 
        the times of that starry eyed kid, I've discovered 
        a deep devotion to creativity. That's why web 
        developing makes sense to me. It is the perfect blend of 
        structured creativity I've always striven to achieve. </p>
<p className='text-white mt-5 font-bold px-12'>The art of creating is a beautiful thing to me.</p>
<div className='mt-12 lg:mt-0 flex flex-row items-center justify-center gap-12'>
    <img src={AboutEmote} alt="me standing" className='w-[20%] lg:hidden pb-12' />
    <div className='lg:mt-12'>
    <Link to='contact' smooth={true} offset={-30}><ButtonInvert text='contact' className=''/></Link>
    </div>
    </div>
</div>  
  )
}

export default About