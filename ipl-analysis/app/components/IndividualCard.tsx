import Link from 'next/link'
import React from 'react'

type Input = {
    name: string,
    index: number,
    stat: string
}

const IndividualCard = ({ name, index, stat }: Input) => {
    return (
        <div>

            {
                index == 0 ? <div className="flex lg:max-w-[40vw] hover:scale-99 cursor-pointer w-[90vw] lg:w-[60vw]  justify-between rounded-xl border-4 border-neutral-950 bg-yellow-400 px-4 py-2 shadow-[1px_3px_0_0_#111827] sm:px-6">
                    <div className="flex items-center gap-3">
                        <div className="  lg:w-[30vw] flex flex-row justify-between ">
                            <div className="text-md w-[82vw] flex flex-row justify-between  font-semibold text-neutral-950">
                                <div className="left flex flex-row  gap-5">
                                    <span>{index + 1}</span>
                                    <span className=''>{name}</span>
                                </div>
                                <span>{stat}</span>
                            </div>

                        </div>
                    </div>


                </div> : index == 1 ? <div className="flex lg:max-w-[40vw] hover:scale-99 cursor-pointer w-[88vw] lg:w-[60vw]  justify-between rounded-xl border-4 border-neutral-950 bg-[#B0B0B0] px-4 py-2 shadow-[1px_3px_0_0_#111827] sm:px-6">
                    <div className="flex items-center gap-3">
                        <div className="  lg:w-[30vw] flex flex-row justify-between ">
                            <div className="text-md w-[80vw] flex flex-row justify-between  font-semibold text-neutral-950">
                                <div className="left flex flex-row  gap-5">
                                    <span>{index + 1}</span>
                                    <span className=''>{name}</span>
                                </div>
                                <span>{stat}</span>
                            </div>

                        </div>
                    </div>


                </div>

                    : index == 2 ? <div className="flex lg:max-w-[40vw] hover:scale-99 cursor-pointer w-[86vw] lg:w-[60vw]  justify-between rounded-xl border-4 border-neutral-950 bg-[#B87333] px-4 py-2 shadow-[1px_3px_0_0_#111827] sm:px-6">
                    <div className="flex items-center gap-3">
                        <div className="  lg:w-[30vw] flex flex-row justify-between ">
                            <div className="text-md w-[80vw] flex flex-row justify-between  font-semibold text-neutral-950">
                                <div className="left flex flex-row  gap-5">
                                    <span>{index + 1}</span>
                                    <span className=''>{name}</span>
                                </div>
                                <span>{stat}</span>
                            </div>

                        </div>
                    </div>


                </div>

                        : <div className="flex lg:max-w-[40vw] hover:scale-99 cursor-pointer w-[85vw] lg:w-[60vw]  justify-between rounded-xl border-4 border-neutral-950 bg-white px-4 py-2 shadow-[1px_3px_0_0_#111827] sm:px-6">
                    <div className="flex items-center gap-3">
                        <div className="  lg:w-[30vw] flex flex-row justify-between ">
                            <div className="text-md w-[75vw] flex flex-row justify-between  font-semibold text-neutral-950">
                                <div className="left flex flex-row  gap-5">
                                    <span>{index + 1}</span>
                                    <span className=''>{name}</span>
                                </div>
                                <span>{stat}</span>
                            </div>

                        </div>
                    </div>


                </div>

            }


        </div>
    )
}

export default IndividualCard
