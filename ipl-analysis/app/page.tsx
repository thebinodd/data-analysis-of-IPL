import Link from "next/link";
import Navbar from "./components/Navbar";


export default function Home() {
  const stats = [
    { value: "17+", label: "Seasons" },
    { value: "10", label: "Teams" },
    { value: "100K+", label: "Records" },
  ];

  return (
    <main className="max-h-screen  bg-[#f7f4ee] text-neutral-950">
      <section className=" flex min-h-screen justify-center items-center w-screen  flex-col pb-5 sm:px-8 lg:px-10">
        
        <Navbar heading="IPL Stats Insights" isHome={true} />

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
                <Link
                  id="numeric"
                  href="/numeric"
                  className="inline-flex items-center justify-center rounded-xl border-2 border-neutral-950 bg-white px-6 py-4 text-sm font-semibold shadow-[6px_6px_0_0_#111827] transition hover:translate-x-px hover:translate-y-px hover:shadow-none"
                >
                  Numeric Stats
                </Link>
                <Link
                  id="graphical"
                  href="/graphical"
                  className="inline-flex items-center justify-center rounded-xl border-2 border-neutral-950 bg-white px-6 py-4 text-sm font-semibold shadow-[6px_6px_0_0_#111827] transition hover:translate-x-px hover:translate-y-px hover:shadow-none"
                >
                  Graphical Stats
                </Link>
              </div>
            </section>

             
          </div>
        </main>
        <footer className="flex lg:max-w-[60vw] w-[90vw] items-center justify-between rounded-xl border-4 border-neutral-950 bg-white px-4 py-3 shadow-[6px_6px_0_0_#111827] sm:px-6">
          
          <p className="text-sm font-semibold w-full text-center text-neutral-950">
            Made with ❤️ by Binod & Proudly VibeCoded Frontend
          </p>

          
        </footer>
      </section>
      
    </main>
    
  );
}
