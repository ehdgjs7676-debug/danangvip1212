import { Award, ShieldCheck, HeartHandshake, BookOpen, AlertCircle, Sparkles } from 'lucide-react';
import { Language } from '../types';

interface ConsultantProfileProps {
  lang: Language;
}

export default function ConsultantProfile({ lang }: ConsultantProfileProps) {
  const partners = [
    {
      name: '김동헌 (Dongheon Kim)',
      role: '한국 부동산 전문 고문 / 현지 권리관계 조사 디렉터',
      licenseKo: '대한민국 공인중개사 자격 보유',
      expKo: '국내 부동산 자산관리 및 시행 대행 12년 경력',
      expVi: '베트남 다낭 거주 및 법인 협업 자문 6년 경력',
      desc: '한국 공인중개사 자격은 베트남 현지에서 독점적 중개 행위를 자동으로 허가하는 것이 아니므로, 다낭 현지 법률 대리인 및 시행 법인과의 공조 계약서를 기반으로 하여, 오직 안전성 검토 및 한국인 송금 신고 검수 상담만을 전담합니다.',
      skills: ['한국 외국환은행 해외부동산 취득신고 검수', '시행 계약서(SPA) 독소 조항 대조 분석', '다낭 주요 주거 프로젝트 이력 실사']
    },
    {
      name: 'Chau Thi Tieu Bao (차우 티 티에우 바오)',
      role: '베트남 공인중개사 (Chuyên viên Môi giới BĐS) / 현지 파트너 법률 대리인',
      licenseKo: '베트남 건설부 공인 중개사 자격 보유 (Chứng chỉ hành nghề)',
      expKo: '다낭 관할 토지 대장 관리 및 신축 인허가 서류 분석 9년 경력',
      expVi: '베트남 다낭 현지 합법 중개 법인 소속 실무 파트너',
      desc: '베트남 부동산 법률 제 159조 및 외국인 소유 제한 조항에 근거하여, 다낭시 건설국이 공식 교부하는 외국인 분양 승인 공문 원본 분석 및 동별 30% 한도 쿼터 수납 대장의 실시간 원본 조회를 정식 처리합니다.',
      skills: ['다낭 건설국 외국인 분양 적격 프로젝트 필터링', '소유권증서(핑크북) 발급 적격성 현지 실무 원본 대조', '베트남 양도세(2%) 및 보관 대금 세무 공조']
    }
  ];

  return (
    <section id="consultant" className="py-16 bg-white border-b border-navy-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-600 font-mono">
            Professional & Trusted Advisory Team
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-800 tracking-tight mt-1">
            신뢰할 수 있는 전문 상담진 소개
          </h2>
          <div className="h-1 w-20 bg-gold-500 mx-auto mt-3"></div>
          <p className="text-sm text-navy-400 mt-4">
            한국의 세무 신고 및 송금 절차부터 베트남 현지의 합법적인 소유권 심사까지, 
            과장과 약속 위반 없이 각 영역의 공인 자격을 구비한 전문가들이 협조하여 안전한 자문 서비스를 제공합니다.
          </p>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {partners.map((partner, pIdx) => (
            <div
              key={pIdx}
              className="bg-navy-50/40 border border-navy-100 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:shadow-xl hover:border-gold-500/20 transition-all"
            >
              <div className="space-y-4">
                {/* Header Profile Badge */}
                <div className="flex items-start space-x-4">
                  <div className="bg-navy-800 text-gold-400 p-3 rounded-2xl shrink-0 shadow">
                    <Award className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-navy-800 tracking-tight">{partner.name}</h3>
                    <p className="text-xs text-gold-600 font-semibold">{partner.role}</p>
                  </div>
                </div>

                {/* Sub licenses */}
                <div className="p-3 bg-white border border-navy-100 rounded-xl space-y-1.5 text-xs">
                  <div className="flex items-center space-x-2 text-navy-700 font-medium">
                    <span className="w-1.5 h-1.5 bg-gold-500 rounded-full"></span>
                    <span>{partner.licenseKo}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-navy-500">
                    <span className="w-1.5 h-1.5 bg-navy-300 rounded-full"></span>
                    <span>{partner.expKo}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-navy-500">
                    <span className="w-1.5 h-1.5 bg-navy-300 rounded-full"></span>
                    <span>{partner.expVi}</span>
                  </div>
                </div>

                {/* Desc */}
                <p className="text-xs text-navy-600 leading-relaxed italic">
                  "{partner.desc}"
                </p>

                {/* Core Expertise bullets */}
                <div className="space-y-2">
                  <h4 className="text-[11px] font-bold text-navy-400 uppercase tracking-wider">주요 전담 자문 영역</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {partner.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="bg-navy-800/5 text-navy-700 text-[10px] font-semibold px-2.5 py-1 rounded-md border border-navy-100"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Verified Badge */}
              <div className="mt-6 pt-4 border-t border-navy-100 flex items-center justify-between text-xs text-navy-400">
                <span className="font-mono font-bold text-navy-300">#SAFE_CONSULT_ST_0{pIdx+1}</span>
                <span className="flex items-center space-x-1 text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  <span>검증완료 (Verified Advisor)</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Strict Caution & Zero Over-Promising Policy Callout */}
        <div className="bg-rose-50/50 border border-rose-200 rounded-2xl p-6">
          <div className="flex items-start space-x-3 mb-4">
            <AlertCircle className="h-5 w-5 text-rose-600 shrink-0 mt-0.5" />
            <div>
              <h3 className="text-xs font-bold text-rose-800 uppercase tracking-wider">정직하고 보수적인 거래 원칙 (사용 불가 금지어 규칙 준수)</h3>
              <p className="text-[11px] text-rose-600 mt-0.5">당사 자문 서비스는 베트남 건설부 및 국조세법 규정을 투명하게 전달하며, 다음의 입증 불가능한 보장 문구 사용을 철저히 금지합니다.</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 pt-1">
            {[
              '베트남 정부 공식 승인 사칭 금지',
              '제휴가 없는 임의의 시행사 로고 도용 절대 금지',
              '무조건 소유권증서 발급 보장 금지',
              '외국인 100% 무조건 구입 가능 사칭 금지',
              '투자 원금 보장 약속 배제',
              '수익률 보장 및 가격 상승 유도 문구 금지'
            ].map((rule, rIdx) => (
              <div key={rIdx} className="bg-white border border-rose-100 rounded-xl p-3 text-[10px] text-rose-800 text-center font-semibold leading-normal shadow-sm flex items-center justify-center">
                <span>{rule}</span>
              </div>
            ))}
          </div>

          <div className="mt-4 text-center">
            <p className="text-[10px] text-navy-400 italic">
              * 베트남 아파트는 법적 소유 요건을 정상적으로 충족하더라도, 시행사의 조세 체납이나 서류 미비 시 핑크북 발행이 다년간 지연될 수 있습니다. 당사는 계약 전에 이를 실질 조사하여 리포팅합니다.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
