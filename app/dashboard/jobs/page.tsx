"use client";
import React from 'react';
import { Plus, MapPin, Clock, Briefcase, MoreVertical } from 'lucide-react';

export default function JobsPage() {
  return (
    <div className="max-w-[1600px] mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h2 className="text-3xl font-black text-brand-accent tracking-tight">Job Postings.</h2>
        <button className="bg-[#0369a1] text-white px-6 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-[#0369a1]/20 active:scale-95 transition-transform">
          <Plus size={20} /> New Job
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4">
        <JobCard title="UX/UI Designer" location="Remote" applicants="12" date="1 week ago" status="Active" />
        <JobCard title="Product Manager" location="Hybrid" applicants="8" date="2 weeks ago" status="Active" />
        <JobCard title="Senior Full Stack" location="New York" applicants="24" date="3 weeks ago" status="Closed" />
      </div>
    </div>
  );
}

function JobCard({ title, location, applicants, date, status }: any) {
  return (
    <div className="bg-white p-5 md:p-6 rounded-[32px] shadow-sm border border-white flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-[#0369a1]/30 transition-all">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-[#e9f2f5] rounded-2xl flex items-center justify-center text-[#0369a1] shrink-0">
          <Briefcase size={22}/>
        </div>
        <div>
          <h4 className="font-bold text-[#1e293b] leading-tight">{title}</h4>
          <div className="flex gap-3 text-[10px] font-bold text-slate-400 uppercase mt-1">
            <span className="flex items-center gap-1"><MapPin size={12}/> {location}</span>
            <span className="flex items-center gap-1"><Clock size={12}/> {date}</span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between md:justify-end gap-8 border-t md:border-t-0 pt-4 md:pt-0">
        <div className="text-left md:text-right">
          <p className="text-xl font-black text-[#1e293b] leading-none">{applicants}</p>
          <p className="text-[10px] font-bold text-slate-400 uppercase">Applicants</p>
        </div>
        <div className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider ${
          status === 'Active' ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-100 text-slate-500'
        }`}>
          {status}
        </div>
        <button className="p-2 hover:bg-[#e9f2f5] rounded-xl transition-colors">
          <MoreVertical size={20} className="text-slate-300" />
        </button>
      </div>
    </div>
  );
}