import Link from "next/link";
import Script from "next/script";

export default function Hero() {
  return (


    <section className="hero-sheen relative isolate overflow-hidden pt-24 sm:pt-32 md:pt-[220px] pb-10">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 pb-24 lg:grid-cols-2 lg:px-0">
        <div className="space-y-8">
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="font-inter text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
              Trade <span className="text-brand-orange">Risk-Free.</span>
              <br />
              Prove Your Skills.
            </h1>
            <p className="font-inter text-white/80 text-[16px] sm:text-[18px] mx-auto lg:mx-0 max-w-md lg:max-w-full">
              Made a mistake later during your challenge? Don’t worry — with Prop-Star, you can continue by paying a
              small penalty instead of starting over.
            </p>
          </div>
        </div>

        <div className="relative flex flex-col items-center justify-center mt-10 lg:mt-0">
          <div
            className="absolute -z-10 top-1/2 left-1/2 w-[400px] sm:w-[500px] md:w-[600px] lg:w-[700px] h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] -translate-x-1/2 -translate-y-1/2 bg-[url('/assets/img/rays.png')] bg-no-repeat bg-center bg-contain pointer-events-none"
          />
          <div className="relative rounded-[32px] border-2 border-[#B2B2B230] p-6 sm:p-8 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto ml-0 md:ml-10">
            <div className="space-y-4 text-center">
              <p className="font-inter font-semibold text-[20px] sm:text-[22px] leading-[24px] sm:leading-[26px] text-white">
                Limited Spots.<br />Get Instant Access.
              </p>

              <form
                action="/api/subscribe"
                method="POST"
                className="flex flex-col items-center gap-4"
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  required
                  className="rounded-xl border border-[#FF6B00] bg-white/5 px-6 py-3 text-white/70 outline-none w-full sm:w-[296px] text-center"
                />

                <button
                  type="submit"
                  className="block rounded-full flex justify-center mx-auto bg-brand-orange px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-glow w-[240px] sm:w-auto"
                >
                  Start My Free Trial
                </button>
              </form>



              <p className="text-xs text-white/60">
                No credit card required · Limited trial spots available
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>



  );
}