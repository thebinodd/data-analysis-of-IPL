import React from 'react'
import Navbar from '../components/Navbar'
import ListCard from '../components/NameofStats'
import Heading from '../components/Heading'
import HeadingSmall from '../components/HeadingSmall'

const page = () => {
    return (
        <div className=' flex flex-col  justify-center items-center '>

            <Navbar heading='Numeric Stats of IPL' isHome={false} />

            <div className="mainStats  flex flex-row justify-center gap-4   items-start  lg:w-[60vw] mt-10">

                <div className="batting w-[40vw] flex flex-col justify-center gap-4  items-center">
                    <HeadingSmall title="Batting" />
                    <ListCard title="Most Runs" url="/numeric/mostRuns" />
                    <ListCard title="Highest Scores" url="/numeric/most_runs" />
                    <ListCard title="Best Batting Average" url="/numeric/most_runs" />
                    <ListCard title="Best Batting Strike Rate" url="/numeric/most_runs" />
                    <ListCard title="Most Hundreds" url="/numeric/most_runs" />
                    <ListCard title="Most Fifties" url="/numeric/most_runs" />
                    <ListCard title="Most Fours" url="/numeric/most_runs" />
                    <ListCard title="Most Fours" url="/numeric/most_runs" />
                    <ListCard title="Most Sixes" url="/numeric/most_runs" />
                    <ListCard title="Most Nineties" url="/numeric/most_runs" />
                </div>
                <div className="bowling flex w-[40vw] flex-col justify-center gap-4  items-center">
                    <HeadingSmall title="Bowling" />
                    <ListCard title="Most Wickets" url="/numeric/most_runs" />
                    <ListCard title="Best Bowling Average" url="/numeric/most_runs" />
                    <ListCard title="Best Bowling" url="/numeric/most_runs" />
                    <ListCard title="Most 5 Wickets Haul" url="/numeric/most_runs" />
                    <ListCard title="Best Economy" url="/numeric/most_runs" />
                    <ListCard title="Best Bowling Strike Rates" url="/numeric/most_runs" />
                </div>




            </div>

        </div>
    )
}

export default page