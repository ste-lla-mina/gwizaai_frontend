"use client";
import React from 'react';
import { useSearchParams } from 'next/navigation';
import { 
  Briefcase, 
  Users, 
  Sparkles, 
  BarChart3, 
  ArrowRight,
  Calendar,
  CheckCircle
} from 'lucide-react';

export default function DashboardHome() {
  const searchParams = useSearchParams();
  const userName = searchParams.get('name') || "Stella";

  return (
    <div className="min-h-screen bg-[#e9f2f5] p-4 md:p-8 space-y-8 pb-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-brand-accent tracking-tight">
            Dashboard.
          </h1>
          <p className="text-slate-500 font-medium">Welcome back, {userName}!</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Active Jobs" value="3" detail="3 added recently" icon={<Briefcase size={20}/>} color="bg-[#1e293b]" />
        <StatCard title="Total Candidates" value="5" detail="Ready for screening" icon={<Users size={20}/>} color="bg-[#0369a1]" />
        <StatCard title="Screened" value="5" detail="4 strong matches" icon={<Sparkles size={20}/>} color="bg-[#334155]" />
        <StatCard title="Avg. Score" value="87" detail="Score Distribution" icon={<BarChart3 size={20}/>} color="bg-[#38bdf8]" isProgress />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <div className="bg-white rounded-[24px] border border-slate-100 shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-lg font-bold text-brand-dark">Recent Jobs</h3>
              <p className="text-sm text-slate-400">Your latest job postings</p>
            </div>
            <button className="text-brand-blue text-sm font-bold flex items-center gap-1 hover:underline">
              View all <ArrowRight size={14} />
            </button>
          </div>
          
          <div className="space-y-4">
            <JobItem title="UX/UI Designer" date="1 week ago" tags={['Figma', 'UI Design', 'User Research']} />
            <JobItem title="Product Manager" date="2 weeks ago" tags={['Product Strategy', 'Data Analysis']} />
            <JobItem title="Senior Full Stack Developer" date="2 weeks ago" tags={['React', 'Node.js', 'TypeScript']} />
          </div>
        </div>

        <div className="bg-white rounded-[24px] border border-slate-100 shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-lg font-bold text-brand-dark">Top Candidates</h3>
              <p className="text-sm text-slate-400">Highest scoring from AI screening</p>
            </div>
            <button className="text-brand-blue text-sm font-bold flex items-center gap-1 hover:underline">
              View all <ArrowRight size={14} />
            </button>
          </div>

          <div className="space-y-3">
            <CandidateItem rank={1} name="Alice Johnson" email="alice.johnson@email.com" score={92} />
            <CandidateItem rank={2} name="Carol Davis" email="carol.davis@email.com" score={90} />
            <CandidateItem rank={3} name="David Lee" email="david.lee@email.com" score={88} />
            <CandidateItem rank={4} name="Bob Smith" email="bob.smith@email.com" score={85} />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-[24px] border border-slate-100 shadow-sm p-8">
        <h3 className="text-lg font-bold text-brand-dark mb-1">Quick Actions</h3>
        <p className="text-sm text-slate-400 mb-6">Common tasks to help you get started</p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <ActionButton icon={<Briefcase size={20}/>} label="Create Job" />
          <ActionButton icon={<Users size={20}/>} label="Add Candidates" />
          <ActionButton icon={<Sparkles size={20}/>} label="Run Screening" />
          <ActionButton icon={<CheckCircle size={20}/>} label="View Results" />
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, detail, icon, color, isProgress = false }: any) {
  return (
    <div className={`${color} rounded-[20px] p-6 text-white relative overflow-hidden shadow-lg`}>
      <div className="relative z-10">
        <p className="text-xs font-medium opacity-80 uppercase tracking-wider mb-1">{title}</p>
        <h2 className="text-4xl font-bold mb-4">{value}</h2>
        {isProgress ? (
           <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden mb-2">
              <div className="bg-white h-full w-[87%]" />
           </div>
        ) : (
          <p className="text-xs font-medium opacity-90 flex items-center gap-2">
            <TrendingIcon /> {detail}
          </p>
        )}
      </div>
      <div className="absolute right-4 top-6 opacity-20 bg-white/20 p-3 rounded-xl">
        {icon}
      </div>
    </div>
  );
}

function JobItem({ title, date, tags }: any) {
  return (
    <div className="p-4 rounded-2xl border border-[#e9f2f5] bg-[#e9f2f5]/50 hover:bg-[#e9f2f5] transition-colors group">
      <div className="flex justify-between items-start mb-2">
        <h4 className="font-bold text-brand-dark group-hover:text-brand-blue transition-colors">{title}</h4>
        <span className="text-[10px] font-bold text-slate-400 flex items-center gap-1 uppercase">
          <Calendar size={12} /> {date}
        </span>
      </div>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag: string) => (
          <span key={tag} className="px-3 py-1 bg-white border border-slate-100 rounded-lg text-[10px] font-bold text-slate-500 uppercase tracking-tight">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

function CandidateItem({ rank, name, email, score }: any) {
  return (
    <div className="flex items-center justify-between p-3 rounded-xl hover:bg-[#e9f2f5] transition-all border border-transparent hover:border-slate-100 group">
      <div className="flex items-center gap-4">
        <div className="w-8 h-8 rounded-lg bg-[#e9f2f5] flex items-center justify-center text-xs font-bold text-slate-500">
          {rank}
        </div>
        <div>
          <p className="font-bold text-brand-dark text-sm">{name}</p>
          <p className="text-xs text-slate-400">{email}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-brand-blue font-black text-lg leading-none">{score}</p>
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">{score}% match</p>
      </div>
    </div>
  );
}

function ActionButton({ icon, label }: any) {
  return (
    <button className="flex flex-col items-center justify-center gap-3 p-6 rounded-2xl border border-[#e9f2f5] bg-[#e9f2f5]/30 hover:border-brand-blue hover:bg-blue-50/50 transition-all group">
      <div className="text-brand-blue group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <span className="text-xs font-bold text-brand-dark uppercase tracking-wide">{label}</span>
    </button>
  );
}

const TrendingIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
    <polyline points="16 7 22 7 22 13" />
  </svg>
);