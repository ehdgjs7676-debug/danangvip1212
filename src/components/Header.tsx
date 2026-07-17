import { useState } from 'react';
import { Globe, Menu, X, ShieldCheck, MessageCircle, Send } from 'lucide-react';
import { Language } from '../types';
import { DICTIONARY } from '../data';

interface HeaderProps {
  lang: Language;
  setLang: (lang: Language) => void;
  activeSection: string;
  setActiveSection: (sec: string) => void;
}

export default function Header({ lang, setLang, activeSection, setActiveSection }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = DICTIONARY[lang];

  const navItems = [
    { id: 'compare', label: t.navCompare },
    { id: 'properties', label: t.navProperties },
    { id: 'conditions', label: t.navConditions },
    { id: 'calculator', label: t.navCalculator },
    { id: 'checklist', label: t.navChecklist },
    { id: 'inquiry', label: t.navInquiry },
    { id: 'dashboard', label: t.navDashboard }
  ];

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-navy-800 text-white border-b border-gold-500/20 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <div className="bg-gold-500 text-navy-800 p-2 rounded-lg flex items-center justify-center shadow-lg">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight gold-gradient-text font-sans">
                {t.brandName}
              </h1>
              <p className="text-[10px] text-gold-200 uppercase tracking-widest font-mono font-bold">
                Da Nang Real Estate Audit
              </p>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-2 rounded-md text-xs font-medium transition-all ${
                  activeSection === item.id
                    ? 'text-gold-400 bg-navy-700 border-b-2 border-gold-400'
                    : 'text-navy-200 hover:text-white hover:bg-navy-700/50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Language Selector & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center bg-navy-900 border border-navy-700 rounded-lg p-1">
              <Globe className="h-3.5 w-3.5 text-gold-400 mx-2" />
              {(['ko', 'en', 'vi'] as Language[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-2 py-1 text-xs rounded transition-all ${
                    lang === l
                      ? 'bg-gold-500 text-navy-900 font-bold'
                      : 'text-navy-300 hover:text-white'
                  }`}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Quick Consultation Badges */}
            <div className="flex space-x-2">
              <a
                href="https://pf.kakao.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-1 bg-yellow-400 hover:bg-yellow-300 text-yellow-950 px-3 py-1.5 rounded-full text-[11px] font-semibold transition shadow-md"
              >
                <MessageCircle className="h-3.5 w-3.5" />
                <span>Kakao</span>
              </a>
              <a
                href="https://telegram.org"
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-1 bg-sky-500 hover:bg-sky-400 text-white px-3 py-1.5 rounded-full text-[11px] font-semibold transition shadow-md"
              >
                <Send className="h-3.5 w-3.5" />
                <span>Telegram</span>
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-3">
            {/* Quick Lang for Mobile */}
            <div className="flex items-center bg-navy-900 border border-navy-700 rounded-lg p-0.5">
              {(['ko', 'en', 'vi'] as Language[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-1.5 py-0.5 text-[10px] rounded transition-all ${
                    lang === l ? 'bg-gold-500 text-navy-900 font-bold' : 'text-navy-300'
                  }`}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-navy-200 hover:text-white focus:outline-none"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-navy-900 border-t border-navy-700 px-4 pt-4 pb-6 space-y-3 shadow-inner">
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-3 py-2.5 rounded-md text-sm font-medium transition-all ${
                  activeSection === item.id
                    ? 'text-gold-400 bg-navy-800 border-l-4 border-gold-400'
                    : 'text-navy-200 hover:text-white hover:bg-navy-800'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="border-t border-navy-800 pt-3 flex flex-col space-y-2">
            <p className="text-xs text-navy-400 font-semibold px-3">빠른 무료 SNS 상담</p>
            <div className="grid grid-cols-2 gap-2 px-3">
              <a
                href="https://pf.kakao.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center space-x-2 bg-yellow-400 hover:bg-yellow-300 text-yellow-950 py-2 rounded-lg text-xs font-semibold transition"
              >
                <MessageCircle className="h-4 w-4" />
                <span>카카오톡 상담</span>
              </a>
              <a
                href="https://telegram.org"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center space-x-2 bg-sky-500 hover:bg-sky-400 text-white py-2 rounded-lg text-xs font-semibold transition"
              >
                <Send className="h-4 w-4" />
                <span>텔레그램 상담</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
