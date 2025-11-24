import Image from 'next/image'
import Link from 'next/link'

const footerLinks = [
  { label: 'Privacy Policy', href: 'https://prop-star.ai/privacy-policy/' },
  { label: 'General Rules', href: 'https://prop-star.ai/terms-and-conditions/' },
  { label: 'Terms of Use', href: 'https://prop-star.ai/terms-of-use/' },
]

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-6xl px-4 pt-16 mb-2 lg:px-0">
        <div className="flex flex-col gap-32 text-sm text-white/70 md:flex-row md:items-center md:justify-start relative z-10000">
          <Link href="/" className="text-[0.95rem] font-semibold tracking-[0.2em] text-white">
            <Image src="/assets/img/logo.png" width={197} height={23} alt="Prop-Star Logo" />
          </Link>
          <div className="flex flex-wrap gap-6">
            {footerLinks.map((link) => (
              <Link key={link.label} href={link.href} className="transition hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-10 text-sm text-white/60 relative z-10000">
          <p className="text-[22px] font-semibold leading-tight mb-4 font-inter text-white max-w-xl">Disclaimer</p>
          <p className="mt-2 font-inter text-white/80 text-[14px] max-w-2xl leading-relaxed">
            Prop-Star provides trader evaluation programs conducted in simulated trading environments.
            <br />
            Participation does not involve real-money investment, and no profits or financial returns are guaranteed.
            <br />
            Prop-Star is not a financial services provider and does not offer investment advice.
          </p>

          <p className="mt-8 text-xs text-white/50">&copy; {new Date().getFullYear()} Prop-Star. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

