import Link from 'next/link'
export default function Hero() {
  return (
    <section className="hero-sheen relative isolate overflow-hidden pt-48 pb-10">

      <div className="mx-auto grid max-w-6xl gap-12 px-4 pb-24 lg:grid-cols-2 lg:px-0">
        <div className="space-y-8">
          <div className="space-y-6">
            <h1 className="font-inter text-4xl font-bold leading-tight text-white md:text-6xl">
              Trade <span className="text-brand-orange">Risk-Free.</span>
              <br />
              Prove Your Skills.
            </h1>
            <p className="font-inter text-white/80 text-[18px] mx-auto">
              Made a mistake later during your challenge? Don’t worry — with Prop-Star, you can continue by paying a
              small penalty instead of starting over.
            </p>
          </div>
        </div>
        <div className="relative flex flex-col items-center justify-center">
          <div
            className="absolute -z-10 top-1/2 left-1/2 
               w-[700px] h-[700px] 
               -translate-x-1/2 -translate-y-1/2
               bg-[url('/assets/img/rays.png')] 
               bg-no-repeat bg-center bg-contain pointer-events-none"
          />
          <div className="relative rounded-[32px] border-2 border-[#B2B2B230] p-8 w-[95%] ml-20">
            <div className="space-y-4 text-center">
              <p className="font-inter font-semibold text-[22px] leading-[26px] text-white">
                Limited Spots.<br />Get Instant Access.
              </p>

              <input
                type="email"
                placeholder="Email address"
                className="rounded-xl border border-[#FF6B00] bg-white/5 px-6 py-3 text-white/70 outline-none w-[296px] text-center"
              />

              <Link
                href="#cta"
                className="block rounded-full flex justify-center mx-auto bg-brand-orange px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-glow w-[240px]"
              >
                Start My Free Trial
              </Link>

              <p className="text-xs text-white/60">
                No credit card required · Limited trial spots available
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

