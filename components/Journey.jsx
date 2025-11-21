const steps = [
  { label: 'Step 1', title: 'Start your trial today.' },
  { label: 'Step 2', title: 'Prove your trading discipline.' },
  { label: 'Step 3', title: 'Receive feedback and unlock access to a funded account.' },
];

export default function Journey() {
  return (
    <section id="journey" className="bg-[#000000]">
      <div className="mx-auto max-w-6xl px-4 pb-24 text-center lg:px-0">
        <h2 className="text-[38px] font-semibold leading-tight mb-4 font-inter text-white max-w-xl mx-auto">
          What Happens Next
        </h2>
        <p className="font-inter text-white/80 text-[18px] mx-auto mb-12">
          Your Journey to Funding Starts Here
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          {steps.map((step, index) => (
            <div key={step.label} className="flex items-center justify-center">
              <div className="w-64 text-center px-4">
                <p className="text-[24px] font-inter font-bold leading-[28px] tracking-normal text-brand-green mb-4">
                  {step.label}
                </p>
                <p className="font-inter text-white/80 text-[18px]">{step.title}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:flex items-center mx-4">
                  <svg width="81" height="37" viewBox="0 0 81 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M2.5 15.9097C1.11929 15.9097 1.20706e-07 17.029 0 18.4097C-1.20706e-07 19.7904 1.11929 20.9097 2.5 20.9097L2.5 18.4097L2.5 15.9097ZM80.2678 20.1774C81.2441 19.2011 81.2441 17.6182 80.2678 16.6419L64.3579 0.732004C63.3816 -0.244307 61.7986 -0.244307 60.8223 0.732004C59.846 1.70831 59.846 3.29123 60.8223 4.26754L74.9645 18.4097L60.8223 32.5518C59.846 33.5281 59.846 35.111 60.8223 36.0873C61.7986 37.0637 63.3816 37.0637 64.3579 36.0873L80.2678 20.1774ZM2.5 18.4097L2.5 20.9097L78.5 20.9097L78.5 18.4097L78.5 15.9097L2.5 15.9097L2.5 18.4097Z"
                      fill="#FF6B00"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
