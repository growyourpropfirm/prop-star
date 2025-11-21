"use client";

import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CUSTOMERS from "../public/assets/img/customers.png";

const pillars = [
  {
    title: "No deposit or payment needed",
    icon: (
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* SVG content */}
      </svg>
    ),
  },
  {
    title: "Fast results — usually within 7–10 trading days",
    icon: (
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* SVG content */}
      </svg>
    ),
  },
  {
    title: "Transparent evaluation rules",
    icon: (
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* SVG content */}
      </svg>
    ),
  },
  {
    title: "No hidden conditions",
    icon: (
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* SVG content */}
      </svg>
    ),
  },
];

export default function Trust() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section id="trusted" className="bg-brand-light text-brand-charcoal">
      <div className="mx-auto max-w-6xl px-4 py-24 lg:px-0">
        <div className="space-y-6 text-center" data-aos="fade-up">
          <h2 className="text-[38px] font-semibold leading-tight text-center font-inter mb-4 max-w-xl mx-auto">
            <span className="text-brand-orange">Trusted</span> By Traders All Around The World
          </h2>
          <p className="text-sm text-brand-charcoal/70 font-inter">
            Trusted by <span className="font-semibold text-brand-charcoal font-inter">1400+</span>
          </p>
          <Image
            src={CUSTOMERS}
            alt="Customer avatars"
            className="mx-auto h-10 w-auto"
            data-aos="zoom-in"
            data-aos-delay="100"
          />
          <div
            className="flex flex-col items-center justify-center gap-3 pt-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <a
              href="https://www.trustpilot.com/review/prop-star.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded border border-[#00B67A] bg-white px-6 py-3 text-sm font-semibold text-brand-charcoal shadow-sm transition hover:border-brand-orange"
            >
              <span>Review us on</span>
              <span className="text-[#00B67A]">Trustpilot ★★★★★</span>
            </a>
          </div>
        </div>

        <div className="mt-16 space-y-8 text-center">
          <h3
            className="text-[38px] font-semibold leading-tight text-center font-inter mb-4 max-w-2xl mx-auto"
            data-aos="fade-up"
          >
            Designed for Serious Traders, Not Risk-Takers
          </h3>
          <p
            className="font-inter text-center text-black text-[18px] mx-auto max-w-3xl"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            This trial lets you experience our platform without any financial risk. Trade under the same transparent
            rules as our paid challenges — just without the entry cost. When you later upgrade to a full challenge,
            you’ll also benefit from our Penalty Continuation feature — one small mistake won’t erase your hard work.
          </p>

          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-8">
            {pillars.map((pillar, index) => (
              <div
                key={pillar.title}
                className="space-y-4 rounded-3xl border border-white/70 bg-white p-6 shadow-sm"
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-green/10">
                  {pillar.icon}
                </div>
                <p className="font-inter font-semibold text-center text-black text-[16px] mx-auto">
                  {pillar.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
