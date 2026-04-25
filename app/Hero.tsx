"use client";

import { CheckCircle, MoveRight, Zap } from "lucide-react";
import { useRouter } from 'next/navigation';

export default function Hero() {
  const router = useRouter();
  return (
    <section className="flex flex-col items-center justify-center text-center px-4 py-20 bg-[#e9f2f5] min-h-[calc(100vh-80px)]">
      <div className="flex items-center gap-2 bg-[#F0F7FF] border border-[#E0EFFF] text-brand-blue px-4 py-2 rounded-full text-sm font-semibold mb-8">
        <Zap size={14} fill="#2B71F0" className="text-brand-blue" />
        AI-Powered Recruitment
      </div>

      <h1 className="text-5xl md:text-7xl font-extrabold text-brand-dark max-w-4xl leading-tight tracking-tight">
        Find Your Perfect <br />
        Candidates <span className="text-brand-blue">in Minutes.</span>
      </h1>

      <p className="mt-8 text-lg text-gray-500 max-w-2xl leading-relaxed">
        Transform your hiring process with AI-powered candidate screening. Upload resumes, 
        create job profiles, and let our intelligent algorithms find the best matches for your team.
      </p>

      <div className="mt-10 flex flex-col sm:flex-row gap-4">
        <button onClick={() => router.push('/signup')} className="bg-brand-accent text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all shadow-lg shadow-blue-100">
          Get Started Free <MoveRight size={20} />
        </button>
        <button onClick={() => router.push('/login')} className="bg-white border border-gray-200 text-brand-dark px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all">
          Log In to Dashboard
        </button>
      </div>
      <div className="mt-12 flex flex-wrap justify-center gap-8 text-[15px] text-[#667085] font-medium">
        <div className="flex items-center gap-2 italic">
          <CheckCircle size={18} className="text-brand-blue" /> Free 14-day trial
        </div>
        <div className="flex items-center gap-2 italic">
          <CheckCircle size={18} className="text-brand-blue" /> No credit card required
        </div>
        <div className="flex items-center gap-2 italic">
          <CheckCircle  size={18} className="text-brand-blue" /> Cancel anytime
        </div>
      </div>
    </section>
  );
}