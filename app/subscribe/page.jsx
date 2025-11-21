import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Subscribe = () => {
  return (
    <div className="relative bg-[#000000] overflow-hidden">
      <div
        className="absolute top-0 left-0  w-[848px] h-[1084px] bg-[url('../public/assets/img/left-top.png')] bg-no-repeat bg-contain"
        aria-hidden="true"
      />

      <div
        className="absolute left-[80%] top-0 right-0  w-[100%] h-[1177px] bg-[url('../public/assets/img/right-top.png')] bg-no-repeat bg-contain"
        aria-hidden="true"
      />

      <div
        className="absolute bottom-0 left-0 w-full h-[550px] bg-[url('../public/assets/img/bottom.png')] bg-no-repeat bg-cover"
        aria-hidden="true"
      />


      <Header />


      <section className="hero-sheen relative isolate overflow-hidden pt-[250px] pb-10">

        <div className="mx-auto grid max-w-6xl gap-12 px-4 pb-24 lg:grid-cols-2 lg:px-0">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="font-inter text-4xl font-bold leading-tight text-white md:text-6xl">
                🎉 You’re In!
              </h1>
              <p className="font-inter text-white/80 text-[18px] mx-auto">
                Check your inbox — we’ve just sent your secure trial login link and setup steps.
                <br />
                You can start your evaluation anytime in the next 24 hours.
              </p>


              <Link
                href="#cta"
                className="block rounded-full flex justify-center text-center bg-brand-orange px-8 py-5 text-sm font-semibold uppercase tracking-wide text-white shadow-glow w-[277px]"
              >
               Join Discord Community
              </Link>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            {/* Background rays */}
            <div
              className="absolute -z-10 top-1/2 left-1/2 
               w-[700px] h-[700px] 
               -translate-x-1/2 -translate-y-1/2
               bg-[url('/assets/img/rays.png')] 
               bg-no-repeat bg-center bg-contain pointer-events-none"
            />

            {/* Envelope image (centered) */}
            <Image
              src="/assets/img/envelope.png"
              width={250}
              height={200}
              className="relative z-10"
            />

            {/* Send image (top-left corner of envelope) */}
            <Image
              src="/assets/img/send.png"
              width={243}
              height={243}
              className="absolute z-20 -top-20 left-10"
            />
          </div>

        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Subscribe