"use client";
import React, { useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { 
  LayoutDashboard, 
  Briefcase, 
  Search, 
  Sparkles, 
  Users, 
  UserCircle, 
  Settings, 
  Menu, 
  X, 
  Zap, 
  LogOut,
  MessageCircle
} from 'lucide-react';

const navItems = [
  { name: 'Dashboard', icon: <LayoutDashboard size={20} />, href: '/dashboard' },
  { name: 'Jobs', icon: <Briefcase size={20} />, href: '/dashboard/jobs' },
  { name: 'Screening', icon: <Search size={20} />, href: '/dashboard/screening' },
  { name: 'AI Results', icon: <Sparkles size={20} />, href: '/dashboard/results' },
  { name: 'Candidates', icon: <Users size={20} />, href: '/dashboard/candidates' },
  { name: 'Account', icon: <UserCircle size={20} />, href: '/dashboard/account' },
  { name: 'Settings', icon: <Settings size={20} />, href: '/dashboard/settings' },
];

function DashboardContent({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const userName = searchParams.get('name') || "Stella";
  const userInitials = userName.charAt(0).toUpperCase();

  const handleLogout = () => {
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-[#e9f2f5] flex">
      <aside className="hidden lg:flex flex-col w-72 bg-[#2E5A88] text-white fixed h-full z-50">
        <div className="p-8 flex items-center gap-3">
          <div className="w-8 h-8 bg-brand-blue rounded-lg flex items-center justify-center">
            <Zap size={18} fill="white" stroke="white" />
          </div>
          <span className="font-bold text-brand-blue tracking-tight">Gwiza</span>
        </div>

        <nav className="flex-1 px-4 py-4 space-y-2">
          {navItems.map((item) => (
            <Link key={item.name} href={`${item.href}?name=${userName}`} className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-white/10 transition-all text-slate-300 hover:text-white font-medium group">
              <span className="group-hover:text-brand-blue transition-colors">{item.icon}</span>
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-white/10 space-y-2">
          <div className="flex items-center gap-3 bg-white/5 p-3 rounded-2xl">
            <div className="w-10 h-10 bg-brand-blue rounded-xl flex items-center justify-center font-bold text-sm shrink-0">
              {userInitials}
            </div>
            <div className="overflow-hidden">
              <p className="text-sm font-bold truncate">{userName}</p>
              <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Recruiter</p>
            </div>
          </div>
          <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-red-500/10 rounded-xl transition-all font-medium text-sm">
            <LogOut size={18} /> Logout
          </button>
        </div>
      </aside>

      <div className="flex-1 lg:ml-72 flex flex-col">
        <header className="h-20 bg-white border-b border-slate-100 px-4 md:px-8 flex items-center justify-between sticky top-0 z-40">
          <div className="flex items-center gap-3">
             <button onClick={() => setIsMobileMenuOpen(true)} className="lg:hidden p-2 text-brand-dark">
                <Menu size={24} color="#0ea5e9" />
             </button>
             <div className="flex items-center gap-2">
                <Zap size={20} className="text-brand-blue lg:hidden" fill="currentColor" />
                <h2 className="text-lg md:text-xl font-bold text-brand-blue tracking-tight">Gwiza</h2>
             </div>
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <div className="flex items-center gap-2 lg:hidden">
               <div className="w-9 h-9 bg-brand-blue rounded-lg flex items-center justify-center font-bold text-white text-xs">
                 {userInitials}
               </div>
               <button onClick={handleLogout} className="p-2 text-slate-400 hover:text-red-500 transition-colors">
                  <LogOut size={20} />
               </button>
            </div>
            <button className="hidden lg:block bg-brand-blue text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:shadow-lg hover:shadow-blue-500/20 transition-all">
              + New Job
            </button>
          </div>
        </header>

        <main className="p-4 md:p-8 flex-1 pb-24 lg:pb-8">
          {children}
        </main>
      </div>
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div className="absolute inset-0 bg-[#2E5A88]/60 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
          <nav className="absolute top-0 left-0 bottom-0 w-[280px] bg-[#2E5A88] p-6 flex flex-col">
            <div className="flex items-center justify-between mb-10">
               <div className="flex items-center gap-2">
                  <Zap size={20} className="text-brand-blue" fill="currentColor" />
                  <span className="font-bold text-xl text-brand-blue">Gwiza</span>
               </div>
               <button onClick={() => setIsMobileMenuOpen(false)} className="text-white"><X size={24} /></button>
            </div>
            <div className="space-y-1 flex-1">
              {navItems.map((item) => (
                <Link key={item.name} href={`${item.href}?name=${userName}`} onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-4 px-4 py-4 rounded-xl text-slate-300 font-medium active:bg-white/10">
                  {item.icon} {item.name}
                </Link>
              ))}
              <button onClick={handleLogout} className="w-full flex items-center gap-4 px-4 py-4 rounded-xl text-red-400 font-medium active:bg-white/10 mt-auto">
                <LogOut size={20} /> Logout
              </button>
            </div>
          </nav>
        </div>
      )}
  <button onClick={() => alert('Chat support coming soon!')} className="fixed bottom-8 right-8 w-16 h-16 bg-[#2E5A88] text-white rounded-[24px] shadow-2xl shadow-[#1e293b]/40 flex items-center justify-center hover:scale-110 active:scale-95 transition-all group z-50 border border-white/10">
  <div className="absolute -top-2 -right-2 w-5 h-5 bg-[#38bdf8] rounded-full border-4 border-[#e9f2f5] animate-pulse" />
  <MessageCircle size={28} className="group-hover:rotate-12 transition-transform" />
  </button>
    </div>
  );
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-50 flex items-center justify-center">Loading dashboard...</div>}>
      <DashboardContent>{children}</DashboardContent>
    </Suspense>
  );
}