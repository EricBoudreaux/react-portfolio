import React from 'react'

import HeroHead from '../img/Hero_avatar.png'
import ResumeButton from './ResumeButton'

import HeroEmote from '../img/Hero_avatar.png'

const Hero = () => {
  return (
    <div name='hero' className='lg:h-screen'>
      <div className='flex items-center justify-center lg:justify-start lg:ml-12 lg:mt-24 px-12 pt-12'>
        <div className='basis-1/3 sm:basis-1/2 mr-4 lg:hidden z-20'>
          <img src={HeroEmote} className='' alt="my big old head" />
        </div>
        <div className='basis-2/3  z-20 lg:mt-10'>
          <h1 className='text-white text-1xl lg:text-3xl'>Hello! I'm</h1>
          <p className='marker w-[150%] leading-[28px] text-[32px] sm:text-4xl md:text-5xl lg:text-6xl'>Eric The <span class="type-words block sm:inline"></span></p>
          <p className='text-white mt-4 sm:mt-8 md:mt-6  text-[14px] md:text-2xl'>Currently based in</p>
          <h1 className='text-white md:text-2xl'>Portland, Oregon</h1>

          
        </div>


        <div className='absolute bg-[var(--primary-1)] top-28 h-52 md:h-80 sm:mt-16 md:mt-24 lg:hidden w-[85%] rotate-[170deg] z-0'></div>
      </div>
        <div className='text-white absolute bottom-8 right-12 xl:right-52 hidden lg:block'>
          <ResumeButton />
        </div>
 
    </div>
  )
}

export default Hero