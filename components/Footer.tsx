"use client";
import Link from 'next/link';
import { Mail, Phone, MapPin, Zap } from 'lucide-react';
import { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  return (
    <footer className="bg-[#2E5A88] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-brand-blue rounded-lg flex items-center justify-center">
                <Zap size={18} fill="white" className="text-white" />
              </div>
              <span className="font-bold text-2xl tracking-tight">Gwiza</span>
            </div>
            <p className="text-slate-400 leading-relaxed text-[15px]">
              The leading AI-powered platform for skill challenges and talent matching. 
              We bridge the gap between education and employment.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 bg-brand-accent rounded-full flex items-center justify-center hover:bg-brand-blue transition-all">
        
              </Link>
              <Link href="#" className="w-10 h-10 bg-brand-accent rounded-full flex items-center justify-center hover:bg-brand-blue transition-all">
            
              </Link>
              <Link href="#" className="w-10 h-10 bg-brand-accent rounded-full flex items-center justify-center hover:bg-brand-blue transition-all">
                
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Platform</h4>
            <ul className="space-y-4 text-slate-400 text-[15px]">
              <li><Link href="#challenges" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="#features" className="hover:text-white transition-colors">Features</Link></li>
              <li><Link href="#how-it-works" className="hover:text-white transition-colors">How It Works</Link></li>
              <li><Link href="#pricing" className="hover:text-white transition-colors">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4 text-slate-400 text-[15px]">
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-brand-blue" />
                info@gwizaai.africa
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-brand-blue" />
                +250 788 000 000
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brand-blue mt-1" />
                Kigali, Rwanda <br /> UTC House
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Stay Updated</h4>
            <p className="text-slate-400 text-sm mb-4">Get the latest challenges and news.</p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-brand-accent border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand-blue placeholder:text-slate-400 outline-none"
              />
              <button 
                type="button"
                onClick={() => {
                  if (email) {
                    alert(`Subscribed with ${email}!`);
                    setEmail('');
                  } else {
                    alert('Please enter an email address');
                  }
                }}
                className="bg-brand-blue text-white font-bold py-3 rounded-xl hover:bg-opacity-90 transition-all"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-white/80">
          <p>© 2026 GwizaAI. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white">Privacy Policy</Link>
            <Link href="#" className="hover:text-white">Terms of Service</Link>
            <Link href="#" className="hover:text-white">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;