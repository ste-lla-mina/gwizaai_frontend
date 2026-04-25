"use client";
import { MoveRight } from "lucide-react";
import { useRouter } from 'next/navigation';

const CTA = () => {
  const router = useRouter();
  return (
    <section className="px-6 py-20 bg-[#e9f2f5]">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-[#041738] via-[#2E5A88] to-[#041738] px-8 py-20 text-center shadow-2xl">
   
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Ready to transform your hiring?
            </h2>
            <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Join thousands of recruiters who are already using AI to find the best talent.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button onClick={() => router.push('/signup')} className="bg-[#e9f2f5] text-brand-dark px-8 py-4 rounded-xl font-bold text-lg flex items-center gap-2 hover:bg-slate-100 transition-all">
                Start Free Trial <MoveRight size={20} />
              </button>
              <button onClick={() => router.push('/login')} className="bg-brand-accent text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all">
                Log In
              </button>
            </div>
          </div>

          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent opacity-50" />
        </div>
      </div>
    </section>
  );
};

export default CTA;