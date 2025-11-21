import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Evaluation from '@/components/Evaluation'
import Mistake from '@/components/Mistake'
import Trust from '@/components/Trust'
import Perfect from '@/components/Perfect'
import Journey from '@/components/Journey'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="bg-brand-deep text-white">
      <div className="relative bg-[#000000] overflow-hidden">
        <div
          className="absolute top-0 left-0  w-[848px] h-[1084px] bg-[url('../public/assets/img/left-top.png')] bg-no-repeat bg-contain"
          aria-hidden="true"
        />

        <div
          className="absolute left-[80%] top-0 right-0  w-[100%] h-[1177px] bg-[url('../public/assets/img/right-top.png')] bg-no-repeat bg-contain"
          aria-hidden="true"
        />

        <div
          className="absolute bottom-0 left-0 w-full h-[550px] bg-[url('../public/assets/img/bottom.png')] bg-no-repeat bg-cover"
          aria-hidden="true"
        />


        <Header />
        <Hero />
        <Evaluation />
        <Mistake />
      </div>

      <Trust />
      <div className="relative bg-[#000000] overflow-hidden">
        <div
          className="absolute top-0 left-0 w-full h-[220px] bg-[url('../public/assets/img/top.png')] bg-no-repeat bg-cover scale-y-[-1]"
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

