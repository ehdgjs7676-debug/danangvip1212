import { ShieldCheck, AlertTriangle, Scale, UserCheck, HelpCircle, Flame, Building2, Eye, Key } from 'lucide-react';
import { Language } from '../types';

interface KoreanConditionsProps {
  lang: Language;
}

export default function KoreanConditions({ lang }: KoreanConditionsProps) {
  const conditions = [
    {
      title: '베트남 정식 입국 승인 필수',
      desc: '베트남 입국이 공식 승인되어 여권 상 입국 스탬프가 찍혀 있는 유효한 외국인 개인이어야 합니다. 단기 무비자 여행객도 가능하지만 입국 자격 흠결이 없어야 계약 효력이 발생합니다.',
      icon: UserCheck
    },
    {
      title: '외교특권 대상자 배제',
      desc: '외교 특권이나 영사 면책권 대상자는 주택소유 규정이 달라질 수 있으며, 일반적인 외국인 아파트 매수자 범주에서 제외되므로 별도의 면밀한 심사가 진행됩니다.',
      icon: HelpCircle
    },
    {
      title: '건설국 공식 승인 프로젝트 한정',
      desc: '다낭시 건설국이 공식적으로 외국인 소유가 가능하다고 인정하여 고시한 주택 프로젝트에 한하여 적법하게 등기부 취득을 실행할 수 있습니다.',
      icon: Building2
    },
    {
      title: '동별 최대 30% 쿼터 제한',
      desc: '한 아파트 단지/동 내부 전체 세대의 최대 30% 이내 범위에서만 외국인 개별 소유가 제한적으로 승인됩니다. 이를 초과하여 계약할 경우 등기 발급이 무효화됩니다.',
      icon: Eye
    },
    {
      title: '기본 소유 기간 최대 50년',
      desc: '외국인 개인의 일반적인 소유 기간은 소유권증서(핑크북) 발급일로부터 최대 50년입니다. 기간 만료 이전에 합법적 요건을 구비하면 법률에 따라 연장 신청이 가능합니다.',
      icon: Key
    },
    {
      title: '베트남인과의 혼인 특례',
      desc: '베트남 국적의 배우자와 정식 혼인하고 베트남에 영구 거주하는 경우, 일반 외국인 50년 한도를 넘어 현지인과 유사한 장기 소유권 규정이 적용될 수 있습니다.',
      icon: ShieldCheck
    },
    {
      title: '외국인 간 전매 시 잔여기간 승계',
      desc: '외국인이 기존 외국인 소유자로부터 분양권을 전매하거나 등기 주택을 매수할 경우, 새로운 50년 소유권이 생기는 것이 아니라 기존 소유자의 남은 잔여기간을 그대로 승계합니다.',
      icon: Scale
    },
    {
      title: '베트남인 명의 차명매수 엄격 지양',
      desc: '베트남 현지 자격 흠결을 회피하기 위해 현지인 명의(차명)를 빌리는 주택 취득은 사후 분쟁 시 법적 보장을 전혀 받지 못하며 자금 회수가 영구 불가능해 질 수 있으므로 절대로 권장하지 않습니다.',
      icon: AlertTriangle
    }
  ];

  return (
    <section id="conditions" className="py-16 bg-white border-b border-navy-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-600 font-mono">
            Purchase Conditions for Korean Citizens
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-800 tracking-tight mt-1">
            한국인의 다낭 주거용 아파트 구입 조건
          </h2>
          <div className="h-1 w-20 bg-gold-500 mx-auto mt-3"></div>
          <p className="text-sm text-navy-400 mt-4">
            베트남 주택법상 대한민국 국민이 정상적인 주거 자산을 소유하기 위해 갖추어야 할 핵심 자격 요건과 규정들을 소개합니다.
          </p>
        </div>

        {/* Requirements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {conditions.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-navy-50/50 hover:bg-white border border-navy-100 hover:border-gold-500/30 rounded-2xl p-5 hover:shadow-lg transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="bg-navy-800 text-gold-400 p-2.5 rounded-xl w-11 h-11 flex items-center justify-center mb-4 shadow-sm group-hover:bg-gold-500 group-hover:text-navy-900 transition-colors">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold text-navy-800 text-sm mb-2">{item.title}</h3>
                  <p className="text-xs text-navy-500 leading-relaxed">{item.desc}</p>
                </div>
                <div className="mt-4 pt-2 border-t border-navy-200/40 text-[10px] text-navy-400 font-mono">
                  RULE #{String(idx + 1).padStart(2, '0')}
                </div>
              </div>
            );
          })}
        </div>

        {/* Absolute Important Checklist Box */}
        <div className="max-w-4xl mx-auto bg-navy-800 text-white rounded-2xl border-t-4 border-gold-500 p-6 sm:p-8 shadow-xl">
          <div className="flex items-center space-x-3 mb-4 pb-3 border-b border-navy-700">
            <div className="p-2 bg-gold-500 text-navy-800 rounded-lg">
              <AlertTriangle className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-gold-300">
                계약금(Deposit) 지급 전에 반드시 확인해야 할 두 가지
              </h3>
              <p className="text-[11px] text-navy-300">두 개 조건 중 하나라도 누락되면 계약금 몰수 및 등기 불능 위험에 노출됩니다.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="bg-navy-900/60 p-4 rounded-xl border border-navy-700/80">
              <div className="flex items-center space-x-2 text-gold-400 font-semibold text-sm mb-2">
                <span className="font-mono bg-gold-500 text-navy-950 rounded-full w-5 h-5 flex items-center justify-center text-xs">1</span>
                <span>프로젝트·동·호수 외국인 적격 여부</span>
              </div>
              <p className="text-xs text-navy-200 leading-relaxed">
                해당 분양 프로젝트가 건설국의 ‘외국인 주택소유 승인 대상 사업지’에 고시되어 있는지, 계약하려는 구체적 호실이 법적으로 제한된 구역이나 군사 작전 등 중요 통제 구역 범위가 아닌지 대조해야 합니다.
              </p>
            </div>

            <div className="bg-navy-900/60 p-4 rounded-xl border border-navy-700/80">
              <div className="flex items-center space-x-2 text-gold-400 font-semibold text-sm mb-2">
                <span className="font-mono bg-gold-500 text-navy-950 rounded-full w-5 h-5 flex items-center justify-center text-xs">2</span>
                <span>해당 동의 외국인 30% 쿼터 잔여 여부</span>
              </div>
              <p className="text-xs text-navy-200 leading-relaxed">
                개발사가 전체 세대수 중 이미 30%를 다른 외국인에게 배정(계약 또는 우선 순위 홀딩)했는지 반드시 확인 대장을 받아 검증해야 합니다. 이 비율이 마감되었다면 합법적 분양 계약(SPA)은 불가능합니다.
              </p>
            </div>
          </div>

          <div className="mt-6 text-center bg-navy-900 p-3 rounded-lg border border-navy-700">
            <p className="text-xs text-gold-200">
              💡 <span className="font-semibold">다낭 세이프홈 지원 사항:</span> 당사에 상담 신청 시, 희망 프로젝트 동호수 대장의 해당 30% 쿼터 실시간 상황 및 해당 개발사의 등기 교부 진행 현황 일지 조회를 무상 지원합니다.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
