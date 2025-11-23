'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const links = [
  { href: '#how-it-works', label: 'Evaluation' },
  { href: '#safety-net', label: 'Safety Net' },
  { href: '#trusted', label: 'Social Proof' },
  { href: '#journey', label: 'Funding Steps' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed left-0 right-0 top-0 z-40 border-b border-white/5 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-5 lg:px-0">
        <Link href="/" className="text-[0.95rem] font-semibold tracking-[0.2em] text-white">
          <Image src="/assets/img/logo.png" width={197} height={23} alt="Prop-Star Logo" />
        </Link>

        <button
          type="button"
          className="md:hidden"
          aria-label="Toggle menu"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <svg className="h-6 w-6 text-white transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      <div
        className={`overflow-hidden transition-all duration-500 md:hidden border-t border-white/10 bg-[#050607] ${
          isOpen ? 'max-h-96 py-6' : 'max-h-0 py-0'
        }`}
      >
        <div className="flex flex-col gap-4 text-white/80 px-4">
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="text-sm">
              {link.label}
            </Link>
          ))}
          <Link href="#cta" className="text-sm" onClick={() => setIsOpen(false)}>
            Log in
          </Link>
          <Link
            href="#cta"
            className="rounded-full border border-white/30 px-5 py-2 text-center text-sm font-semibold text-white"
            onClick={() => setIsOpen(false)}
          >
            Start Free Trial
          </Link>
        </div>
      </div>
    </header>
  )
}