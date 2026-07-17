import { Shield, MessageCircle, Send, Mail, MapPin, Scale } from 'lucide-react';
import { Language } from '../types';
import { DICTIONARY } from '../data';

interface FooterProps {
  lang: Language;
}

export default function Footer({ lang }: FooterProps) {
  const t = DICTIONARY[lang];

  return (
    <footer className="bg-navy-950 text-white border-t border-navy-800">
      
      {/* Disclaimer section with maximum visual clarity */}
      <div className="bg-navy-900 border-b border-navy-850 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy-950 rounded-2xl p-6 sm:p-8 border border-navy-800 space-y-4">
            <div className="flex items-center space-x-2 text-gold-400 font-bold text-xs uppercase tracking-widest border-b border-navy-800 pb-2">
              <Scale className="h-4 w-4 text-gold-400 shrink-0" />
              <span>법률 및 세금 면책 자문 공고 (Legal & Tax Disclaimer)</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[11px] text-navy-400 leading-relaxed font-normal">
              <div className="space-y-3">
                <p>
                  • <span className="font-semibold text-navy-200">본 사이트의 정보는 다낭 부동산 매수 검토를 위한 일반적인 안내입니다.</span> 당사는 어떠한 법적 분양 보장 또는 확정 등기를 불법 대행하지 않으며, 공시 자료 및 인허가 원본 대조 정보만을 정리하여 한국인 투자자가 베트남 부동산법을 오독하는 것을 선 예방합니다.
                </p>
                <p>
                  • <span className="font-semibold text-navy-200">외국인 소유 가능 여부, 세율, 송금 절차와 분양 조건은 법령, 행정기관, 개발사 및 개별 프로젝트 상황에 따라 실시간 변경될 수 있습니다.</span> 계약 체결 당일까지 시 건설국의 추가 고시 공문을 재대조해야 합니다.
                </p>
              </div>

              <div className="space-y-3">
                <p>
                  • <span className="font-semibold text-navy-200">최종 계약 전에는 베트남 현지 변호사, 세무전문가, 관할 건설기관과 거래은행의 확인이 필요합니다.</span> 독자적 판단으로 보증금이 송금되어 발생하는 시행사와의 귀책 마찰 분쟁에 대하여 당사는 직접적인 법적 중개 손실 보상을 지지하지 않습니다.
                </p>
                <p>
                  • <span className="font-semibold text-navy-200">사이트에 등록된 매물이라도 특정 동·호수의 외국인 쿼터가 소진되면 외국인 명의 계약이 제한될 수 있습니다.</span> 전매(Resale) 거래 시에는 전 매도인의 소 소유 일지에 명시된 잔여 연한 한도를 승계하는 조건인지 반드시 검토되어야 합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Branding */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand Intro (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gold-500 text-navy-950 p-1.5 rounded-lg">
                <Shield className="h-5 w-5" />
              </div>
              <span className="text-lg font-bold tracking-tight gold-gradient-text uppercase font-sans">
                {t.brandName}
              </span>
            </div>
            <p className="text-xs text-navy-400 leading-relaxed">
              다낭 코리아 리얼티 법률 공조 법인 파트너쉽 연계 시스템.<br />
              한국의 외환거래 자격 검수 및 베트남 현지 동별 쿼터 대장 원본 실사 조사를 바탕으로 안전한 거래 생태계를 지지합니다.
            </p>
          </div>

          {/* Quick Contact & Info (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gold-300">합법 실무 법인 및 파트너 자격 정보</h4>
            <div className="space-y-2 text-xs text-navy-400 font-mono">
              <div className="flex items-center space-x-2">
                <MapPin className="h-3.5 w-3.5 text-navy-500 shrink-0" />
                <span>다낭시 하이쩌우군 바익당 한강변 전담 연락 사무소</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-3.5 w-3.5 text-navy-500 shrink-0" />
                <span>베트남 부동산 시행자문 라이센스 No. DN-40292-RE</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-3.5 w-3.5 text-navy-500 shrink-0" />
                <span>support@danangsafehome.com</span>
              </div>
            </div>
          </div>

          {/* Consultation Links (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gold-300">SNS 상담 채널 (24/7 한국어 응대)</h4>
            <p className="text-xs text-navy-400 leading-normal">
              다낭 현지 대조 요원 및 외환 전문 행정사 고문이 대기하고 있습니다. 아래 공식 주소로 즉시 문의를 개시할 수 있습니다.
            </p>
            <div className="flex flex-col space-y-2">
              <a
                href="https://pf.kakao.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-2 bg-yellow-400 text-yellow-950 font-bold px-4 py-2.5 rounded-xl text-xs transition hover:bg-yellow-300 shadow-md w-fit"
              >
                <MessageCircle className="h-4 w-4" />
                <span>카카오톡 1:1 상담 채널 연결</span>
              </a>
              <a
                href="https://telegram.org"
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-2 bg-sky-500 text-white font-bold px-4 py-2.5 rounded-xl text-xs transition hover:bg-sky-400 shadow-md w-fit"
              >
                <Send className="h-4 w-4" />
                <span>텔레그램 공식 채널 연결 (@danangsafe)</span>
              </a>
            </div>
          </div>

        </div>

        {/* Legal Linkages and copy right bar */}
        <div className="mt-12 pt-8 border-t border-navy-900 flex flex-col sm:flex-row sm:items-center sm:justify-between text-[11px] text-navy-500 space-y-3 sm:space-y-0">
          <p>© 2026 다낭 세이프홈 (SafeHome Da Nang) Co., Ltd. All Rights Reserved.</p>
          <div className="flex space-x-4">
            <a href="#conditions" className="hover:text-white transition-colors">이용약관 (Terms)</a>
            <span className="text-navy-800">|</span>
            <a href="#checklist" className="hover:text-white transition-colors">개인정보처리방침 (Privacy Policy)</a>
            <span className="text-navy-800">|</span>
            <a href="#consultant" className="hover:text-white transition-colors">공인중개 보수요율 고지</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
