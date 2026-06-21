import Navbar from '@/app/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <div className='w-screen flex flex-col justify-center items-center'>

        <Navbar isHome={false} heading="Most Runs by Individual Players" />

        
      
    </div>
  )
}

export default page
