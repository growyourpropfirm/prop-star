import Image from "next/image";
import CUSTOMERS from "../public/assets/img/customers.png"

export default function CTA() {
  return (
    <section id="cta" className="bg-[#000]">
      <div className="mx-auto max-w-5xl px-6 py-16 text-center lg:px-16">
        <h2 className="text-[38px] font-semibold leading-tight mb-4 font-inter text-white max-w-xl mx-auto">Ready to Show Your Skills?</h2>
        <p className="font-inter text-center text-white/80 text-[18px] mx-auto mb-4">Limited trial accounts available this week.</p>

        <form className="mx-auto flex max-w-2xl flex-col gap-4">
          <input
            type="email"
            required
            placeholder="Email address"
            className="flex-1 w-[296px] justify-center mx-auto text-center rounded-md border border-white/20 bg-white/5 px-6 py-3 text-sm text-white placeholder:text-white/60 focus:border-brand-orange focus:outline-none"
          />
          <button
            type="submit"
            className="rounded-full w-[283px] justify-center mx-auto bg-brand-orange px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-glow transition hover:bg-[#ff8640]"
          >
            Start My Free Trial
          </button>
        </form>
        <div className="py-4">
        <p className="text-sm text-white/80 font-inter">
            Trusted by <span className="font-semibold text-white font-inter mb-4">1400+</span>
          </p>
          <Image src={CUSTOMERS} alt="Customer avatars" className="mx-auto mt-4 h-10 w-auto" />
        </div>
      </div>
    </section>
  )
}

