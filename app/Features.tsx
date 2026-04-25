import { Brain, Users, Briefcase, Target, BarChart3, Shield } from "lucide-react";

const features = [
  {
    title: "AI-Powered Screening.",
    desc: "Our intelligent algorithms analyze resumes and match candidates to your job requirements with precision.",
    icon: <Brain className="text-white" size={24} />,
  },
  {
    title: "Talent Pool Management.",
    desc: "Build and manage your talent database with comprehensive profiles and easy search capabilities.",
    icon: <Users className="text-white" size={24} />,
  },
  {
    title: "Job Creation Tools.",
    desc: "Create detailed job profiles with required skills, experience levels, and custom criteria.",
    icon: <Briefcase className="text-white" size={24} />,
  },
  {
    title: "Smart Matching.",
    desc: "Get ranked shortlists of candidates based on skill match, experience, and cultural fit.",
    icon: <Target className="text-white" size={24} />,
  },
  {
    title: "Analytics Dashboard.",
    desc: "Track your hiring metrics and gain insights into your recruitment pipeline performance.",
    icon: <BarChart3 className="text-white" size={24} />,
  },
  {
    title: "Data Security.",
    desc: "Enterprise-grade security ensures your candidate data is always protected and compliant.",
    icon: <Shield className="text-white" size={24} />,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-[#e9f2f5] border-t border-[#000]-100 scroll-mt-[80px]" >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-dark mb-4">
            Everything you need to hire smarter.
          </h2>
          <p className="text-brand-blue font-medium">
            Our AI-powered platform streamlines your entire recruitment workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-brand-bg p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="w-12 h-12 bg-brand-accent rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-dark transition-colors">
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-bold text-brand-dark mb-3">
                {feature.title}
              </h3>
              
              <p className="text-slate-500 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}