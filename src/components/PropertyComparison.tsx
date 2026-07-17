import { HelpCircle, Check, AlertTriangle, Info } from 'lucide-react';
import { Language } from '../types';
import { COMPARISON_DATA, DICTIONARY } from '../data';

interface PropertyComparisonProps {
  lang: Language;
}

export default function PropertyComparison({ lang }: PropertyComparisonProps) {
  const t = DICTIONARY[lang];

  return (
    <section id="compare" className="py-16 bg-white border-b border-navy-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-800 tracking-tight">
            주거용 아파트와 콘도텔의 법적 권리 비교
          </h2>
          <div className="h-1 w-20 bg-gold-500 mx-auto mt-3"></div>
          <p className="text-sm text-navy-400 mt-4">
            베트남에서 '콘도' 또는 '아파트'를 분양받을 때 가장 흔히 겪는 권리 혼동을 명확하게 짚어드립니다. 
            토지 사용 성격과 등기(핑크북) 발급 권리는 하늘과 땅 차이입니다.
          </p>
        </div>

        {/* Responsive Table Wrapper */}
        <div className="lg:hidden text-center text-[11px] font-semibold text-gold-600 bg-gold-50 border border-gold-200 py-1.5 rounded-lg mb-3 animate-pulse flex items-center justify-center space-x-1">
          <span>👈 좌우로 밀어서(스크롤) 전체 법적 비교표를 확인하세요 👉</span>
        </div>
        <div className="overflow-x-auto shadow-xl rounded-2xl border border-navy-100">
          <table className="w-full min-w-[700px] border-collapse text-left">
            <thead>
              <tr className="bg-navy-700 text-white text-xs uppercase tracking-wider font-mono">
                <th className="py-4 px-6 font-bold w-1/4">구분 (Criteria)</th>
                <th className="py-4 px-6 font-bold w-3/8 bg-navy-800 text-gold-300 border-r border-navy-600">
                  주거용 아파트 (Căn hộ chung cư)
                </th>
                <th className="py-4 px-6 font-bold w-3/8">
                  콘도텔·관광용 아파트 (Condotel)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-navy-100 text-sm">
              {COMPARISON_DATA.map((row, index) => (
                <tr key={index} className="hover:bg-navy-50/50 transition-colors">
                  {/* Criteria column */}
                  <td className="py-4 px-6 font-bold text-navy-800 bg-navy-50/30">
                    {row.criteria}
                  </td>
                  
                  {/* Residential column */}
                  <td className="py-4 px-6 text-navy-700 font-medium border-r border-navy-100 bg-gold-50/20">
                    <div className="flex items-start space-x-2">
                      <div className="p-0.5 bg-emerald-100 rounded text-emerald-700 mt-0.5 shrink-0">
                        <Check className="h-3.5 w-3.5" />
                      </div>
                      <span>{row.residential}</span>
                    </div>
                  </td>
                  
                  {/* Condotel column */}
                  <td className="py-4 px-6 text-navy-500">
                    <div className="flex items-start space-x-2">
                      <div className="p-0.5 bg-amber-100 rounded text-amber-700 mt-0.5 shrink-0">
                        <AlertTriangle className="h-3.5 w-3.5" />
                      </div>
                      <span>{row.condotel}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bold warning callouts underneath */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-rose-50 border-l-4 border-rose-500 rounded-r-xl p-5">
            <div className="flex items-center space-x-2 text-rose-800 font-bold mb-2">
              <AlertTriangle className="h-5 w-5 shrink-0" />
              <span>권리 형태 오해 주의</span>
            </div>
            <p className="text-sm text-rose-700 font-medium leading-relaxed">
              “같은 ‘콘도’라는 이름으로 광고되어도 법적 권리는 완전히 다를 수 있습니다.”
            </p>
            <p className="text-xs text-rose-600 mt-1">
              관광용 콘도텔은 실거주 등록(인구 대조)이 사실상 불가능하고, 장기 거주 목적보다 임대 위탁 수수료 정산에 특화된 상업시설에 가깝습니다.
            </p>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-xl p-5">
            <div className="flex items-center space-x-2 text-amber-800 font-bold mb-2">
              <Info className="h-5 w-5 shrink-0" />
              <span>최우선 검토 기준</span>
            </div>
            <p className="text-sm text-amber-700 font-medium leading-relaxed">
              “가격보다 먼저 토지사용 목적, 소유권증서 발급 가능 여부와 프로젝트 잔여기간을 확인해야 합니다.”
            </p>
            <p className="text-xs text-amber-600 mt-1">
              상업용 토지는 국가 회수 시 보상 청구가 어려울 수 있으며, 임대 위탁 계약서 내부의 불합리한 조건(독소조항)이나 지연이자 보상 약정을 면밀히 살펴야 합니다.
            </p>
          </div>
        </div>

        {/* Helpful Tip */}
        <div className="mt-8 text-center">
          <p className="text-xs text-navy-400">
            ※ 당사는 다낭시 건설국 소유 승인 원본 고시와 개발사 세금 납부 이력을 한국인 법무팀에서 일대일 대조 대행해 드립니다.
          </p>
        </div>

      </div>
    </section>
  );
}
