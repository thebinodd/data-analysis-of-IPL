"use client"
import Heading from '@/app/components/Heading'
import ListCard from '@/app/components/NameofStats'
import Navbar from '@/app/components/Navbar'
import StatListing from '@/app/components/Listofgenre'
import Link from 'next/link'
import React from 'react'
import { useState, useEffect } from 'react'
import IndividualCard from './IndividualCard'

const Stats = ({ data, unit }: any) => {

    console.log(data)



    return (
        <div className='flex flex-col justify-center items-center'>

            <Navbar isHome={false} heading={`Most ${unit} by Individual Batsman`} />
            {
                data.detail == "Not Found" ?
                    <div className='h-[80vh] flex flex-col gap-6 justify-center items-center'>
                        <h1>Oops! Looks Like You Lost the Way.</h1>
                        <Link className="rounded-lg border-2 border-neutral-950 bg-yellow-300 px-10 py-2 text-sm font-semibold shadow-[3px_3px_0_0_#111827] transition hover:translate-x-px hover:translate-y-px hover:shadow-none" href="/" >
                            Way to Home
                        </Link>
                    </div>



                    : <div className="batsmans flex flex-col w-[90vw] justify-center items-center lg:w-[60vw]">
                        <Heading title={`Most ${unit} by Individual Batsman`} />

                        
                    </div>
            }



        </div>
    )
}

export default Stats
