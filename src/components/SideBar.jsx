import React from 'react'

import HeroHead from '../img/Hero_avatar.png'
import AboutEmote from '../img/About_emote.png'

const SideBar = () => {
  return (
    <div className='bg-[var(--light)] pt-12 pl-4 h-[4350px]'>

        <div className='hero h-screen'>
          <h1 className="font-light text-black text-1xl lg:text-2xl">Eric Boudreaux</h1>
          <img src={HeroHead} alt="my cartoon head" className=' mx-auto mt-[100px]'/>
        </div>
        <img src={AboutEmote} alt="my cartoon head" className='w-[80%] mx-auto mt-[100px]' />
        <img src="https://s3-alpha-sig.figma.com/img/8a46/df1a/d5d5d856705986794befdbba3ba4ddf3?Expires=1676246400&Signature=kq9MkvNrSgAs2~WzrP14CYYt1anIEMspnFytnV2RxRTG-tRIDPsL1F340bbjJzAlgpAJ-OXYjUzluvoo7UHMAdxx3sdhexJfU2mFvZVo-ylw7nsnh3goapcPXvYllLd5YmbpBdaeaUN7oPtSVPqVXobCkOzjnS-8xxnlRHDOSaNHgLoUff1~y2m5B78d572MwiN0CfztWGHNunZDeYZIiUMa3o37xcLM-lUM9boM5SzbE7sOBcCB~sbBGUgBcqOJnaKXdEwgj5I2oAFZ-FKd~zbmjLDUuPC1o9mk4L0EU-qRz~JALEscmodjo3MAA1g-wN58udghtOg1luuh0vvSZQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" className='w-[60%] mx-auto mt-[1600px]' alt="" />
    </div>  
  )
}

export default SideBar