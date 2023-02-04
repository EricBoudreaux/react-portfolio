import React from 'react'

import HeroHead from '../img/Hero_avatar.png'
import Resume from './Resume'

const Hero = () => {
  return (
    <div name='hero' className='lg:h-screen'>
      <div className='flex items-center justify-center lg:justify-start lg:ml-24 lg:mt-24 px-12 pt-12'>
        <div className='basis-1/3 sm:basis-1/2 mr-4 lg:hidden z-20'>
          <img src="https://s3-alpha-sig.figma.com/img/0688/1de3/9c30e9f6aaab3e7aca91973e152724c0?Expires=1675641600&Signature=bCpREYOocjkjPrVy6aekarN7YQG93nGoqBwTbnj9l1sqJrSQNy6gtvlRsGN2gFfSHjGgMZZE~uGIQwrjSZmJLZv3cbuFcSKZa8hzR4BFuYz40EuxfDHxLoeMKXtL~n2j1-x14dtmhXmbRLzfEBi0U-AvkV-~NxwFEAdsbcHi4sEgp8m0PKcBSXtXyGyOAFZoVkNhif8P7QCymu7ui~TueJzh~fsovko9ldHUYHEhIgkxwy8kTIk2KLBisRMaABp~AFVQqdBfKeCSiJhdCBQc0R9T2dmnJByB7VKxunuUvpqqbAL6dAA80aDya2nVz9l1Q1z50CgFExICsF3z8s72xA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" className='' alt="my big old head" />
        </div>
        <div className='basis-2/3  z-20 lg:mt-10'>
          <h1 className='text-white text-2xl lg:text-4xl'>Hello! I'm</h1>
          <p className='marker text-[16px] sm:text-2xl md:text-4xl lg:text-5xl'>Eric The <span class="type-words"></span></p>
          <p className='text-white mt-6 sm:mt-8 text-[14px] md:text-2xl'>Currently based in</p>
          <h1 className='text-white md:text-2xl'>Portland, Oregon</h1>

          
        </div>


        <div className='absolute bg-[var(--primary-1)] top-28 h-52 md:h-80 sm:mt-16 md:mt-24 lg:hidden w-[85%] rotate-[170deg] z-0'></div>
      </div>
        <div className='text-white absolute bottom-8 right-20 hidden lg:block'>
          <Resume />
        </div>
    </div>
  )
}

export default Hero