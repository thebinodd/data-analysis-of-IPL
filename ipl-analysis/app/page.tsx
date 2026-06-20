export default function Home() {
  const stats = [
    { value: "17+", label: "Seasons" },
    { value: "10", label: "Teams" },
    { value: "100K+", label: "Records" },
  ];

  return (
    <main className="max-h-screen  bg-[#f7f4ee] text-neutral-950">
      <section className=" flex min-h-screen justify-center items-center w-screen  flex-col py-5 sm:px-8 lg:px-10">
        <header className="flex lg:max-w-[60vw] w-[90vw] items-center justify-between rounded-xl border-4 border-neutral-950 bg-white px-4 py-3 shadow-[6px_6px_0_0_#111827] sm:px-6">
          <div className="flex items-center gap-3">
            <img src="https://static.india.com/wp-content/uploads/2020/08/IPL-Logo.jpg?impolicy=Medium_Resize&w=1200&h=800" className="h-10 rounded-xl" alt="" />
            <div className="flex flex-col">
              <p className="text-xs font-extrabold uppercase tracking-[0.35em] text-neutral-600">
                Data Analysis
              </p>
              <p className="text-sm font-semibold text-neutral-950">
                Indian Premier League insights
              </p>
            </div>
          </div>

          <nav className="flex items-center gap-2 md:flex">
            <a className="rounded-lg border-2 border-neutral-950 bg-amber-300 px-4 py-2 text-sm font-semibold shadow-[3px_3px_0_0_#111827] transition hover:translate-x-px hover:translate-y-px hover:shadow-none" href="https://instagram.com/the_binodd" target="_blank">
              Developer
            </a>
            <a className="rounded-lg border-2 border-neutral-950 bg-slate-300 px-4 py-2 text-sm font-semibold shadow-[3px_3px_0_0_#111827] transition hover:translate-x-px hover:translate-y-px hover:shadow-none" href="https://github.com/thebinodd" target="_blank">
              Github
            </a>
            
          </nav>
        </header>

        <main className="flex flex-1 max-w-[60vw]  w-[90vw] items-center justify-center py-10 sm:py-14">
          <div className="grid  items-center  gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <section className="rounded-4xl h-[65vh] w-[90vw] flex flex-col justify-center items-start lg:w-[60vw] gap-5 lg:gap-1 border-4 border-neutral-950 bg-white p-7 shadow-[10px_10px_0_0_#111827] sm:p-10">
              <p className="inline-flex rounded-full border-2 border-neutral-950 bg-lime-300 px-4 py-2 text-xs font-bold uppercase ">
                Data from 2008-2026 IPL Seasons
              </p>

              <h1 className="mt-6 max-w-2xl lg:max-w-4xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                A clean starting point for IPL data exploration.
              </h1>

              <p className="mt-5 max-w-2xl lg:max-w-4xl text-base leading-7 text-neutral-700 sm:text-lg">
                Presenting season trends, team performance,
                player impact, and match patterns from the Indian Premier League
                dataset in a simple, readable experience. 
              </p>

              <div className="mt-8 flex flex-row gap-3 sm:flex-row">
                <a
                  id="numeric"
                  href="/numeric"
                  className="inline-flex items-center justify-center rounded-xl border-2 border-neutral-950 bg-white px-6 py-4 text-sm font-semibold shadow-[6px_6px_0_0_#111827] transition hover:translate-x-px hover:translate-y-px hover:shadow-none"
                >
                  Numeric Stats
                </a>
                <a
                  id="graphical"
                  href="/graphical"
                  className="inline-flex items-center justify-center rounded-xl border-2 border-neutral-950 bg-white px-6 py-4 text-sm font-semibold shadow-[6px_6px_0_0_#111827] transition hover:translate-x-px hover:translate-y-px hover:shadow-none"
                >
                  Graphical Stats
                </a>
              </div>
            </section>

            
          </div>
        </main>
        <footer className="flex lg:max-w-[60vw] w-[90vw] items-center justify-between rounded-xl border-4 border-neutral-950 bg-white px-4 py-3 shadow-[6px_6px_0_0_#111827] sm:px-6">
          
          <p className="text-sm font-semibold w-full text-center text-neutral-950">
            Made with ❤️ by Binod 
          </p>

          
        </footer>
      </section>
      
    </main>
    
  );
}
