import Image from "next/image"
import CUSTOMERS from "../public/assets/img/customers.png"

const pillars = [
  {
    title: 'No deposit or payment needed',
    icon: (
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_0_358)">
          <mask id="mask0_0_358" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="23" y="24" width="32" height="32">
            <path d="M55 24H23V56H55V24Z" fill="white" />
          </mask>
          <g mask="url(#mask0_0_358)">
            <path d="M23 49.3312V52C23 54.2062 28.375 56 35 56C41.625 56 47 54.2062 47 52V49.3312C44.4188 51.15 39.7 52 35 52C30.3 52 25.5812 51.15 23 49.3312ZM43 32C49.625 32 55 30.2063 55 28C55 25.7938 49.625 24 43 24C36.375 24 31 25.7938 31 28C31 30.2063 36.375 32 43 32ZM23 42.775V46C23 48.2062 28.375 50 35 50C41.625 50 47 48.2062 47 46V42.775C44.4188 44.9 39.6938 46 35 46C30.3063 46 25.5812 44.9 23 42.775ZM49 43.4625C52.5812 42.7687 55 41.4813 55 40V37.3313C53.55 38.3562 51.4188 39.0563 49 39.4875V43.4625ZM35 34C28.375 34 23 36.2375 23 39C23 41.7625 28.375 44 35 44C41.625 44 47 41.7625 47 39C47 36.2375 41.625 34 35 34ZM48.7062 37.5188C52.4562 36.8438 55 35.5188 55 34V31.3313C52.7812 32.9 48.9688 33.7438 44.9562 33.9438C46.8 34.8375 48.1562 36.0375 48.7062 37.5188Z" fill="url(#paint0_linear_0_358)" />
          </g>
          <path opacity="0.2" d="M40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40C0 62.0914 17.9086 80 40 80Z" fill="#00C76E" fillOpacity="0.5" />
        </g>
        <defs>
          <linearGradient id="paint0_linear_0_358" x1="36.3333" y1="10.6667" x2="74.8448" y2="39.0776" gradientUnits="userSpaceOnUse">
            <stop stopColor="#96EE8F" />
            <stop offset="1" stopColor="#04651F" />
          </linearGradient>
          <clipPath id="clip0_0_358">
            <rect width="80" height="80" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    title: 'Fast results — usually within 7–10 trading days',
    icon: (
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_0_363)">
          <g clipPath="url(#clip1_0_363)">
            <g clipPath="url(#clip2_0_363)">
              <path opacity="0.2" d="M40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40C0 62.0914 17.9086 80 40 80Z" fill="#00C76E" fillOpacity="0.5" />
              <path fillRule="evenodd" clipRule="evenodd" d="M51.0003 28C50.4368 35.6747 48.4368 41.2302 45.0003 44.6667C44.3909 45.2761 43.7236 45.8332 42.9984 46.3381V49.3272L38.9984 53.3272L36.5575 49.0557L29.9498 42.4473L25.667 40L29.667 36H32.672C33.1722 35.2742 33.7261 34.6075 34.3337 34C37.7701 30.5636 43.3257 28.5636 51.0003 28ZM34.1876 48.6067L36.0732 50.4924L33.2448 53.3208L31.3592 51.4352L34.1876 48.6067ZM31.3592 45.7783L33.2448 47.6639L28.5308 52.378L26.6451 50.4924L31.3592 45.7783ZM28.5308 42.9499L30.4164 44.8355L27.5879 47.6639L25.7023 45.7783L28.5308 42.9499ZM41.0003 36C39.8958 36 39.0003 36.8954 39.0003 38C39.0003 39.1046 39.8958 40 41.0003 40C42.1049 40 43.0003 39.1046 43.0003 38C43.0003 36.8954 42.1049 36 41.0003 36Z" fill="url(#paint0_linear_0_363)" />
            </g>
          </g>
        </g>
        <defs>
          <linearGradient id="paint0_linear_0_363" x1="36.2225" y1="17.447" x2="66.7056" y2="39.9406" gradientUnits="userSpaceOnUse">
            <stop stopColor="#96EE8F" />
            <stop offset="1" stopColor="#04651F" />
          </linearGradient>
          <clipPath id="clip0_0_363">
            <rect width="80" height="80" fill="white" />
          </clipPath>
          <clipPath id="clip1_0_363">
            <rect width="80" height="80" fill="white" />
          </clipPath>
          <clipPath id="clip2_0_363">
            <rect width="80" height="80" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    title: 'Transparent evaluation rules',
    icon: (
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_0_370)">
          <g clipPath="url(#clip1_0_370)">
            <g clipPath="url(#clip2_0_370)">
              <path opacity="0.2" d="M40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40C0 62.0914 17.9086 80 40 80Z" fill="#00C76E" fillOpacity="0.5" />
              <path d="M33.1518 54.7143H47.375C50.1473 54.7143 51.5267 53.308 51.5267 50.5223V38.3616H41.8303C40.1161 38.3616 39.3125 37.5446 39.3125 35.8303V26H33.1518C30.3929 26 29 27.4197 29 30.2054V50.5223C29 53.3214 30.3929 54.7143 33.1518 54.7143ZM41.8705 36.5268H51.3794C51.2857 35.9777 50.8973 35.4419 50.2678 34.7857L42.875 27.2723C42.2589 26.6295 41.6964 26.2411 41.1339 26.1473V35.8036C41.1339 36.2857 41.3883 36.5268 41.8705 36.5268ZM35.1071 44.1607C34.558 44.1607 34.1696 43.7723 34.1696 43.25C34.1696 42.7277 34.558 42.3393 35.1071 42.3393H45.433C45.9687 42.3393 46.3839 42.7277 46.3839 43.25C46.3839 43.7723 45.9687 44.1607 45.433 44.1607H35.1071ZM35.1071 49.2634C34.558 49.2634 34.1696 48.875 34.1696 48.3527C34.1696 47.8303 34.558 47.4419 35.1071 47.4419H45.433C45.9687 47.4419 46.3839 47.8303 46.3839 48.3527C46.3839 48.875 45.9687 49.2634 45.433 49.2634H35.1071Z" fill="url(#paint0_linear_0_370)" />
            </g>
          </g>
        </g>
        <defs>
          <linearGradient id="paint0_linear_0_370" x1="38.3861" y1="14.0357" x2="69.7468" y2="32.1859" gradientUnits="userSpaceOnUse">
            <stop stopColor="#96EE8F" />
            <stop offset="1" stopColor="#04651F" />
          </linearGradient>
          <clipPath id="clip0_0_370">
            <rect width="80" height="80" fill="white" />
          </clipPath>
          <clipPath id="clip1_0_370">
            <rect width="80" height="80" fill="white" />
          </clipPath>
          <clipPath id="clip2_0_370">
            <rect width="80" height="80" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    title: 'No hidden conditions',
    icon: (
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_0_376)">
          <g clipPath="url(#clip1_0_376)">
            <g clipPath="url(#clip2_0_376)">
              <path opacity="0.2" d="M40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40C0 62.0914 17.9086 80 40 80Z" fill="#00C76E" fillOpacity="0.5" />
              <mask id="mask0_0_376" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="24" y="24" width="32" height="32">
                <path d="M56 24H24V56H56V24Z" fill="white" />
              </mask>
              <g mask="url(#mask0_0_376)">
                <path d="M42.6669 26.6665C45.1069 26.6654 47.4735 27.5007 49.3721 29.0334C51.2706 30.566 52.5864 32.7032 53.0998 35.0885C53.6133 37.4738 53.2935 39.9631 52.1937 42.1411C51.0939 44.3192 49.2806 46.0543 47.0563 47.0572C46.3453 48.6291 45.2636 50.005 43.9041 51.0671C42.5445 52.1291 40.9477 52.8456 39.2505 53.155C37.5532 53.4644 35.8063 53.3575 34.1594 52.8434C32.5126 52.3294 31.015 51.4236 29.7951 50.2037C28.5752 48.9838 27.6694 47.4862 27.1554 45.8394C26.6413 44.1925 26.5344 42.4456 26.8438 40.7483C27.1532 39.0511 27.8697 37.4543 28.9317 36.0947C29.9938 34.7352 31.3697 33.6535 32.9416 32.9425C33.7871 31.0717 35.1544 29.4845 36.8794 28.3713C38.6044 27.2581 40.6139 26.6662 42.6669 26.6665ZM38.6669 35.9999H36.0003V37.3332C35.1338 37.3311 34.3005 37.6665 33.6771 38.2683C33.0536 38.8701 32.6891 39.6911 32.6606 40.5571C32.6322 41.4232 32.9421 42.2663 33.5247 42.9077C34.1073 43.5491 34.9168 43.9385 35.7816 43.9932L36.0003 43.9999H38.6669L38.7869 44.0105C38.9407 44.0384 39.0797 44.1193 39.1798 44.2392C39.28 44.3591 39.3348 44.5103 39.3348 44.6665C39.3348 44.8227 39.28 44.974 39.1798 45.0939C39.0797 45.2138 38.9407 45.2947 38.7869 45.3225L38.6669 45.3332H33.3336V47.9999H36.0003V49.3332H38.6669V47.9999C39.5335 48.002 40.3667 47.6666 40.9902 47.0647C41.6136 46.4629 41.9782 45.642 42.0066 44.7759C42.035 43.9099 41.7251 43.0668 41.1425 42.4254C40.5599 41.7839 39.7504 41.3946 38.8856 41.3399L38.6669 41.3332H36.0003L35.8803 41.3225C35.7266 41.2947 35.5875 41.2138 35.4874 41.0939C35.3872 40.974 35.3324 40.8227 35.3324 40.6665C35.3324 40.5103 35.3872 40.3591 35.4874 40.2392C35.5875 40.1193 35.7266 40.0384 35.8803 40.0105L36.0003 39.9999H41.3336V37.3332H38.6669V35.9999ZM42.6669 29.3332C41.5372 29.3319 40.42 29.5704 39.3894 30.0331C38.3587 30.4958 37.438 31.1721 36.6883 32.0172C38.1953 31.9257 39.7046 32.1552 41.1163 32.6905C42.528 33.2257 43.81 34.0546 44.8775 35.1222C45.9451 36.1899 46.7738 37.472 47.3089 38.8838C47.844 40.2956 48.0733 41.8049 47.9816 43.3119C49.1939 42.234 50.0499 40.8131 50.436 39.2376C50.8222 37.6621 50.7203 36.0064 50.1438 34.4902C49.5673 32.9739 48.5435 31.6687 47.2082 30.7477C45.8729 29.8267 44.2891 29.3334 42.6669 29.3332Z" fill="url(#paint0_linear_0_376)" />
              </g>
            </g>
          </g>
        </g>
        <defs>
          <linearGradient id="paint0_linear_0_376" x1="37.7825" y1="15.5576" x2="69.8713" y2="39.2361" gradientUnits="userSpaceOnUse">
            <stop stopColor="#96EE8F" />
            <stop offset="1" stopColor="#04651F" />
          </linearGradient>
          <clipPath id="clip0_0_376">
            <rect width="80" height="80" fill="white" />
          </clipPath>
          <clipPath id="clip1_0_376">
            <rect width="80" height="80" fill="white" />
          </clipPath>
          <clipPath id="clip2_0_376">
            <rect width="80" height="80" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
]

export default function Trust() {
  return (
    <section id="trusted" className="bg-brand-light text-brand-charcoal">
      <div className="mx-auto max-w-6xl px-4 py-24 lg:px-0">
        <div className="space-y-6 text-center">
          <h2 className="text-[38px] font-semibold leading-tight text-center font-inter mb-4 max-w-xl mx-auto">
            <span className="text-brand-orange">Trusted</span> By Traders All Around The World
          </h2>
          <p className="text-sm text-brand-charcoal/70 font-inter">
            Trusted by <span className="font-semibold text-brand-charcoal font-inter">1400+</span>
          </p>
          <Image src={CUSTOMERS} alt="Customer avatars" className="mx-auto h-10 w-auto" />
          <div className="flex flex-col items-center justify-center gap-3 pt-6">
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
          <h3 className="text-[38px] font-semibold leading-tight text-center font-inter mb-4 max-w-2xl mx-auto">Designed for Serious Traders, Not Risk-Takers</h3>
          <p className="font-inter text-center text-black text-[18px] mx-auto">
            This trial lets you experience our platform without any financial risk. Trade under the same transparent
            rules as our paid challenges — just without the entry cost. When you later upgrade to a full challenge,
            you’ll also benefit from our Penalty Continuation feature — one small mistake won’t erase your hard work.
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="space-y-4 rounded-3xl border border-white/70 bg-white p-6 shadow-sm">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-green/10">
                  {pillar.icon}
                </div>
                <p className="font-inter font-semibold text-center text-black text-[16px] mx-auto">{pillar.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
