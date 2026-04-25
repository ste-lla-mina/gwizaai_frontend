"use client";

import React, { useState, useMemo } from 'react';
import { Search, Filter, MoreHorizontal, Eye, Mail, Archive } from 'lucide-react';

export default function CandidatesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCandidate, setSelectedCandidate] = useState<string | null>(null);
  const [showActions, setShowActions] = useState<string | null>(null);
  const [filterStatus, setFilterStatus] = useState<string | null>(null);

  const candidates = [
    { id: '1', name: "Alice Johnson", email: "alice.j@email.com", role: "UX Designer", score: "92", status: "Shortlisted" },
    { id: '2', name: "Carol Davis", email: "carol.d@email.com", role: "Product Manager", score: "90", status: "Screened" },
    { id: '3', name: "David Lee", email: "david.l@email.com", role: "Full Stack", score: "88", status: "New" },
  ];

  const filteredCandidates = useMemo(() => {
    return candidates.filter(candidate => {
      const matchesSearch = candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           candidate.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           candidate.role.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFilter = !filterStatus || candidate.status === filterStatus;
      return matchesSearch && matchesFilter;
    });
  }, [searchTerm, filterStatus, candidates]);

  return (
    <div className="max-w-[1600px] mx-auto space-y-6 px-1 md:px-0">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h2 className="text-2xl md:text-3xl font-black text-brand-accent tracking-tight">Talent Pool.</h2>
        <div className="flex gap-2 w-full md:w-auto">
          <div className="flex-1 md:w-64 bg-white px-4 py-3 rounded-2xl flex items-center gap-3 border border-white shadow-sm focus-within:ring-2 focus-within:ring-brand-blue/20 transition-all">
            <Search size={18} className="text-slate-400 shrink-0" />
            <input 
              type="text" 
              placeholder="Quick search..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-transparent outline-none text-sm font-bold w-full text-brand-dark" 
            />
          </div>
          <button 
            onClick={() => setFilterStatus(filterStatus ? null : 'Shortlisted')}
            className="bg-white p-3 rounded-2xl border border-white shadow-sm text-[#1e293b] hover:bg-slate-50 transition-colors shrink-0"
          >
            <Filter size={20}/>
          </button>
        </div>
      </div>

      <div className="bg-white rounded-[24px] md:rounded-[32px] overflow-hidden shadow-sm border border-white">
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-[10px] font-black text-slate-400 uppercase tracking-widest bg-slate-50/50">
                <th className="px-8 py-5">Candidate</th>
                <th className="px-8 py-5">Role Match</th>
                <th className="px-8 py-5">AI Score</th>
                <th className="px-8 py-5">Status</th>
                <th className="px-8 py-5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {filteredCandidates.map(candidate => (
                <CandidateDesktopRow 
                  key={candidate.id}
                  {...candidate}
                  isSelected={selectedCandidate === candidate.id}
                  showActions={showActions === candidate.id}
                  onSelect={() => setSelectedCandidate(selectedCandidate === candidate.id ? null : candidate.id)}
                  onToggleActions={() => setShowActions(showActions === candidate.id ? null : candidate.id)}
                />
              ))}
            </tbody>
          </table>
        </div>

        <div className="md:hidden divide-y divide-slate-50">
          {filteredCandidates.map(candidate => (
            <CandidateMobileCard 
              key={candidate.id}
              {...candidate}
              isSelected={selectedCandidate === candidate.id}
              showActions={showActions === candidate.id}
              onSelect={() => setSelectedCandidate(selectedCandidate === candidate.id ? null : candidate.id)}
              onToggleActions={() => setShowActions(showActions === candidate.id ? null : candidate.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function CandidateDesktopRow({ name, email, role, score, status, isSelected, showActions, onSelect, onToggleActions }: any) {
  return (
    <tr className={`hover:bg-[#e9f2f5]/40 transition-colors group cursor-pointer ${isSelected ? 'bg-[#e9f2f5]/60' : ''}`} onClick={onSelect}>
      <td className="px-8 py-5">
        <p className="font-bold text-[#1e293b] text-sm">{name}</p>
        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tight">{email}</p>
      </td>
      <td className="px-8 py-5">
        <span className="px-3 py-1 bg-[#e9f2f5] text-[#0369a1] text-[10px] font-black rounded-lg uppercase">{role}</span>
      </td>
      <td className="px-8 py-5">
        <span className="text-xl font-black text-[#1e293b]">{score}</span>
        <span className="text-[10px] font-bold text-slate-400 ml-1">%</span>
      </td>
      <td className="px-8 py-5">
        <span className="px-3 py-1 bg-emerald-100 text-emerald-600 text-[9px] font-black uppercase rounded-lg">
          {status}
        </span>
      </td>
      <td className="px-8 py-5 text-right relative">
        <button 
          onClick={(e) => { e.stopPropagation(); onToggleActions(); }}
          className="p-2 hover:bg-white rounded-xl transition-all"
        >
          <MoreHorizontal className="text-slate-300 group-hover:text-slate-500" />
        </button>
        {showActions && (
          <div className="absolute right-0 top-full mt-2 bg-white rounded-xl shadow-lg border border-slate-100 py-2 z-10 min-w-[160px]">
            <button className="w-full flex items-center gap-3 px-4 py-2 text-sm hover:bg-slate-50 transition-colors">
              <Eye size={16} />
              View Profile
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-2 text-sm hover:bg-slate-50 transition-colors">
              <Mail size={16} />
              Contact
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-2 text-sm hover:bg-slate-50 transition-colors text-red-600">
              <Archive size={16} />
              Archive
            </button>
          </div>
        )}
      </td>
    </tr>
  );
}

function CandidateMobileCard({ name, email, role, score, status, isSelected, showActions, onSelect, onToggleActions }: any) {
  return (
    <div className={`p-5 active:bg-[#e9f2f5]/40 transition-colors flex items-center justify-between ${isSelected ? 'bg-[#e9f2f5]/60' : ''}`} onClick={onSelect}>
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <p className="font-bold text-[#1e293b] text-base">{name}</p>
          <span className="px-2 py-0.5 bg-emerald-100 text-emerald-600 text-[8px] font-black uppercase rounded-md">
            {status}
          </span>
        </div>
        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tight mb-2">{email}</p>
        <div className="flex items-center gap-2">
           <span className="px-2 py-1 bg-[#e9f2f5] text-[#0369a1] text-[9px] font-black rounded-md uppercase">
            {role}
          </span>
        </div>
      </div>
      <div className="flex flex-col items-end gap-2">
        <div className="text-right">
          <span className="text-2xl font-black text-[#1e293b]">{score}</span>
          <span className="text-[10px] font-bold text-slate-400 ml-0.5">%</span>
        </div>
        <div className="relative">
          <button 
            onClick={(e) => { e.stopPropagation(); onToggleActions(); }}
            className="p-1 text-slate-300"
          >
            <MoreHorizontal size={20} />
          </button>
          {showActions && (
            <div className="absolute right-0 top-full mt-2 bg-white rounded-xl shadow-lg border border-slate-100 py-2 z-10 min-w-[160px]">
              <button className="w-full flex items-center gap-3 px-4 py-2 text-sm hover:bg-slate-50 transition-colors">
                <Eye size={16} />
                View Profile
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-2 text-sm hover:bg-slate-50 transition-colors">
                <Mail size={16} />
                Contact
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-2 text-sm hover:bg-slate-50 transition-colors text-red-600">
                <Archive size={16} />
                Archive
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}