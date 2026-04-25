"use client";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$0",
    description: "Perfect for small teams starting their AI recruitment journey.",
    features: ["Up to 50 AI Screenings", "Basic Talent Pool", "Community Support"],
    buttonText: "Get Started",
    highlight: false,
  },
  {
    name: "Professional",
    price: "$99",
    description: "Ideal for growing companies needing advanced matching.",
    features: [
      "Unlimited AI Screenings",
      "Advanced Talent Pool",
      "Priority Email Support",
      "Custom Job Profiles",
    ],
    buttonText: "Start Free Trial",
    highlight: true, 
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Scalable solutions for large institutions and agencies.",
    features: [
      "Dedicated Account Manager",
      "API Access",
      "Custom Security Compliance",
      "Onboarding & Training",
    ],
    buttonText: "Contact Sales",
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-[#e9f2f5] border-t border-slate scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-dark mb-4">Simple, transparent pricing.</h2>
          <p className="text-brand-blue font-medium">Choose the plan that works best for your team.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`p-10 rounded-3xl border ${
                plan.highlight 
                  ? "bg-brand-dark text-white border-brand-dark shadow-2xl scale-105" 
                  : "bg-brand-bg text-brand-dark border-slate-100 shadow-sm"
              } flex flex-col transition-all duration-300`}
            >
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-extrabold">{plan.price}</span>
                {plan.price !== "Custom" && <span className={`${plan.highlight ? "text-slate-400" : "text-slate-500"}`}>/month</span>}
              </div>
              <p className={`mb-8 text-sm leading-relaxed ${plan.highlight ? "text-slate-300" : "text-slate-500"}`}>
                {plan.description}
              </p>

              <ul className="space-y-4 mb-10 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-[15px]">
                    <Check size={18} className={plan.highlight ? "text-brand-blue" : "text-brand-blue"} />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-xl font-bold transition-all ${
                  plan.highlight
                    ? "bg-brand-blue text-white hover:bg-opacity-90"
                    : "bg-brand-dark text-white hover:bg-brand-blue"
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}