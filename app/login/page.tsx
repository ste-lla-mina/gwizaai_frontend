"use client";
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Zap, Mail, Lock, MoveRight, ArrowLeft, KeyRound } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const [authState, setAuthState] = useState<'login' | 'forgot' | 'reset'>('login');
  const [email, setEmail] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const nameFromEmail = email.split('@')[0];
    const capitalizedName = nameFromEmail.charAt(0).toUpperCase() + nameFromEmail.slice(1);
    
    router.push(`/dashboard?name=${capitalizedName || 'Stella'}`);
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC] flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full">
        <div className="text-center mb-10">
          <Link href="/" className="inline-flex items-center gap-2 mb-6">
            <div className="w-10 h-10 bg-brand-blue rounded-xl flex items-center justify-center shadow-lg">
              <Zap size={22} fill="white" className="text-white" />
            </div>
            <span className="font-bold text-2xl tracking-tighter text-brand-blue">Gwiza</span>
          </Link>
          <h1 className="text-3xl font-extrabold text-brand-accent">
            {authState === 'login' && "Welcome back."}
            {authState === 'forgot' && "Reset password"}
            {authState === 'reset' && "Enter code"}
          </h1>
          <p className="text-slate-500 mt-2">
            {authState === 'login' && "Log in to manage your recruitment pipeline."}
            {authState === 'forgot' && "Enter your email to receive a reset code."}
            {authState === 'reset' && "We've sent a 6-digit code to your email."}
          </p>
        </div>

        <div className="bg-white p-8 rounded-[24px] shadow-xl shadow-blue-900/5 border border-slate-100">
          {authState === 'login' && (
            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-brand-dark mb-2">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input 
                    type="email" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com" 
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-brand-blue focus:ring-4 focus:ring-blue-50 transition-all text-brand-dark" 
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-semibold text-brand-dark">Password</label>
                  <button type="button" onClick={() => setAuthState('forgot')} className="text-sm font-semibold text-brand-blue hover:underline">Forgot?</button>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input type="password" placeholder="••••••••" className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-brand-blue focus:ring-4 focus:ring-blue-50 transition-all text-brand-dark" />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-brand-blue focus:ring-brand-blue" />
                <span className="text-sm text-slate-600 font-medium">Remember for 30 days</span>
              </div>
              <button type="submit" className="w-full bg-brand-blue text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-slate-800 transition-all shadow-lg shadow-slate-200">
                Log In <MoveRight size={20} />
              </button>
            </form>
          )}
          {authState === 'forgot' && (
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-brand-dark mb-2">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input type="email" placeholder="name@company.com" className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-brand-blue focus:ring-4 focus:ring-blue-50 transition-all text-brand-dark" />
                </div>
              </div>
              <button onClick={() => setAuthState('reset')} className="w-full bg-brand-blue text-white py-4 rounded-xl font-bold text-lg hover:bg-slate-800 transition-all shadow-lg">
                Send Reset Code
              </button>
              <button onClick={() => setAuthState('login')} className="w-full flex items-center justify-center gap-2 text-slate-500 font-semibold text-sm hover:text-brand-dark transition-colors">
                <ArrowLeft size={16} /> Back to Login
              </button>
            </div>
          )}
          {authState === 'reset' && (
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-brand-dark mb-2">6-Digit Code</label>
                <div className="relative">
                  <KeyRound className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input type="text" maxLength={6} placeholder="000000" className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-brand-blue focus:ring-4 focus:ring-blue-50 transition-all text-brand-dark tracking-[0.5em] font-mono" />
                </div>
              </div>
              <button onClick={() => setAuthState('login')} className="w-full bg-brand-blue text-white py-4 rounded-xl font-bold text-lg hover:bg-slate-800 transition-all shadow-lg">
                Verify Code
              </button>
              <button onClick={() => setAuthState('forgot')} className="w-full text-slate-500 font-semibold text-sm hover:text-brand-dark transition-colors text-center">
                Didn't receive code? Resend
              </button>
            </div>
          )}

          {authState === 'login' && (
            <>
              <div className="relative my-8 text-center">
                <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-100"></div></div>
                <span className="relative bg-white px-4 text-xs font-bold text-slate-400 uppercase tracking-widest">or continue with</span>
              </div>
              <button className="w-full border border-slate-200 py-3 rounded-xl font-semibold text-brand-dark flex items-center justify-center gap-3 hover:bg-slate-50 transition-all">
                <img src="https://www.svgrepo.com/show/355037/google.svg" className="w-5 h-5" alt="Google" />
                Sign in with Google
              </button>
            </>
          )}
        </div>
        <p className="text-center mt-8 text-slate-600 font-medium">
          Don't have an account? {' '}
          <Link href="/signup" className="text-brand-blue font-bold hover:underline">Sign up for free</Link>
        </p>
      </div>
    </main>
  );
}