import React from 'react'

import Button from '../components/Button'

import { Link } from 'react-router-dom'

const Skills = () => {
  return (
    <div name='skills'>
        <div className='text-white w-full pt-12'>
            <h1 className='text-center lg:text-left lg:ml-24 text-3xl lg:text-5xl my-12'>What i can do</h1>

            <div className='flex justify-center gap-6'>
                <div>
                    <img src="https://s3-alpha-sig.figma.com/img/8a46/df1a/d5d5d856705986794befdbba3ba4ddf3?Expires=1676246400&Signature=kq9MkvNrSgAs2~WzrP14CYYt1anIEMspnFytnV2RxRTG-tRIDPsL1F340bbjJzAlgpAJ-OXYjUzluvoo7UHMAdxx3sdhexJfU2mFvZVo-ylw7nsnh3goapcPXvYllLd5YmbpBdaeaUN7oPtSVPqVXobCkOzjnS-8xxnlRHDOSaNHgLoUff1~y2m5B78d572MwiN0CfztWGHNunZDeYZIiUMa3o37xcLM-lUM9boM5SzbE7sOBcCB~sbBGUgBcqOJnaKXdEwgj5I2oAFZ-FKd~zbmjLDUuPC1o9mk4L0EU-qRz~JALEscmodjo3MAA1g-wN58udghtOg1luuh0vvSZQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" className='w-20 lg:hidden' alt="" />
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 lg:mt-12'>
                    <p className='text-1xl lg:text-2xl'>Web Developing</p>
                    <p className='text-1xl lg:text-2xl'>Web Design</p>
                    <p className='text-1xl lg:text-2xl'>Graphic Design</p>
                    <p className='text-1xl lg:text-2xl'>UX/UI Engineering</p>
                </div>
            </div>
            <h1 className='text-center mt-16 lg:text-left lg:ml-24 text-2xl lg:text-3xl my-12'>Technologies i use</h1>
            <div className='flex justify-center'>
                <div className='text-[10px] sm:text-[16px] md:text-2xl xl:text-3xl'>
                    <p>HTML/CSS ..................... 3 years</p>
                    <p>Javascript/Tyescript ......... 3 years</p>
                    <p>React ........................ 2 years</p>
                    <p>Vue ........................... 1 year</p>
                    <p>Tailwind/Bootstrap ........... 2 years</p>
                    <p>Npm ...................... 2 1/2 years</p>
                    <p>Node JS .................. 1 1/2 years</p>
                    <p>Npm ...................... 2 1/2 years</p>
                    <p>Git .......................... 3 years</p>
                    <p>Figma .................... 2 1/2 years</p>
                    <p>Adobe Suite ................. 10 years</p>
                    </div>
            </div>
            <div className='flex justify-center my-12 h-12'>
            <Link target='_blank' to='/resume'>
                <Button text='view my resume' />
            </Link>
            </div>
        </div>
    </div>
  )
}

export default Skills