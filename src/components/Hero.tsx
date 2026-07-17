import { ShieldAlert, Search, CheckCircle, Flame, Building2, Eye, Key, MapPin } from 'lucide-react';
import { Language } from '../types';
import { DICTIONARY } from '../data';

interface HeroProps {
  lang: Language;
  onFilterSelect: (filterId: string) => void;
}

export default function Hero({ lang, onFilterSelect }: HeroProps) {
  const t = DICTIONARY[lang];

  // Quick search tags
  const searchTags = [
    { id: 'residential', label: '주거용 아파트', icon: Building2 },
    { id: 'condotel', label: '콘도텔·관광용 아파트', icon: ShieldAlert },
    { id: 'new-launch', label: '신축 분양', icon: Flame },
    { id: 'completed', label: '완공 아파트', icon: CheckCircle },
    { id: 'live-recommend', label: '실거주 추천', icon: Key },
    { id: 'lease-recommend', label: '장기임대 추천', icon: MapPin },
    { id: 'foreigner-only', label: '외국인 구입 가능 매물', icon: Eye },
  ];

  const handleTagClick = (id: string) => {
    onFilterSelect(id);
    const element = document.getElementById('properties');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="relative navy-gradient text-white overflow-hidden py-16 sm:py-24 border-b border-gold-500/10">
      {/* Background Graphic Patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-gold-400 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-blue-500 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Slogan & Info column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-gold-500/10 border border-gold-500/30 px-3 py-1 rounded-full">
              <span className="flex h-2 w-2 rounded-full bg-gold-400 animate-pulse"></span>
              <span className="text-xs font-semibold tracking-wider uppercase text-gold-300 font-mono">
                Vietnam Legal Due Diligence Service
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {t.tagline}
            </h1>

            <p className="text-base sm:text-lg text-navy-200 leading-relaxed max-w-xl">
              {t.subTagline}
            </p>

            {/* Quick Consultation Channel Bar */}
            <div className="pt-4 flex flex-wrap gap-3">
              <a
                href="#inquiry"
                className="bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold px-6 py-3.5 rounded-lg text-sm transition-all shadow-lg shadow-gold-500/20 hover:scale-[1.02] flex items-center space-x-2"
              >
                <span>무료 맞춤형 매물 문의하기</span>
              </a>
              <a
                href="https://pf.kakao.com"
                target="_blank"
                rel="noreferrer"
                className="bg-yellow-400 hover:bg-yellow-300 text-yellow-950 font-bold px-5 py-3.5 rounded-lg text-sm transition-all flex items-center space-x-2"
              >
                <span>카카오톡 즉시 연결</span>
              </a>
            </div>

            {/* Micro Trust badges */}
            <div className="pt-6 border-t border-navy-700 grid grid-cols-3 gap-4 max-w-lg">
              <div>
                <p className="text-xl sm:text-2xl font-bold text-gold-400 font-mono">100%</p>
                <p className="text-xs text-navy-300">권리관계 선검증 완료</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold text-gold-400 font-mono">0건</p>
                <p className="text-xs text-navy-300">소유권 분쟁 사고율</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold text-gold-400 font-mono">전문가</p>
                <p className="text-xs text-navy-300">한-베 합동 현지 분석</p>
              </div>
            </div>
          </div>

          {/* Right side Visual / Main Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md bg-navy-800/80 backdrop-blur-sm border border-gold-500/30 rounded-2xl p-6 shadow-2xl">
              <div className="absolute -top-3 -right-3 bg-red-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow animate-bounce">
                CRITICAL WARNING
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-red-500/20 rounded-lg text-red-400 mt-1">
                    <ShieldAlert className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gold-300">"콘도"와 "아파트"는 다릅니다.</h3>
                    <p className="text-xs text-navy-200 mt-1 leading-relaxed">
                      베트남 부동산은 같은 빌딩이어도 토지 사용 목적(주거용 vs 상업용)과 법령상 외국인 분양 쿼터가 다릅니다. 이 차이를 모르고 계약하면 소유권증서 발급이 원천 차단됩니다.
                    </p>
                  </div>
                </div>

                <div className="p-3 bg-navy-900/60 rounded-xl border border-navy-700 text-xs text-navy-300 space-y-2">
                  <div className="flex justify-between">
                    <span className="font-semibold text-white">1. 외국인 30% 쿼터 제한</span>
                    <span className="text-red-400">필수 체크</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-white">2. 토지사용 목적 주거용 여부</span>
                    <span className="text-red-400">필수 체크</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-white">3. 다낭시 외국인 소유 승인</span>
                    <span className="text-red-400">필수 체크</span>
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-[11px] text-gold-400 italic font-medium">
                    "매수 계약서에 사인하기 전, 10분만 대조해보세요."
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Quick Search Tag Filters Bar */}
        <div className="mt-16 bg-navy-800/40 backdrop-blur-sm border border-navy-700/60 rounded-2xl p-5">
          <div className="flex items-center space-x-2 text-gold-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Search className="h-4 w-4" />
            <span>테마별 빠른 법률 분석 검색 (Quick Lookup)</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {searchTags.map((tag) => {
              const Icon = tag.icon;
              return (
                <button
                  key={tag.id}
                  onClick={() => handleTagClick(tag.id)}
                  className="flex items-center space-x-1.5 bg-navy-900 hover:bg-gold-500 hover:text-navy-900 border border-navy-700 hover:border-gold-400 text-xs font-medium px-3.5 py-2 rounded-lg transition-all text-navy-200"
                >
                  <Icon className="h-3.5 w-3.5" />
                  <span>{tag.label}</span>
                </button>
              );
            })}
          </div>
        </div>
        
      </div>
    </section>
  );
}
