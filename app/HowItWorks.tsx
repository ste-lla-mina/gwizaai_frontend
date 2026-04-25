export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Create Your Job Profile",
      desc: "Define your ideal candidate by specifying required skills, experience, and qualifications.",
    },
    {
      number: "02",
      title: "Upload Candidates",
      desc: "Import resumes via file upload, paste text, or connect to your existing talent database.",
    },
    {
      number: "03",
      title: "Get AI-Ranked Results",
      desc: "Receive a shortlist of best-matched candidates with detailed explanations for each match.",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-[#E9F2F5] border-t border-slate scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-brand-dark mb-4">How it works.</h2>
        <p className="text-brand-blue font-medium mb-20">Get started in three simple steps.</p>
        <div className="relative flex flex-col md:flex-row justify-between items-start gap-12 md:gap-4">
          <div className="hidden md:block absolute top-6 left-0 w-full h-[1px] border-t-2 border-dashed border-gray-300 -z-0" />

          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center flex-1 group">
              <div className="w-12 h-12 bg-brand-dark text-white rounded-full flex items-center justify-center font-bold text-lg mb-6 shadow-lg group-hover:scale-110 transition-transform">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-4 px-4">
                {step.title}
              </h3>
              <p className="text-brand-blue text-[15px] leading-relaxed max-w-[280px]">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}