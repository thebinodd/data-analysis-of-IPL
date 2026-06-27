import React from 'react'
import Navbar from '../components/Navbar'
import { BsEmojiFrownFill } from "react-icons/bs";


const page = () => {
  return (
    <div className="main w-screen flex flex-col justify-center items-center">
      <Navbar isHome={false} />
      <div className=' flex h-[30vh]  flex-col mt-10 gap-5 justify-center item-center'>

        <BsEmojiFrownFill size={80} />

        <h1 className='w-full font-bold tracking-wider '>Graphical Stats is currently unavailable.</h1>

      
    </div>
    </div>
  )
}

export default page
