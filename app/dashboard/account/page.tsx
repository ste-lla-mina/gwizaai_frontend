"use client";
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Camera, Mail, Shield, User, MapPin } from 'lucide-react';

export default function AccountPage() {
  const searchParams = useSearchParams();
  const [profile, setProfile] = useState({
    name: "Nancy",
    email: "nancy.r@gwiza.ai",
    role: "Senior Recruiter",
    location: "Kigali, RW"
  });

  useEffect(() => {
    const nameFromUrl = searchParams.get('name');
    if (nameFromUrl) {
      setProfile(prev => ({ 
        ...prev, 
        name: nameFromUrl,
        email: `${nameFromUrl.toLowerCase().replace(' ', '.')}@gwiza.ai`
      }));
    }
  }, [searchParams]);

  const initials = profile.name.split(' ').map(n => n[0]).join('').toUpperCase();

  return (
    <div className="max-w-4xl mx-auto space-y-8 py-4 animate-in slide-in-from-bottom-6 duration-700">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="relative">
          <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-[#0369a1] to-[#38bdf8] rounded-[48px] flex items-center justify-center text-5xl font-black text-white shadow-2xl shadow-[#0369a1]/30 rotate-3 hover:rotate-0 transition-transform duration-500">
            {initials}
          </div>
          <button onClick={() => alert('Profile picture upload coming soon!')} className="absolute -bottom-2 -right-2 bg-white p-4 rounded-3xl shadow-xl border border-[#e9f2f5] text-brand-accent hover:scale-110 active:scale-90 transition-all">
            <Camera size={20} />
          </button>
        </div>
        <div>
          <h1 className="text-4xl font-black text-[#1e293b] tracking-tight">{profile.name}</h1>
          <p className="text-[#0369a1] font-bold uppercase text-xs tracking-widest">{profile.role}</p>
        </div>
      </div>

      <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-sm border border-white grid grid-cols-1 md:grid-cols-2 gap-8">
        <ProfileInput label="Full Name" value={profile.name} icon={<User size={18}/>} />
        <ProfileInput label="Email Address" value={profile.email} icon={<Mail size={18}/>} />
        <ProfileInput label="Location" value={profile.location} icon={<MapPin size={18}/>} />
        <ProfileInput label="Security Level" value="Administrator" icon={<Shield size={18}/>} disabled />
        
        <div className="md:col-span-2 pt-4">
          <button onClick={() => alert('Profile changes saved!')} className="w-full bg-[#1e293b] text-white py-5 rounded-[24px] font-black uppercase tracking-widest text-sm shadow-xl shadow-black/10 hover:bg-[#0369a1] transition-all">
            Save Profile Changes
          </button>
        </div>
      </div>
    </div>
  );
}

function ProfileInput({ label, value, icon, disabled = false }: any) {
  return (
    <div className="space-y-2">
      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">
        {label}
      </label>
      <div className="relative group">
        <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#0369a1] transition-colors">
          {icon}
        </div>
        <input 
          type="text" 
          defaultValue={value} 
          disabled={disabled}
          className="w-full bg-[#e9f2f5]/40 border-2 border-transparent focus:border-[#0369a1] focus:bg-white pl-14 pr-6 py-5 rounded-[24px] font-bold text-[#1e293b] outline-none transition-all disabled:opacity-50"
        />
      </div>
    </div>
  );
}