import Link from 'next/link'
import React from 'react'

type Input = {
    name: string,
    index: number,
    stat: string,
    unit:string
}

const IndividualCard = ({ name, index, stat , unit }: Input) => {
    const cardClasses =
        index === 0
            ? 'flex lg:max-w-[40vw] hover:scale-99 cursor-pointer w-[90vw] lg:w-[60vw] justify-between rounded-xl border-4 border-neutral-950 bg-yellow-400 px-4 py-2 shadow-[1px_3px_0_0_#111827] sm:px-6'
            : index === 1
                ? 'flex lg:max-w-[40vw] hover:scale-99 cursor-pointer w-[88vw] lg:w-[60vw] justify-between rounded-xl border-4 border-neutral-950 bg-[#B0B0B0] px-4 py-2 shadow-[1px_3px_0_0_#111827] sm:px-6'
                : index === 2
                    ? 'flex lg:max-w-[40vw] hover:scale-99 cursor-pointer w-[86vw] lg:w-[60vw] justify-between rounded-xl border-4 border-neutral-950 bg-[#B87333] px-4 py-2 shadow-[1px_3px_0_0_#111827] sm:px-6'
                    : 'flex lg:max-w-[40vw] hover:scale-99 cursor-pointer w-[85vw] lg:w-[60vw] justify-between rounded-xl border-4 border-neutral-950 bg-white px-4 py-2 shadow-[1px_3px_0_0_#111827] sm:px-6'

    return (
        <div>
            <div className={cardClasses}>
                <div className="flex items-center gap-3">
                    <div className="lg:w-[30vw] flex flex-row justify-between">
                        <div className="text-md w-[75vw] flex flex-row justify-between font-semibold text-neutral-950">
                            <div className="left flex flex-row gap-5">
                                <span>{index + 1}</span>
                                <span>{name}</span>
                            </div>
                            <span>{stat} {unit}</span>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IndividualCard
