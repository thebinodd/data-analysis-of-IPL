import Link from 'next/link'
import React from 'react'

type Input = {
  heading?: string,
  isHome:Boolean
}

const Navbar = ({ heading , isHome }: Input) => {
  return (
    <div>

        <header className="flex lg:max-w-[60vw] mt-10 w-[90vw] items-center justify-between rounded-xl border-4 border-neutral-950 bg-white px-4 py-3 shadow-[6px_6px_0_0_#111827] sm:px-6">
          <div className="flex items-center gap-3">
            <img src="https://static.india.com/wp-content/uploads/2020/08/IPL-Logo.jpg?impolicy=Medium_Resize&w=1200&h=800" className="h-10 rounded-xl border-slate-800 border-b-6 border-r-4" alt="IPL logo" />
            <div className="flex flex-col">
              <p className="text-xs font-extrabold uppercase tracking-[0.35em] text-neutral-600">
                Data Analysis
              </p>
              <p className="text-sm font-semibold text-neutral-950">
                {heading}
              </p>
            </div>
          </div>

          {
            isHome ? <nav className="flex items-center gap-2 md:flex">
            <Link className="rounded-lg border-2 border-neutral-950 bg-amber-300 px-4 py-2 text-sm font-semibold shadow-[3px_3px_0_0_#111827] transition hover:translate-x-px hover:translate-y-px hover:shadow-none" href="https://instagram.com/the_binodd" target="_blank">
              Developer
            </Link>
            <Link className="rounded-lg border-2 border-neutral-950 bg-slate-300 px-4 py-2 text-sm font-semibold shadow-[3px_3px_0_0_#111827] transition hover:translate-x-px hover:translate-y-px hover:shadow-none" href="https://github.com/thebinodd" target="_blank">
              Github
            </Link>
            
          </nav> : <nav className="flex items-center gap-2 md:flex">
            <Link className="rounded-lg border-2 border-neutral-950 bg-amber-300 px-4 py-2 text-sm font-semibold shadow-[3px_3px_0_0_#111827] transition hover:translate-x-px hover:translate-y-px hover:shadow-none" href="/">
              Home
            </Link>
            
            
          </nav>
          
          }
        </header>
      
    </div>
  )
}

export default Navbar
