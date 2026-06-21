"use client"
import Heading from '@/app/components/Heading'
import ListCard from '@/app/components/ListCard'
import Navbar from '@/app/components/Navbar'
import StatListing from '@/app/components/StatsListing'
import React from 'react'
import { useState, useEffect } from 'react'


const page = () => {

  const [data, setdata] = useState<Record<string, number>>({})

  const getData = async() =>{
    const resp = await fetch("http://127.0.0.1:8000/mostsixes")
    const res = await resp.json()
    console.log(res)
    setdata(res)
  }

  useEffect(() => {
    
  getData()
    
  }, [])
  

  return (
    <div className='w-[99vw] flex flex-col justify-center items-center'>

        <Navbar isHome={false} heading="Most Runs by Individual Players" />


        <div className="batsmans flex flex-col w-[90vw] justify-center items-center lg:w-[60vw]">
          <Heading  title="Most Sixes by Individual Batsman" />
          {Object.entries(data).map(([player, runs]) => (
        <div key={player} className=' mt-5 '>
          <StatListing title={`${player} - ${runs} Sixes`} url='' />
        </div>
      ))}
        </div>

        
      
    </div>
  )
}

export default page
