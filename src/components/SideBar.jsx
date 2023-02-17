import React from 'react'

import HeroHead from '../img/Hero_avatar.png'
import AboutEmote from '../img/About_emote.png'
import SkillsEmote from '../img/Skills_emote.png'


const SideBar = () => {
  return (
    <div className='bg-[var(--light)] pt-12 pl-4 h-[4356px]'>

        <div className='hero h-screen'>
          <h1 className="font-light text-black text-1xl lg:text-2xl">Eric Boudreaux</h1>
          <img src={HeroHead} alt="my cartoon head" className=' mx-auto  mt-[80px]'/>
        </div>
        <img src={AboutEmote} alt="my cartoon head" className='w-[90%] mx-auto mt-[200px]' />
        <img src={SkillsEmote} className='w-[80%] mx-auto mt-[1500px]' alt="" />
    </div>  
  )
}

export default SideBar