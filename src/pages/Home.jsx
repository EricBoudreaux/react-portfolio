import React from 'react'

import Sidebar from '../components/SideBar'
import MainContent from '../components/MainContent'
import Footer from '../components/Footer';
import Copyright from '../components/Copyright';
import ScrollUp from '../components/ScrollUp';

const Home = () => {
  return (
    <div>
      <ScrollUp />
      <div className='flex'>
        <div className='hidden lg:block'>
        <Sidebar />
        </div>
        <div className='lg:basis-4/5 mx-auto w-full'>
        <MainContent />
        </div>
      </div>
      <Footer />
      <Copyright />
    </div>
  )
}

export default Home
