import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto bg-brand-bg backdrop-blur-md sticky top-0 z-50">
      <div className="flex items-center gap-2">
        <div className="w-9 h-9 bg-white/80 rounded-lg flex items-center justify-center">
       <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <defs>
              <linearGradient id="boltGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#0ea5e9" /> 
                <stop offset="100%" stopColor="#0284c7" /> 
              </linearGradient>
            </defs>
            <path 
              d="M13 2L3 14H12L11 22L21 10H12L13 2Z" 
              fill="url(#boltGradient)" 
            />
          </svg>
        </div>
        <span className="font-bold text-xl tracking-tight text-brand-blue">
          Gwiza
        </span>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
        <Link href="#features" className="hover:text-brand-blue transition-colors">Features</Link>
        <Link href="#how-it-works" className="hover:text-brand-blue transition-colors">How It Works</Link>
        <Link href="#pricing" className="hover:text-brand-blue transition-colors">Pricing</Link>
      </div>

      <div className="flex items-center gap-4">
        <Link href="/login">
        <button className="text-sm font-semibold text-brand-dark hover:text-brand-blue transition-colors">
          Log In
        </button>
        </Link>
        <Link href="/signup">
        <button className="bg-brand-accent text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-blue transition-all shadow-md">
          Sign Up Free
        </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;