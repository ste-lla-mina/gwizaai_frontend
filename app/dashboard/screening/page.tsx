"use client";
import React from 'react';
import { Upload, FileText, Sparkles, Briefcase } from 'lucide-react';

export default function ScreeningPage() {
  return (
    <div className="max-w-4xl mx-auto py-4 md:py-10 space-y-8 text-center">
      <div className="space-y-2">
        <h2 className="text-3xl md:text-4xl font-black text-brand-accent tracking-tight">Run AI Screening.</h2>
        <p className="text-slate-500 font-medium text-sm md:text-base px-4">Upload resumes to analyze candidate-job compatibility</p>
      </div>

      <div className="bg-white border-4 border-dashed border-[#e9f2f5] rounded-[40px] p-8 md:p-20 flex flex-col items-center gap-6 mx-2">
        <div className="w-16 h-16 md:w-20 md:h-20 bg-[#e9f2f5] rounded-3xl flex items-center justify-center text-[#0369a1]">
          <Upload size={32} />
        </div>
        <div className="space-y-1">
          <p className="text-lg md:text-xl font-bold text-[#1e293b]">Click or drag files</p>
          <p className="text-xs md:text-sm text-slate-400 font-medium px-4">Support for PDF, DOCX (Max 50 files per batch)</p>
        </div>
        <button className="w-full sm:w-auto bg-[#1e293b] text-white px-10 py-4 rounded-2xl font-bold shadow-xl shadow-black/10 active:scale-95 transition-transform">
          Select Files
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 px-2">
        <StepCard icon={<FileText size={20}/>} label="1. Parse Data" />
        <StepCard icon={<Sparkles size={20}/>} label="2. AI Matching" />
        <StepCard icon={<Briefcase size={20}/>} label="3. Rank Talent" />
      </div>
    </div>
  );
}

function StepCard({ icon, label }: any) {
  return (
    <div className="bg-white/60 p-5 rounded-[24px] border border-white flex flex-row sm:flex-col items-center justify-center gap-3">
      <div className="text-[#0369a1] bg-white p-2 rounded-xl shadow-sm">{icon}</div>
      <span className="text-[10px] font-black text-[#1e293b] uppercase tracking-widest">{label}</span>
    </div>
  );
}