"use client";
import React from 'react';
import { 
  BarChart3, TrendingUp, Users, Award, 
  CheckCircle2, Star, Zap, ArrowUpRight, 
  Search, ShieldCheck, Cpu 
} from 'lucide-react';

export default function ResultsPage() {
  return (
    <div className="max-w-[1600px] mx-auto space-y-8 animate-in fade-in zoom-in-95 duration-700">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-[#0369a1] text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">Live Analysis</span>
            <span className="text-slate-400 text-[10px] font-black uppercase tracking-widest">Batch #8821</span>
          </div>
          <h2 className="text-4xl font-black text-brand-accent tracking-tight">AI Insights.</h2>
          <p className="text-slate-500 font-medium">Detailed performance breakdown of the top 10 candidates</p>
        </div>
        <div className="flex items-center gap-3 bg-white p-2 rounded-[24px] shadow-sm border border-white">
          <div className="px-4 py-2 bg-[#e9f2f5] rounded-xl text-[10px] font-black text-[#0369a1] uppercase">UX/UI Role</div>
          <button onClick={() => alert('Report exported successfully!')} className="bg-[#1e293b] text-white px-5 py-2 rounded-xl text-[10px] font-black uppercase hover:bg-[#0369a1] transition-all">Export Report</button>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
        
        <div className="xl:col-span-8 space-y-6">
          <div className="bg-white rounded-[40px] p-8 shadow-sm border border-white relative overflow-hidden">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-black text-brand-blue flex items-center gap-3">
                <Star className="text-amber-400 fill-amber-400" size={24} /> Top 10 Performers
              </h3>
              <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">Sorted by Match Score</span>
            </div>

            <div className="space-y-3">
              <LeaderboardRow rank={1} name="Alice Johnson" score={98} tags={["Figma Expert", "React"]} highlight />
              <LeaderboardRow rank={2} name="Carol Davis" score={94} tags={["User Research"]} />
              <LeaderboardRow rank={3} name="David Lee" score={91} tags={["Strategy"]} />
              <LeaderboardRow rank={4} name="Sarah Jenkins" score={89} tags={["Prototyping"]} />
              <LeaderboardRow rank={5} name="Michael Chen" score={87} tags={["UI Motion"]} />
              <LeaderboardRow rank={6} name="Elena Rodriguez" score={85} tags={["Mobile First"]} />
              <LeaderboardRow rank={7} name="Kevin Vark" score={82} tags={["Testing"]} />
              <LeaderboardRow rank={8} name="Jessica Wu" score={81} tags={["Figma"]} />
              <LeaderboardRow rank={9} name="Brian Smith" score={79} tags={["Design Ops"]} />
              <LeaderboardRow rank={10} name="Liam Wilson" score={78} tags={["Branding"]} />
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: INSIGHTS & ANALYTICS (Fills the "Blank" space) */}
        <div className="xl:col-span-4 space-y-6">
          {/* AI SUMMARY CARD */}
          <div className="bg-[#1e293b] rounded-[40px] p-8 text-white relative overflow-hidden group">
            <Cpu className="absolute -right-4 -bottom-4 w-32 h-32 opacity-10 group-hover:rotate-12 transition-transform duration-700" />
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#38bdf8] rounded-2xl flex items-center justify-center">
                <Zap size={20} fill="white" />
              </div>
              <h4 className="font-bold text-lg">AI Recommendation</h4>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Based on this batch, <span className="text-white font-bold">Alice Johnson</span> shows an exceptional overlap in "Design Systems" which was your primary job requirement. We suggest immediate technical screening.
            </p>
            <button onClick={() => alert('Interview scheduling initiated!')} className="w-full bg-[#38bdf8] text-white py-4 rounded-2xl font-black uppercase text-xs tracking-widest hover:scale-[1.02] transition-transform">
              Schedule Top 3
            </button>
          </div>

          {/* BATCH ANALYTICS CARD */}
          <div className="bg-white rounded-[40px] p-8 border border-white shadow-sm">
            <h4 className="font-black text-[#1e293b] mb-6 flex items-center gap-2">
              <BarChart3 size={18} className="text-[#0369a1]" /> Batch Breakdown
            </h4>
            <div className="space-y-6">
              <StatMini label="Avg. Match Score" value="84%" color="bg-[#38bdf8]" />
              <StatMini label="Candidate Quality" value="High" color="bg-emerald-400" />
              <StatMini label="Screening Time" value="1.2s" color="bg-amber-400" />
            </div>
          </div>

          {/* TRUST/VALIDATION CARD */}
          <div className="bg-[#e9f2f5] rounded-[40px] p-8 border border-white/50">
            <div className="flex items-center gap-3 text-[#0369a1] mb-2">
              <ShieldCheck size={20} />
              <span className="font-black text-xs uppercase tracking-widest">AI Audit Passed</span>
            </div>
            <p className="text-[#0369a1]/70 text-[11px] font-bold leading-relaxed">
              Our models analyzed 52 unique skill identifiers. Results are verified against current industry standards for UX/UI roles.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

function LeaderboardRow({ rank, name, score, tags, highlight = false }: any) {
  return (
    <div className={`flex items-center justify-between p-4 rounded-[24px] transition-all border ${
      highlight ? 'bg-[#0369a1] border-transparent shadow-xl shadow-[#0369a1]/20' : 'bg-[#e9f2f5]/30 border-transparent hover:bg-[#e9f2f5]/60'
    }`}>
      <div className="flex items-center gap-4">
        <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-black text-xs ${
          highlight ? 'bg-white text-[#0369a1]' : 'bg-white text-slate-400 shadow-sm'
        }`}>
          {rank}
        </div>
        <div>
          <p className={`font-bold text-sm ${highlight ? 'text-white' : 'text-[#1e293b]'}`}>{name}</p>
          <div className="flex gap-1 mt-1">
            {tags.map((t: string) => (
              <span key={t} className={`text-[8px] font-black uppercase px-2 py-0.5 rounded-md ${
                highlight ? 'bg-white/20 text-white' : 'bg-white text-slate-400 border border-slate-100'
              }`}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="text-right">
          <p className={`text-xl font-black leading-none ${highlight ? 'text-white' : 'text-[#0369a1]'}`}>{score}</p>
          <p className={`text-[8px] font-black uppercase ${highlight ? 'text-white/60' : 'text-slate-400'}`}>Score</p>
        </div>
        <button onClick={() => alert(`Viewing details for ${name}`)} className={`p-2 rounded-xl transition-all ${highlight ? 'bg-white/20 text-white hover:bg-white/30' : 'bg-white text-slate-300 hover:text-[#0369a1]'}`}>
          <ArrowUpRight size={18} />
        </button>
      </div>
    </div>
  );
}

function StatMini({ label, value, color }: any) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-3">
        <div className={`w-2 h-2 rounded-full ${color}`} />
        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{label}</span>
      </div>
      <span className="text-sm font-black text-[#1e293b]">{value}</span>
    </div>
  );
}