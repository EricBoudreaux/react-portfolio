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
        <img src='https://s3-alpha-sig.figma.com/img/a26f/9ddb/58b76f16cbaa72ad867dcf6832027a5c?Expires=1676246400&Signature=er1m1Li3vPsSvMs1MCSqfUcYIq~hTi8ojxTiXO-L358FQvmCLvZGSkHA0PNszx~Oh65NnHIQ0uSFMaiuHHzBw5FhusjIo7eIstmDRPje9~I0P9sGDXp8JzwoV0doN21-gRwOetGKLQgeL1c~BUpREsnE4L51sjqAkIMxyL8ao~U2m4kCg3Br4J8iVj66AcKZ391NkC0zT15d8oxLZbsIqqMVNUZOKnntZYUKjCYyE5LLiKWK-kiMraSeoGKxGo99XpIRbO5j9HplwkhZfKYAdbi3SlZtPlT3kej3p1HSO~rqAzTu7Uu5Qgf3Ws4zRyEtJnzN3zJDWLz1n3NK8ksjVA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' alt="my cartoon head" className='w-[50%] mx-auto mt-[100px]' />
        <img src="https://s3-alpha-sig.figma.com/img/06bc/b663/12630cb054b5678eafbfa9a79719c775?Expires=1676246400&Signature=Ew4SJ5gjfL3t9d3T17su7Dl80cAKyxU-C6UAjS1-RCVBckhxoTORdc0EUEQRZMDogOumJgkwZSQWvn~E4lIBfc2SamBmGW6tsg~xu2zfjt5SJtMj-2smQCpehJG7sFWsy0WQLETtwK-fIhv7fSEzj8BMWx0U5VJhrTDgB-a~8pbZpK~Je-KYC2BAFHgs9OBFLZD-MNQLwAdYG2pCwJup6yXyPTI7f16zu7bm3evWS6nHDDYoo9B5cCoYTTNLpWxn9kAikm92i0kWZn-GdglRyWckTSqmxvGlV2ftZqXOSkWh86wcAWzYr3KBGx59DiZ98TwxCICO0~0jFxDHPHP4Tg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" className='w-[50%] mx-auto mt-[1600px]' alt="" />
    </div>  
  )
}

export default SideBar