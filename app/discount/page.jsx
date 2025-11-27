"use client"

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Evaluation from '@/components/Evaluation'
import Mistake from '@/components/Mistake'
import Trust from '@/components/Trust'
import Perfect from '@/components/Perfect'
import Journey from '@/components/Journey'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'



import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Discount() {

  const steps = [
    {
      title: "Register for Free Access",
      description:
        "We’ve made it easier for traders to join our evaluation programs without high entry fees.",

    },
    {
      title: "Trade Under Simulated Conditions",
      description:
        "Get access to the same trading conditions, targets, and fair rules — now at 60% off the regular price.",

    },
    {
      title: "Qualify for Funding",
      description:
        "This is your chance to showcase your skills at the most affordable entry level on the market.",
    },
  ];


  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <main className="bg-brand-deep text-white">
      <div className="relative bg-[#000000] overflow-hidden">
        <div
          className="absolute -z-1 top-0 left-0  w-[848px] h-[1084px] bg-[url('/assets/img/left-top.png')] bg-no-repeat bg-contain"
          aria-hidden="true"
        />
        <div
          className="absolute -z-1 left-[80%] top-0 right-0  w-[100%] h-[1177px] bg-[url('/assets/img/right-top.png')] bg-no-repeat bg-contain"
          aria-hidden="true"
        />
        <div
          className="absolute -z-1 bottom-0 left-0 w-full h-[550px] bg-[url('/assets/img/bottom.png')] bg-no-repeat bg-cover"
          aria-hidden="true"
        />
        <Header />
        <section className="hero-sheen relative isolate overflow-hidden pt-24 sm:pt-32 md:pt-[220px] pb-10">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 pb-24 lg:grid-cols-2 lg:px-0">
            <div className="space-y-8">
              <div className="space-y-6 text-center lg:text-left">
                <h1 className="font-inter text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                  Start Your Trader Evaluation - <span className="text-brand-orange">Now 60% Off</span>
                </h1>

                <p className="font-inter text-white/80 text-[16px] sm:text-[18px] mx-auto lg:mx-0 max-w-md lg:max-w-full">
                  Join our two-phase evaluation program and demonstrate your trading discipline.
                </p>
              </div>
            </div>

            <div className="relative flex flex-col items-center justify-center mt-10 lg:mt-0">
              <div
                className="absolute -z-10 top-1/2 left-1/2 w-[400px] sm:w-[500px] md:w-[600px] lg:w-[700px] h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] -translate-x-1/2 -translate-y-1/2 bg-[url('/assets/img/rays.png')] bg-no-repeat bg-center bg-contain pointer-events-none"
              ></div>

              <div className="relative rounded-[32px] border-2 border-[#B2B2B230] p-6 sm:p-8 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto ml-0 md:ml-10">
                <div className="space-y-4 text-center">
                  <p className="font-inter font-semibold text-[20px] sm:text-[22px] leading-[24px] sm:leading-[26px] text-white">
                    Enter your email to receive your exclusive 60% discount link.
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
                      Get 60% Discount Link
                    </button>
                  </form>

                  <p className="text-xs text-white/60">
                    Offer valid this week · Limited discounted spots available
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="pb-24">
          <div className="max-w-6xl mx-auto px-4 lg:px-0">
            <h2
              className="text-[38px] font-semibold leading-tight text-center font-inter text-white mb-8 max-w-2xl mx-auto"
              data-aos="fade-up"
            >
              Same Evaluation, Lower Cost
            </h2>
            <div className="grid gap-16 lg:grid-cols-12 items-start">
              <div className="lg:col-span-6 space-y-10 text-white mt-16">
                <div className="space-y-4">
                  {steps.map((step, index) => (
                    <div
                      key={step.title}
                      className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
                      data-aos="fade-right"
                      data-aos-delay={index * 150}
                    >
                      <div>
                        {/* <p className="text-lg font-semibold font-inter">{step.title}</p> */}
                        <p className="mt-2 font-inter text-white/80 text-[18px]">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                  <p
                    className="text-sm font-inter text-[16px] text-white/70 flex items-start gap-2 pl-[10px]"
                    data-aos="fade-up"
                  >
                  </p>
                </div>
              </div>
              <div
                className="lg:col-span-5 relative mt-10 lg:mt-0"
                data-aos="zoom-in"
              >
                <div
                  className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-brand-green/20 blur-3xl"
                  aria-hidden="true"
                />
                <Image
                  src="/assets/img/trader.png"
                  width={100}
                  height={100}
                  alt="Trader validating a strategy"
                  className="relative rounded-[40px] mt-4 border border-white/10 shadow-card h-[530px] w-full object-cover sm:h-[450px] md:h-[500px] lg:h-[530px]"
                />
              </div>
            </div>
          </div>
        </section>
        <Mistake />
      </div>
      <Trust />
      <div className="relative bg-[#000000] overflow-hidden">
        <div
          className="absolute top-0 left-0 w-full h-[220px] bg-[url('/assets/img/top.png')] bg-no-repeat bg-cover scale-y-[-1]"
          aria-hidden="true"
        />
        <Perfect />
      </div>
      <Journey />
      <CTA />
      <Footer />
    </main>
  )
}

