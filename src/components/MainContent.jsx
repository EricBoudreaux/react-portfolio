import React from 'react'
import About from './About'
import Contact from './Contact'
import Hero from './Hero'

import Navbar from './Navbar'
import Skills from './Skills'
import Work from './Work'

const MainContent = () => {
  return (
    <div className='mt-[-30px] lg:border-r-4 mr-4 h-[100.001%]'>
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Skills />
      <Contact />
    </div>
  )
}

export default MainContent