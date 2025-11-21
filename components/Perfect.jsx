"use client";

import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import STRATEGY_IMAGE from "../public/assets/img/STRATEGY_IMAGE.png";

const reasons = [
  "You’ve been trading demo accounts and want to test your consistency.",
  "You want to experience our evaluation process before committing.",
  "You prefer starting risk-free while building trust and confidence.",
];

export default function Perfect() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="text-white py-24 z-10 relative">
      <h2
        className="text-[38px] font-semibold leading-tight text-center font-inter text-white mb-12 max-w-xl mx-auto"
        data-aos="fade-up"
      >
        Perfect for Traders Who Want to Validate Their Strategy
      </h2>

      <div className="mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-12 lg:px-0 items-start">
        <div
          className="lg:col-span-6 flex flex-col justify-center space-y-6 mt-8"
          data-aos="fade-right"
        >
          <ul className="space-y-4 text-base text-white/80">
            {reasons.map((reason, index) => (
              <li
                key={reason}
                className="flex gap-3 items-start"
                data-aos="fade-right"
                data-aos-delay={index * 150}
              >
                <span className="text-brand-orange">•</span>
                <span className="mt-1 font-inter text-white/80 text-[18px]">{reason}</span>
              </li>
            ))}
          </ul>
        </div>

        <div
          className="lg:col-span-5 relative flex items-start justify-center mt-10 lg:mt-0"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <div
            className="absolute inset-0 rounded-[40px] bg-brand-orange/10 blur-3xl"
            aria-hidden="true"
          />
          <Image
            src={STRATEGY_IMAGE}
            alt="Traders collaborating"
            className="relative rounded-[40px] border border-white/10 shadow-card w-full h-[400px] sm:h-[350px] md:h-[420px] lg:h-[500px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
