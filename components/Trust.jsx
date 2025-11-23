"use client";

import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const pillars = [
  {
    title: "No deposit or payment needed",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask
          id="mask0_105_2"
          maskType="luminance"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="32"
          height="32"
        >
          <path d="M32 0H0V32H32V0Z" fill="white" />
        </mask>

        <g mask="url(#mask0_105_2)">
          <path
            d="M0 25.3312V28C0 30.2062 5.375 32 12 32C18.625 32 24 30.2062 24 28V25.3312C21.4188 27.15 16.7 28 12 28C7.3 28 2.5812 27.15 0 25.3312ZM20 8C26.625 8 32 6.2063 32 4C32 1.7938 26.625 0 20 0C13.375 0 8 1.7938 8 4C8 6.2063 13.375 8 20 8ZM0 18.775V22C0 24.2062 5.375 26 12 26C18.625 26 24 24.2062 24 22V18.775C21.4188 20.9 16.6938 22 12 22C7.3063 22 2.5812 20.9 0 18.775ZM26 19.4625C29.5812 18.7687 32 17.4813 32 16V13.3313C30.55 14.3562 28.4188 15.0563 26 15.4875V19.4625ZM12 10C5.375 10 0 12.2375 0 15C0 17.7625 5.375 20 12 20C18.625 20 24 17.7625 24 15C24 12.2375 18.625 10 12 10ZM25.7062 13.5188C29.4562 12.8438 32 11.5188 32 10V7.3313C29.7812 8.9 25.9688 9.7438 21.9562 9.9438C23.8 10.8375 25.1562 12.0375 25.7062 13.5188Z"
            fill="url(#paint0_linear_105_2)"
          />
        </g>

        <defs>
          <linearGradient
            id="paint0_linear_105_2"
            x1="13.3333"
            y1="-13.3333"
            x2="51.8448"
            y2="15.0776"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#96EE8F" />
            <stop offset="1" stopColor="#04651F" />
          </linearGradient>
        </defs>
      </svg>


    ),
  },
  {
    title: "Fast results — usually within 7–10 trading days",
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M25.3333 0C24.7698 7.6747 22.7698 13.2302 19.3333 16.6667C18.7239 17.2761 18.0566 17.8332 17.3314 18.3381V21.3272L13.3314 25.3272L10.8905 21.0557L4.2828 14.4473L0 12L4 8H7.005C7.5052 7.2742 8.0591 6.6075 8.6667 6C12.1031 2.5636 17.6587 0.5636 25.3333 0ZM8.5206 20.6067L10.4062 22.4924L7.5778 25.3208L5.6922 23.4352L8.5206 20.6067ZM5.6922 17.7783L7.5778 19.6639L2.8638 24.378L0.9781 22.4924L5.6922 17.7783ZM2.8638 14.9499L4.7494 16.8355L1.9209 19.6639L0.0352993 17.7783L2.8638 14.9499ZM15.3333 8C14.2288 8 13.3333 8.8954 13.3333 10C13.3333 11.1046 14.2288 12 15.3333 12C16.4379 12 17.3333 11.1046 17.3333 10C17.3333 8.8954 16.4379 8 15.3333 8Z" fill="url(#paint0_linear_105_32)" />
        <defs>
          <linearGradient id="paint0_linear_105_32" x1="10.5555" y1="-10.553" x2="41.0386" y2="11.9406" gradientUnits="userSpaceOnUse">
            <stop stopColor="#96EE8F" />
            <stop offset="1" stopColor="#04651F" />
          </linearGradient>
        </defs>
      </svg>

    ),
  },
  {
    title: "Transparent evaluation rules",
    icon: (
      <svg width="23" height="29" viewBox="0 0 23 29" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.1518 28.7143H18.375C21.1473 28.7143 22.5267 27.308 22.5267 24.5223V12.3616H12.8303C11.1161 12.3616 10.3125 11.5446 10.3125 9.8303V0H4.1518C1.3929 0 0 1.4197 0 4.2054V24.5223C0 27.3214 1.3929 28.7143 4.1518 28.7143ZM12.8705 10.5268H22.3794C22.2857 9.9777 21.8973 9.4419 21.2678 8.7857L13.875 1.2723C13.2589 0.629501 12.6964 0.241101 12.1339 0.147301V9.8036C12.1339 10.2857 12.3883 10.5268 12.8705 10.5268ZM6.1071 18.1607C5.558 18.1607 5.1696 17.7723 5.1696 17.25C5.1696 16.7277 5.558 16.3393 6.1071 16.3393H16.433C16.9687 16.3393 17.3839 16.7277 17.3839 17.25C17.3839 17.7723 16.9687 18.1607 16.433 18.1607H6.1071ZM6.1071 23.2634C5.558 23.2634 5.1696 22.875 5.1696 22.3527C5.1696 21.8303 5.558 21.4419 6.1071 21.4419H16.433C16.9687 21.4419 17.3839 21.8303 17.3839 22.3527C17.3839 22.875 16.9687 23.2634 16.433 23.2634H6.1071Z" fill="url(#paint0_linear_105_34)" />
        <defs>
          <linearGradient id="paint0_linear_105_34" x1="9.3861" y1="-11.9643" x2="40.7468" y2="6.1859" gradientUnits="userSpaceOnUse">
            <stop stopColor="#96EE8F" />
            <stop offset="1" stopColor="#04651F" />
          </linearGradient>
        </defs>
      </svg>

    ),
  },
  {
    title: "No hidden conditions",
    icon: (
      <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.996 1.08504e-06C18.436 -0.00109892 20.8026 0.834203 22.7012 2.3669C24.5997 3.8995 25.9155 6.0367 26.4289 8.422C26.9424 10.8073 26.6226 13.2966 25.5228 15.4746C24.423 17.6527 22.6097 19.3878 20.3854 20.3907C19.6744 21.9626 18.5927 23.3385 17.2332 24.4006C15.8736 25.4626 14.2768 26.1791 12.5796 26.4885C10.8823 26.7979 9.13543 26.691 7.48853 26.1769C5.84173 25.6629 4.34413 24.7571 3.12423 23.5372C1.90433 22.3173 0.998532 20.8197 0.484532 19.1729C-0.0295675 17.526 -0.136467 15.7791 0.172933 14.0818C0.482333 12.3846 1.19883 10.7878 2.26083 9.4282C3.32293 8.0687 4.69883 6.987 6.27073 6.276C7.11623 4.4052 8.48353 2.818 10.2085 1.7048C11.9335 0.591603 13.943 -0.000298915 15.996 1.08504e-06ZM11.996 9.3334H9.32943V10.6667C8.46293 10.6646 7.62963 11 7.00623 11.6018C6.38273 12.2036 6.01823 13.0246 5.98973 13.8906C5.96133 14.7567 6.27123 15.5998 6.85383 16.2412C7.43643 16.8826 8.24593 17.272 9.11073 17.3267L9.32943 17.3334H11.996L12.116 17.344C12.2698 17.3719 12.4088 17.4528 12.5089 17.5727C12.6091 17.6926 12.6639 17.8438 12.6639 18C12.6639 18.1562 12.6091 18.3075 12.5089 18.4274C12.4088 18.5473 12.2698 18.6282 12.116 18.656L11.996 18.6667H6.66273V21.3334H9.32943V22.6667H11.996V21.3334C12.8626 21.3355 13.6958 21.0001 14.3193 20.3982C14.9427 19.7964 15.3073 18.9755 15.3357 18.1094C15.3641 17.2434 15.0542 16.4003 14.4716 15.7589C13.889 15.1174 13.0795 14.7281 12.2147 14.6734L11.996 14.6667H9.32943L9.20943 14.656C9.05573 14.6282 8.91663 14.5473 8.81653 14.4274C8.71633 14.3075 8.66153 14.1562 8.66153 14C8.66153 13.8438 8.71633 13.6926 8.81653 13.5727C8.91663 13.4528 9.05573 13.3719 9.20943 13.344L9.32943 13.3334H14.6627V10.6667H11.996V9.3334ZM15.996 2.6667C14.8663 2.6654 13.7491 2.9039 12.7185 3.3666C11.6878 3.8293 10.7671 4.5056 10.0174 5.3507C11.5244 5.2592 13.0337 5.4887 14.4454 6.024C15.8571 6.5592 17.1391 7.3881 18.2066 8.4557C19.2742 9.5234 20.1029 10.8055 20.638 12.2173C21.1731 13.6291 21.4024 15.1384 21.3107 16.6454C22.523 15.5675 23.379 14.1466 23.7651 12.5711C24.1513 10.9956 24.0494 9.3399 23.4729 7.8237C22.8964 6.3074 21.8726 5.0022 20.5373 4.0812C19.202 3.1602 17.6182 2.6669 15.996 2.6667Z" fill="url(#paint0_linear_105_30)" />
        <defs>
          <linearGradient id="paint0_linear_105_30" x1="11.1116" y1="-11.1089" x2="43.2004" y2="12.5696" gradientUnits="userSpaceOnUse">
            <stop stopColor="#96EE8F" />
            <stop offset="1" stopColor="#04651F" />
          </linearGradient>
        </defs>
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
            src="/assets/img/customers.png"
            width={100}
            height={100}
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
