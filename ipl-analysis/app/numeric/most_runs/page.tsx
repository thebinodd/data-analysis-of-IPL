"use client"
import Navbar from '@/app/components/Navbar'
import React from 'react'


const page = () => {

    const getData = async() =>{
        const data = await fetch("http://127.0.0.1:8000/best-bowlers")
        const res = await data.json()
        console.log(res)
    }

  return (
    <div className='w-screen flex flex-col justify-center items-center'>

        <Navbar isHome={false} heading="Most Runs by Individual Players" />

        <button onClick={getData}>See Stats</button>

        
      
    </div>
  )
}

export default page
