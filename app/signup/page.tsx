"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Zap, Mail, Lock, User, Building, MoveRight, CheckCircle2, KeyRound } from 'lucide-react';

export default function SignupPage() {
  const router = useRouter();
  const [step, setStep] = useState('signup'); 
  const [token, setToken] = useState('');

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('verify');
  };

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (token === '123456') {
      setStep('success');
      setTimeout(() => {
        router.push('/login');
      }, 2000);
    } else {
      alert("Invalid token. Try '123456' for this demo.");
    }
  };

  if (step === 'verify') {
    return (
      <main className="min-h-screen bg-[#F8FAFC] flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white p-10 rounded-[32px] shadow-xl border border-slate-100 animate-in fade-in zoom-in duration-300">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <KeyRound size={32} className="text-brand-blue" />
            </div>
            <h1 className="text-2xl font-black text-brand-dark">Enter Verification Code</h1>
            <p className="text-slate-500 mt-2 text-sm">We've sent a 6-digit code to your email.</p>
          </div>

          <form onSubmit={handleVerify} className="space-y-6">
            <div>
              <input 
                required
                type="text"
                maxLength={6}
                value={token}
                onChange={(e) => setToken(e.target.value)}
                placeholder="0 0 0 0 0 0"
                className="w-full text-center text-2xl tracking-[1em] font-black py-4 rounded-2xl border-2 border-slate-100 outline-none focus:border-brand-blue focus:bg-blue-50/30 transition-all text-brand-dark"
              />
            </div>
            <button type="submit" className="w-full bg-brand-blue text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all">
              Verify Account <MoveRight size={20} />
            </button>
          </form>
          
          <p className="text-center mt-6 text-sm text-slate-400 font-medium">
            Didn't receive code? <button onClick={() => alert('Verification code resent!')} className="text-brand-blue font-bold">Resend</button>
          </p>
        </div>
      </main>
    );
  }

  if (step === 'success') {
    return (
      <main className="min-h-screen bg-[#F8FAFC] flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white p-10 rounded-[32px] shadow-xl text-center border border-slate-100 animate-in fade-in zoom-in duration-300">
          <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={40} className="text-green-500" />
          </div>
          <h1 className="text-2xl font-black text-brand-dark mb-2">Email Verified!</h1>
          <p className="text-slate-500 mb-4 leading-relaxed">Your account is now active. Redirecting you to login...</p>
          <div className="w-12 h-1.5 bg-slate-100 rounded-full mx-auto overflow-hidden">
            <div className="h-full bg-green-500 animate-[progress_2s_ease-in-out]" style={{ width: '100%' }} />
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F8FAFC] flex items-center justify-center px-4 py-12">
      <div className="max-w-xl w-full">
        <div className="text-center mb-10">
          <Link href="/" className="inline-flex items-center gap-2 mb-6">
            <div className="w-10 h-10 bg-brand-blue rounded-xl flex items-center justify-center shadow-lg">
              <Zap size={22} fill="white" className="text-white" />
            </div>
            <span className="font-bold text-2xl tracking-tighter text-brand-blue">Gwiza</span>
          </Link>
          <h1 className="text-3xl font-extrabold text-brand-accent">Join the future of hiring.</h1>
          <p className="text-slate-500 mt-2">Create your account and start discovering top talent.</p>
        </div>

        <div className="bg-white p-8 md:p-10 rounded-[32px] shadow-xl shadow-blue-900/5 border border-slate-100">
          <form className="space-y-5" onSubmit={handleSignup}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-brand-dark mb-2">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input required type="text" placeholder="Name Surname" className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-brand-blue focus:ring-4 focus:ring-blue-50 transition-all text-brand-dark" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-brand-dark mb-2">Company Name</label>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input required type="text" placeholder="Company Ltd" className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-brand-blue focus:ring-4 focus:ring-blue-50 transition-all text-brand-dark" />
                </div>
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-brand-dark mb-2">Work Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input required type="email" placeholder="name@company.com" className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-brand-blue focus:ring-4 focus:ring-blue-50 transition-all text-brand-dark" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-brand-dark mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input required type="password" placeholder="At least 8 characters" className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-brand-blue focus:ring-4 focus:ring-blue-50 transition-all text-brand-dark" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-brand-dark mb-2">Confirm Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input required type="password" placeholder="Must match the password" className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-brand-blue focus:ring-4 focus:ring-blue-50 transition-all text-brand-dark" />
              </div>
            </div>
            <div className="flex items-start gap-3 py-2">
              <input required type="checkbox" className="mt-1 w-4 h-4 rounded border-slate-300 text-brand-blue focus:ring-brand-blue" />
              <span className="text-sm text-slate-600 font-medium leading-tight">
                I agree to the <Link href="#" className="text-brand-blue underline">Terms of Service</Link> and <Link href="#" className="text-brand-blue underline">Privacy Policy</Link>.
              </span>
            </div>
            <button type="submit" className="w-full bg-brand-blue text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all shadow-lg shadow-blue-100">
              Create Account <MoveRight size={20} />
            </button>
          </form>
          <div className="relative my-8 text-center">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-100"></div></div>
            <span className="relative bg-white px-4 text-xs font-bold text-slate-400 uppercase tracking-widest">or sign up with</span>
          </div>
          <button className="w-full border border-slate-200 py-3 rounded-xl font-semibold text-brand-dark flex items-center justify-center gap-3 hover:bg-slate-50 transition-all">
            <img src="https://www.svgrepo.com/show/355037/google.svg" className="w-5 h-5" alt="Google" />
            Continue with Google
          </button>
        </div>
        <p className="text-center mt-8 text-slate-600 font-medium">
          Already have an account? {' '}
          <Link href="/login" className="text-brand-blue font-bold hover:underline">Log in</Link>
        </p>
      </div>
    </main>
  );
}