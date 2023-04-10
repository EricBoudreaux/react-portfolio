import React, { useState, useEffect} from 'react'

import Button from './/Button'



import ButtonInvert from './ButtonInvert'


import { FaReact } from 'react-icons/fa'
import { AiFillApi } from 'react-icons/ai'
import { TbBrandCss3 } from 'react-icons/tb'
import { SiTailwindcss, SiReactrouter, SiFirebase } from 'react-icons/si'

import myWeather from '../img/myweather_website.png'
import politics from '../img/politics_website.png'
import photography from '../img/photography_website.png'
import chatter from '../img/chatter_website.png'


const Work = () => {



    //  ---Animate on scroll-----

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position)
  
  }
  
  useEffect(() => {
      window.addEventListener('scroll', handleScroll, { passive: true});
  
      return () => {
          window.removeEventListener('scroll', handleScroll);
      }
  }, []);


  return (
    <div name='work' className='text-white mt-40 ml-6 w-full md:ml-0'>
        <h1 className='text-center lg:text-left lg:ml-24 text-3xl lg:text-5xl my-12'>My work</h1>
        <div className='flex flex-col gap-4'>


            {/* card 1 */}
            <div className={scrollPosition > 1200 ? 'z-50 right-14 lg:relative bottom-5 ease-in duration-300' : 'z-50 lg:relative right-[-130%] bottom-5 ease-in duration-7'}>
            <div className='bg-[var(--primary-1)] w-[90%] lg:w-[180%] lg:ml-12 mx-auto'>
                <div className='flex flex-col md:flex-row lg:w-[50%] p-4'>
                    <div className='basis-1/2'>
                        <img src={myWeather} className='h-[230px] object-cover' alt="" />
                    </div>
                    <div className='basis-1/2 ml-4'>
                        <p className='text-black lg:text-2xl'>What is your weather</p>
                        <p className='text-black lg:text-1xl text-sm'>Built Using:</p>
                        <div className='flex flex-col gap-2 mb-4 mt-5'>
                            <div className='flex items-center'>
                                <FaReact className='text-black' />
                                <div className='text-black ml-2'>ReactJS</div>
                            </div>
                            <div className='flex items-center'>
                                <AiFillApi className='text-black' />
                                <div className='text-black ml-2'>API</div>
                            </div>
                            <div className='flex items-center'>
                                <TbBrandCss3 className='text-black' />
                                <div className='text-black ml-2'>CSS</div>
                            </div>

                        </div>
                        <div className='flex gap-3 text-black'>
                        <a href='https://www.whatisyourweather.com/' target='_blank'><ButtonInvert text='preview' /></a>
                        <a href='https://github.com/EricBoudreaux/What-is-your-weather' target='_blank'><ButtonInvert text='repo' /></a>
                        </div>
                    </div>

                </div>
            </div>
            </div>


            {/* card 2 */}

            <div className={scrollPosition > 1500 ? 'z-50 lg:relative right-14 bottom-5 ease-in duration-300' : 'z-50 lg:relative right-[-130%] bottom-5 ease-in duration-7'}>
            <div className='bg-[var(--primary-1)] w-[90%] lg:w-[180%] lg:ml-12 mx-auto'>
                <div className='flex flex-col md:flex-row  lg:w-[50%] p-4'>
                    <div className='basis-1/2'>
                        <img src={politics} className='h-[210px] object-cover' alt="" />
                    </div>
                    <div className='basis-1/2 ml-4'>
                        <p className='text-black lg:text-2xl'>Politician 128</p>
                        <p className='text-black lg:text-1xl text-sm'>Built Using:</p>
                        <div className='flex flex-col gap-2 mb-4 mt-5'>
                            <div className='flex items-center'>
                                <FaReact className='text-black' />
                                <div className='text-black ml-2'>ReactJS</div>
                            </div>
                            <div className='flex items-center'>
                                <SiReactrouter className='text-black' />
                                <div className='text-black ml-2'>React Router</div>
                            </div>
                            <div className='flex items-center'>
                                <SiTailwindcss className='text-black' />
                                <div className='text-black ml-2'>Tailwind</div>
                            </div>
 

                        </div>
                        <div className='flex gap-3 text-black'>
                        <a href='https://political-react-website.vercel.app/' target='_blank'><ButtonInvert text='preview' /></a>
                        <a href='https://github.com/EricBoudreaux/political-react-website' target='_blank'><ButtonInvert text='repo' /></a>
                        </div>
                    </div>

                </div>
            </div>

            </div>
            {/* card 3 */}
            <div className={scrollPosition > 1800 ? 'z-50 lg:relative right-14 bottom-5 ease-in duration-300' : 'z-50 lg:relative right-[-130%] bottom-5 ease-in duration-7'}>
            <div className='bg-[var(--primary-1)] w-[90%] lg:w-[180%] lg:ml-12 mx-auto'>
                <div className='flex flex-col md:flex-row  lg:w-[50%] p-4'>
                    <div className='basis-1/2'>
                        <img src={chatter} className='h-[210px] object-cover' alt="" />
                    </div>
                    <div className='basis-1/2 ml-4'>
                        <p className='text-black lg:text-2xl'>Chatter</p>
                        <p className='text-black lg:text-1xl text-sm'>Built Using:</p>
                        <div className='flex flex-col gap-2 mb-4 mt-5'>
                            <div className='flex items-center'>
                                <FaReact className='text-black' />
                                <div className='text-black ml-2'>ReactJS</div>
                            </div>
                            <div className='flex items-center'>
                                <SiFirebase className='text-black' />
                                <div className='text-black ml-2'>Firebase</div>
                            </div>
                            <div className='flex items-center'>
                                <TbBrandCss3 className='text-black' />
                                <div className='text-black ml-2'>CSS</div>
                            </div>
 

                        </div>
                        <div className='flex gap-3 text-black'>
                        <a href='https://chatter-puce.vercel.app/' target='_blank'><ButtonInvert text='preview' /></a>
                        <a href='https://github.com/EricBoudreaux/chatter' target='_blank'><ButtonInvert text='repo' /></a>
                        </div>
                    </div>

                </div>
            </div>
            </div>
            {/* card 4 */}
            <div className={scrollPosition > 2100 ? 'z-50 lg:relative right-14 bottom-5 ease-in duration-300' : 'z-50 lg:relative right-[-130%] bottom-5 ease-in duration-7'}>
            <div className='bg-[var(--primary-1)] w-[90%] lg:w-[180%] lg:ml-12 mx-auto'>
                <div className='flex flex-col md:flex-row  lg:w-[50%] p-4'>
                    <div className='basis-1/2'>
                        <img src={photography} className='h-[230px] object-cover' alt="" />
                    </div>
                    <div className='basis-1/2 ml-4'>
                        <p className='text-black lg:text-2xl'>Photosen Photography</p>
                        <p className='text-black lg:text-1xl text-sm'>Built Using:</p>
                        <div className='flex flex-col gap-2 mb-4 mt-5'>
                            <div className='flex items-center'>
                                <FaReact className='text-black' />
                                <div className='text-black ml-2'>ReactJS</div>
                            </div>
                            <div className='flex items-center'>
                                <SiReactrouter className='text-black' />
                                <div className='text-black ml-2'>React Router</div>
                            </div>
                            <div className='flex items-center'>
                                <SiTailwindcss className='text-black' />
                                <div className='text-black ml-2'>Tailwind</div>
                            </div>
                        </div>
                        <div className='flex gap-3 text-black'>
                        <a href='https://photography-react-website.vercel.app/' target='_blank'><ButtonInvert text='preview' /></a>
                        <a href='https://github.com/EricBoudreaux/photography-react-website' target='_blank'><ButtonInvert text='repo' /></a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        </div>
        {/* <div className='flex justify-center mt-12 mb-20'>
            <Button text='Load more' />
        </div> */}
    </div>
  )
}

export default Work
