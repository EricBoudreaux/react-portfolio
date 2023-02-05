import React, { useState } from 'react'
import { Link } from 'react-scroll'
import Button from './Button'

import {TiThMenu} from 'react-icons/ti'

import { FaWindowClose } from 'react-icons/fa'


const Navbar = () => {

const [nav, setNav] = useState(false);

  return (
    <div className='my-8 mx-12 pt-8'>
      <div className='hidden md:flex justify-between items-center'>
      <h1 className='text-1xl text-white lg:hidden'>Eric Boudreaux</h1>
        

      <div className='text-white flex items-center justify-end w-full gap-6'>

        <Link className='my-4 text-1xl hover:text-[var(--primary-1)] ease-in duration-200 cursor-pointer border-b-4 border-[var(--dark)] hover:border-[var(--primary-1)]'>Home</Link>
        <Link to='about' smooth={true} offset={-20} className='my-4 text-1xl hover:text-[var(--primary-1)] ease-in duration-200 cursor-pointer border-b-4 border-[var(--dark)] hover:border-[var(--primary-1)]'>About</Link>
        <Link to='work' smooth={true} offset={-20} className='my-4 text-1xl hover:text-[var(--primary-1)] ease-in duration-200 cursor-pointer border-b-4 border-[var(--dark)] hover:border-[var(--primary-1)]'>Work</Link>
        <Link to='skills' smooth={true} offset={-20} className='my-4 text-1xl hover:text-[var(--primary-1)] ease-in duration-200 cursor-pointer border-b-4 border-[var(--dark)] hover:border-[var(--primary-1)]'>Skills</Link>
        <div className='flex justify-cent ease-in duration-300 ml-4'>
          <Link to='contact' smooth={true} offset={-50}><Button text='contact' className='text-1xl'></Button></Link>
        </div>
      </div>





      </div>

      <div className='text-white flex justify-between items-center md:hidden'>
        <h1 className='text-2xl'>Eric Boudreaux</h1>
        <TiThMenu onClick={() => setNav(!nav)} className='cursor-pointer z-30' size={30}/>
      </div>
      <div className={nav ? '  md:hidden h-screen fixed w-full top-0 left-0 z-30 ease-in duration-200 bg-black' : ' md:hidden h-screen fixed w-full left-[-100%] top-0 z-30 ease-in duration-200 bg-black'}>
      <FaWindowClose onClick={() => setNav(!nav)} className='absolute top-8 right-12 text-white cursor-pointer z-50' size={30}/>
      <div className='flex justify-center'>
        <img src="https://s3-alpha-sig.figma.com/img/680e/9400/992f20259bc56860db1b028f52eb3d33?Expires=1675641600&Signature=LbBUjsySA7~-shYaZJn967b~zWffDFzuDUi~BpiG4wGLCPXXbqPE5a-JJNCqZ0MmDzMMsU-SZVjpAaea3Y6vcxPZrS63dQWSAuUAdwUxV6WBOvNUZe2t4BZ0zo0ReXTzhKk20sT5FJEKDNZlUs6PDqS9uwLIunfvqf7jv59qfwZ-NCd4Z5wfZgLJDdxDXaZ--KkOCkBPU0x9FdMbPmjdQf9OGUkdVaxZhvloOLfZf1M3IpRjm17GSgAwvCrIupAMegSGHtc9uxAaYiSOg2~JZby4atWtZ-05ShUwr0hiXMX-FKxgI6u-ZwfeMEzO5MmWvKbLe8H59D~gikazPWoCBQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="/me waving" className='w-[20%] h-[20%] my-auto'/>

          <div className='text-white flex flex-col pt-32 text-center'>

            <Link onClick={() => setNav(!nav)} className='my-4 text-5xl hover:scale-105 hover:text-[var(--primary-1)] ease-in duration-200 cursor-pointer rotate-6 hover:rotate-0'>Home</Link>
            <Link onClick={() => setNav(!nav)} to='about' smooth={true} offset={-20} className='my-4 text-5xl hover:scale-105 hover:text-[var(--primary-1)] ease-in duration-200 cursor-pointer rotate-6 hover:rotate-0'>About</Link>
            <Link onClick={() => setNav(!nav)} to='work' smooth={true} offset={-20} className='my-4 text-5xl hover:scale-105 hover:text-[var(--primary-1)] ease-in duration-200 cursor-pointer rotate-6 hover:rotate-0'>Work</Link>
            <Link onClick={() => setNav(!nav)} to='skills' smooth={true} offset={10} className='my-4 text-5xl hover:scale-105 hover:text-[var(--primary-1)] ease-in duration-200 cursor-pointer rotate-6 hover:rotate-0'>Skills</Link>
          </div>
          </div>

          <div className='flex justify-center mt-6  rotate-6 hover:rotate-0 ease-in duration-300'>
            <Link onClick={() => setNav(!nav)} to='contact' smooth={true} offset={-20}>
            <Button text='contact'  className='text-2xl'></Button>
            </Link>
          </div>
      </div>
    </div>
  )
}

export default Navbar