import React, { useState, useEffect} from 'react'
import ButtonInvert from './ButtonInvert'


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
    <div name='about' className='bg-[var(--primary-1)] w-[90%] mx-auto mt-40 lg:mt-[-80px] pt-12 lg:p-20 xl:p-24 lg:ml-[-60px]'>
        <h1 className='text-center text-[40px]'>All about me</h1>
        <p className='mt-12 px-12 mx-auto text-[12px] sm:text-[16px]'>When I was a kid I was introduced to computers via 
        my grandmother's Windows 3.0 machine. Little did I 
        know then that experience would blossom into life
        long love for technology. After that, I was never 
        without some type of pc or mac in my immediate 
        vicinity. I still feel that same amazement when I 
        open my Macbook Pro twenty-five years later. Since 
        the times of that starry eyed kid, I've discovered 
        a deep devotion to creativity. That's where web 
        developer comes in. It is the perfect blend of 
        structured creativity I've always striven to achieve. </p>
<p className='text-white mt-5 font-bold px-12'>The art of creating is a beautiful thing to me.</p>
<div className='mt-12 lg:mt-0 flex flex-row items-center justify-center gap-12'>
    <img src="https://s3-alpha-sig.figma.com/img/a26f/9ddb/58b76f16cbaa72ad867dcf6832027a5c?Expires=1676246400&Signature=er1m1Li3vPsSvMs1MCSqfUcYIq~hTi8ojxTiXO-L358FQvmCLvZGSkHA0PNszx~Oh65NnHIQ0uSFMaiuHHzBw5FhusjIo7eIstmDRPje9~I0P9sGDXp8JzwoV0doN21-gRwOetGKLQgeL1c~BUpREsnE4L51sjqAkIMxyL8ao~U2m4kCg3Br4J8iVj66AcKZ391NkC0zT15d8oxLZbsIqqMVNUZOKnntZYUKjCYyE5LLiKWK-kiMraSeoGKxGo99XpIRbO5j9HplwkhZfKYAdbi3SlZtPlT3kej3p1HSO~rqAzTu7Uu5Qgf3Ws4zRyEtJnzN3zJDWLz1n3NK8ksjVA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="me standing" className='w-16 lg:hidden pb-12' />
    <div className='lg:mt-12'>
    <ButtonInvert text='contact' className=''/>
    </div>
    </div>
</div>  
  )
}

export default About