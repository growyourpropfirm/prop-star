"use client"

import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const steps = [
  {
    title: "Register for Free Access",
    description:
      "Sign up with your email to receive your trial account details instantly.",
    icon: (
      <svg
        width="88"
        height="88"
        viewBox="0 0 88 88"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M71.5011 54.725C71.2261 53.35 70.4011 52.525 69.0261 52.25C68.4761 52.25 55.2761 50.875 47.5761 58.575C47.3011 58.85 47.0261 59.125 46.7511 59.4V49.225C57.4761 47.85 66.0011 38.5 66.0011 27.5C66.0011 15.4 56.1011 5.5 44.0011 5.5C31.9011 5.5 22.0012 15.4 22.0012 27.5C22.0012 38.775 30.5261 47.85 41.2511 49.225V59.4C40.9761 59.125 40.7011 58.85 40.4261 58.575C32.7261 50.875 19.5262 52.25 18.9762 52.25C17.6012 52.525 16.7762 53.35 16.5012 54.725C16.5012 55.275 15.1262 68.475 22.8262 76.175C28.3261 81.675 37.1261 82.5 41.5261 82.5C42.6261 82.5 43.7261 82.5 44.0011 82.5C44.5511 82.5 45.3761 82.5 46.4761 82.5C50.8761 82.5 59.4011 81.675 65.1761 76.175C72.8761 68.475 71.5011 55.275 71.5011 54.725ZM38.5011 35.75C38.5011 34.1 39.6011 33 41.2511 33H45.3761C46.2011 33 46.7511 32.45 46.7511 31.625C46.7511 30.8 46.2011 30.25 45.3761 30.25H42.6261C38.7761 30.25 35.7511 27.225 35.7511 23.375C35.7511 20.075 38.2261 17.325 41.2511 16.775V16.5C41.2511 14.85 42.3511 13.75 44.0011 13.75C45.6511 13.75 46.7511 14.85 46.7511 16.5C48.4011 16.5 49.5011 17.6 49.5011 19.25C49.5011 20.9 48.4011 22 46.7511 22H42.6261C41.8011 22 41.2511 22.55 41.2511 23.375C41.2511 24.2 41.8011 24.75 42.6261 24.75H45.3761C49.2261 24.75 52.2511 27.775 52.2511 31.625C52.2511 34.925 49.7761 37.675 46.7511 38.225V38.5C46.7511 40.15 45.6511 41.25 44.0011 41.25C42.3511 41.25 41.2511 40.15 41.2511 38.5C39.6011 38.5 38.5011 37.4 38.5011 35.75Z"
          fill="url(#paint0_linear_0_270)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_0_270"
            x1="46.569"
            y1="82.5"
            x2="99.8398"
            y2="56.5012"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#00C76E" stopOpacity="0.5" />
            <stop offset="0.756838" stopColor="#00C76E" />
            <stop offset="1" stopColor="#00C76E" stopOpacity="0.5" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    title: "Trade Under Simulated Conditions",
    description:
      "Use a demo environment with real market data to test your strategy.",
    icon: (
      <svg
        width="88"
        height="88"
        viewBox="0 0 88 88"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M45.375 38.5H42.625C41.8 38.5 41.25 37.95 41.25 37.125C41.25 36.3 41.8 35.75 42.625 35.75H46.75C48.4 35.75 49.5 34.65 49.5 33C49.5 31.35 48.4 30.25 46.75 30.25C46.75 28.6 45.65 27.5 44 27.5C42.35 27.5 41.25 28.6 41.25 30.25V30.525C38.225 31.075 35.75 33.825 35.75 37.125C35.75 40.975 38.775 44 42.625 44H45.375C46.2 44 46.75 44.55 46.75 45.375C46.75 46.2 46.2 46.75 45.375 46.75H41.25C39.6 46.75 38.5 47.85 38.5 49.5C38.5 51.15 39.6 52.25 41.25 52.25C41.25 53.9 42.35 55 44 55C45.65 55 46.75 53.9 46.75 52.25V51.975C49.775 51.425 52.25 48.675 52.25 45.375C52.25 41.525 49.225 38.5 45.375 38.5Z"
          fill="url(#paint0_linear_0_277)"
        />
        <path
          d="M74.525 15.95C61.05 14.3 50.325 10.45 45.925 6.325C44.825 5.225 43.175 5.225 42.075 6.325C37.675 10.45 26.95 14.3 13.475 15.95C12.1 16.225 11 17.325 11 18.7V35.75C11 48.4 16.5 60.5 26.4 68.475L42.35 81.675C42.9 82.225 43.45 82.225 44 82.225C44.55 82.225 45.375 81.95 45.65 81.675L61.6 68.475C71.5 60.5 77 48.4 77 35.75V18.7C77 17.325 75.9 16.225 74.525 15.95ZM44 63.25C31.9 63.25 22 53.35 22 41.25C22 29.15 31.9 19.25 44 19.25C56.1 19.25 66 29.15 66 41.25C66 53.35 56.1 63.25 44 63.25Z"
          fill="url(#paint1_linear_0_277)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_0_277"
            x1="44.7678"
            y1="55"
            x2="61.6665"
            y2="48.0961"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#00C76E" stopOpacity="0.5" />
            <stop offset="0.756838" stopColor="#00C76E" />
            <stop offset="1" stopColor="#00C76E" stopOpacity="0.5" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_0_277"
            x1="47.0709"
            y1="82.225"
            x2="105.8"
            y2="47.8255"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#00C76E" stopOpacity="0.5" />
            <stop offset="0.756838" stopColor="#00C76E" />
            <stop offset="1" stopColor="#00C76E" stopOpacity="0.5" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    title: "Qualify for Funding",
    description:
      "Meet the performance targets — and get invited to our funded program.",
    icon: (
      <svg
        width="88"
        height="88"
        viewBox="0 0 88 88"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M56.375 41.25C63.2096 41.25 68.75 35.7096 68.75 28.875C68.75 22.0405 63.2096 16.5 56.375 16.5C49.5404 16.5 44 22.0405 44 28.875C44 35.7096 49.5404 41.25 56.375 41.25Z"
          fill="url(#paint0_linear_0_284)"
        />
        <path
          d="M82.2255 45.375C81.6755 44.55 80.8505 44 79.7505 44C73.7005 44 67.9255 46.75 64.3505 51.7L61.8755 55C58.8505 58.575 54.1755 60.5 49.5005 60.5H41.2505C39.6005 60.5 38.5005 59.4 38.5005 57.75C38.5005 56.1 39.6005 55 41.2505 55H46.4755C50.8755 55 55.0005 51.425 55.0005 47.025V46.75C55.0005 45.375 53.6255 44 52.2505 44H35.4755C25.5755 44 17.6005 48.4 13.2005 55.55L5.77554 67.1C5.22554 67.925 5.22554 69.025 5.77554 69.85L14.0255 83.6C14.3005 84.15 15.1255 84.7 15.6755 84.975C15.9505 84.975 15.9505 84.975 16.2255 84.975C16.7755 84.975 17.3255 84.7 17.8755 84.425C28.3255 77.55 40.4255 73.975 52.8005 73.975C61.8755 73.975 70.1255 69.025 74.5255 61.05L81.9505 47.85C82.5005 47.3 82.5005 46.2 82.2255 45.375Z"
          fill="url(#paint1_linear_0_284)"
        />
        <path
          d="M38.5 28.875C38.5 22 42.625 15.95 48.4 12.925C46.475 8.525 42.075 5.5 37.125 5.5C30.25 5.5 24.75 11 24.75 17.875C24.75 24.75 30.25 30.25 37.125 30.25C37.675 30.25 37.95 30.25 38.5 29.975C38.5 29.7 38.5 29.425 38.5 28.875Z"
          fill="url(#paint2_linear_0_284)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_0_284"
            x1="57.5267"
            y1="41.25"
            x2="77.7359"
            y2="27.4892"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#00C76E" stopOpacity="0.5" />
            <stop offset="0.756838" stopColor="#00C76E" />
            <stop offset="1" stopColor="#00C76E" stopOpacity="0.5" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_0_284"
            x1="47.4691"
            y1="84.975"
            x2="82.3581"
            y2="40.3073"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#00C76E" stopOpacity="0.5" />
            <stop offset="0.756838" stopColor="#00C76E" />
            <stop offset="1" stopColor="#00C76E" stopOpacity="0.5" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_0_284"
            x1="37.6753"
            y1="30.25"
            x2="57.5333"
            y2="17.3295"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#00C76E" stopOpacity="0.5" />
            <stop offset="0.756838" stopColor="#00C76E" />
            <stop offset="1" stopColor="#00C76E" stopOpacity="0.5" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
];

export default function Evaluation() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section id="how-it-works" className="pb-24">
      <div className="max-w-6xl mx-auto px-4 lg:px-0">
        <h2
          className="text-[38px] font-semibold leading-tight text-center font-inter text-white mb-8 max-w-2xl mx-auto"
          data-aos="fade-up"
        >
          How the Trial Evaluation Works
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
                  <div className="rounded-2xl p-2 flex-shrink-0">{step.icon}</div>
                  <div>
                    <p className="text-lg font-semibold font-inter">{step.title}</p>
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
                <span className="font-inter inline-flex h-4 w-4 items-center justify-center rounded border border-green-500 bg-green-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                    stroke="white"
                    strokeWidth="3"
                    className="h-3 w-3"
                  >
                    <path d="M6 10l3 3 6-6" />
                  </svg>
                </span>
                All evaluations take place in a demo environment using virtual funds.
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
  );
}