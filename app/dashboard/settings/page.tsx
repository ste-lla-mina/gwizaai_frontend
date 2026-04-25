"use client";
import React, { useState } from 'react';
import { Bell, ShieldCheck, Zap, Globe, Trash2 } from 'lucide-react';

export default function SettingsPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-8 animate-in fade-in duration-500">
      <h2 className="text-3xl font-black text-brand-accent tracking-tight">Settings.</h2>

      <div className="space-y-4">
        <SettingItem 
          icon={<Bell size={20}/>} 
          title="Email Notifications" 
          desc="Receive weekly summaries of AI screening results" 
          defaultChecked={true} 
        />
        <SettingItem 
          icon={<Zap size={20}/>} 
          title="Auto-Analysis" 
          desc="Analyze resumes immediately upon upload" 
          defaultChecked={true} 
        />
        <SettingItem 
          icon={<ShieldCheck size={20}/>} 
          title="Privacy Mode" 
          desc="Anonymize candidate names for unbiased screening" 
          defaultChecked={false} 
        />
        <SettingItem 
          icon={<Globe size={20}/>} 
          title="Career Page Sync" 
          desc="Automatically post active jobs to your company site" 
          defaultChecked={true} 
        />
      </div>

      <div className="p-8 bg-red-50 rounded-[32px] border border-red-100 flex flex-col sm:flex-row justify-between items-center gap-6">
        <div className="text-center sm:text-left">
          <h4 className="font-bold text-red-900">Delete Account</h4>
          <p className="text-sm text-red-600 font-medium">Permanently remove all data and job history</p>
        </div>
        <button onClick={() => { if (confirm('Are you sure you want to delete your account? This action cannot be undone.')) alert('Account deletion initiated.'); }} className="flex items-center gap-2 bg-white text-red-600 border border-red-200 px-6 py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all group">
          <Trash2 size={16} className="group-hover:scale-110 transition-transform" /> 
          Terminate
        </button>
      </div>
    </div>
  );
}

function SettingItem({ icon, title, desc, defaultChecked }: any) {
  const [enabled, setEnabled] = useState(defaultChecked);

  return (
    <div className="bg-white p-6 rounded-[28px] shadow-sm border border-white flex items-center justify-between group">
      <div className="flex items-center gap-5">
        <div className="w-12 h-12 bg-[#e9f2f5] rounded-2xl flex items-center justify-center text-[#0369a1] group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <div>
          <h4 className="font-bold text-[#1e293b] leading-tight">{title}</h4>
          <p className="text-xs text-slate-400 font-medium mt-1">{desc}</p>
        </div>
      </div>
      
      <button 
        onClick={() => setEnabled(!enabled)}
        className={`w-14 h-8 rounded-full p-1 transition-colors duration-300 shrink-0 ${enabled ? 'bg-[#38bdf8]' : 'bg-slate-200'}`}
      >
        <div className={`w-6 h-6 bg-white rounded-full shadow-sm transition-transform duration-300 ${enabled ? 'translate-x-6' : 'translate-x-0'}`} />
      </button>
    </div>
  );
}