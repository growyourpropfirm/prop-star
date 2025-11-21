import Image from 'next/image'
import Dashboard from '../public/assets/img/mistake.png'

export default function Mistake() {
  return (
    <section id="safety-net" className="pb-20">
      <div className="max-w-6xl mx-auto px-4 lg:px-0">

        <h2 className="text-[38px] font-semibold leading-tight text-center font-inter text-white mb-4 max-w-2xl mx-auto">
          Made a Mistake? Don’t Start Over.
        </h2>

        <p className="font-inter text-center text-white/80 text-[18px] mx-auto">
          Our exclusive Penalty Option lets you continue your challenge instead of losing your progress.
        </p>
        <div className="grid gap-16 lg:grid-cols-12 items-start mt-8">
          <div className="lg:col-span-6 space-y-6 text-white mt-10">
            <p className="font-inter text-white/80">
              We know even the best traders can slip up. That’s why Prop-Star introduces a safety net you won’t find
              anywhere else.
            </p>

            <p className="font-inter text-white/80">
              If you violate a rule or exceed a limit during your evaluation, you can pay a small penalty fee and keep
              going — no need to restart from zero.
            </p>

            <p className="font-inter text-white/80">
              It’s fair, transparent, and designed to reward discipline without punishing human error.
            </p>
          </div>
          <div className="lg:col-span-6 relative flex justify-center">
            <div className="absolute inset-0 rounded-[32px] bg-brand-green/10 blur-3xl" aria-hidden="true" />
            <Image
              src={Dashboard}
              alt="Prop-Star penalty continuation dashboard"
              className="relative rounded-[32px] border h-[520px] w-[100%] border-white/5 shadow-card max-w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}


