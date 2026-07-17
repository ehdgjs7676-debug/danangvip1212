import { useState } from 'react';
import {
  Send,
  Scale,
  Percent,
  AlertOctagon,
  FileText,
  DollarSign,
  HelpCircle,
  TrendingUp,
  ClipboardCheck,
  ShieldCheck,
  MapPin,
  Clock
} from 'lucide-react';
import { Language } from '../types';

interface RemittanceGuideProps {
  lang: Language;
}

export default function RemittanceGuide({ lang }: RemittanceGuideProps) {
  const [activeTab, setActiveTab] = useState<'remit' | 'payment' | 'tax'>('remit');

  // Remittance Steps
  const remittanceSteps = [
    {
      step: '01',
      title: '한국 외환 거주자 자격 확인',
      desc: '송금 신청자가 대한민국 세법 및 외국환거래법상 ‘거주자’ 요건에 해당하여 정식 은행 신고를 할 수 있는 지위인지 검토합니다.'
    },
    {
      step: '02',
      title: '지정거래 외국환은행 상담',
      desc: '시중 은행 중 한 곳을 주거래 지정 외국환은행으로 설정하여 해외부동산 취득을 위한 사전 전담 부서 상담을 예약합니다.'
    },
    {
      step: '03',
      title: '해외부동산 취득 정식 신고',
      desc: '부동산 가계약서 또는 청약 문건 등을 첨부하여 계약금 송금 전에 ‘해외부동산 취득신고서’ 및 관련 서류를 은행에 신고 접수합니다.'
    },
    {
      step: '04',
      title: '지정 구좌를 통한 분양대금 송금',
      desc: '사전 승인된 취득신고 범위 안에서 계약금, 중도금, 잔금을 전액 해당 지정 외국환은행의 공식 창구망 및 송금 승인망을 통해 순차 송금합니다.'
    },
    {
      step: '05',
      title: '취득 완료 후 3개월 내 사후 보고',
      desc: '주택 인도가 완료되고 대금 지급이 최종 마감된 시점으로부터 3개월 이내에 취득보고서 등 사후 입증 서류를 거래은행에 제출해야 합니다.'
    },
    {
      step: '06',
      title: '임대수입/매각대금 한국 송금 확인',
      desc: '추후 임대 수입 및 매도 대금을 합법적으로 한국에 송금(회수)하려면 모든 초기 자금 유입이 정식 은행망을 거쳤다는 송금 영수증과 자금출처 증빙 자료가 완벽히 있어야 합니다.'
    }
  ];

  // Documents to Keep
  const requiredDocuments = [
    { title: '매매계약서 (SPA)', desc: '개발사 또는 매도인과 체결한 주택 구매 정식 계약서 원본' },
    { title: '대금 납부 영수증', desc: '예약금 및 중도금 입금 시 개발사 도장이 날인되어 발행되는 공식 수납증' },
    { title: '송금확인증 및 SWIFT 자료', desc: '한국 은행에서 송금 시 발행하는 해외송금 영수증과 전산 SWIFT 전문 자료' },
    { title: '베트남 공식 세금계산서', desc: '베트남 국세청 기준의 적색 공식 전자세금계산서 (Hóa đơn đỏ)' },
    { title: '소유권증서 (핑크북)', desc: '취득 이후 다낭시 토지등록소에서 발행하는 등기부 권리증서' },
    { title: '임대 및 매각계약서', desc: '자금 회수 증빙에 필수적인 임대차 계약 증서 및 양도 전매 공증서' }
  ];

  // Legal caps on payment schedules
  const scheduleCaps = [
    { label: '예약금 및 청약 계약금', cap: '분양가의 최대 5% 수준', desc: '정식 분양계약서 작성 이전 호실 확보를 위해 개발사에 최초 예치하는 홀딩금.' },
    { label: '첫 대금 납부 한도', cap: '가계약금 합산 최대 30%', desc: '정식 분양계약서(SPA)를 체결하는 당일 혹은 약정일 기준 납입 총액 한도.' },
    { label: '주택 인도 전 누적 납부', cap: '통상 최대 70% 법정 제한', desc: '아파트 준공이 완료되어 주택 인도 안내문(Handover Notice)을 수령하기 전까지의 누적 납부 한도.' },
    { label: '외국계 시행사 특례 한도', cap: '일부 시행사별 요건 상이', desc: '자본금이 보증된 해외 투자 시행사 프로젝트의 경우 국토부 승인에 따라 법적 한도 비율이 소폭 차이가 있을 수 있음.' },
    { label: '소유권증서 신청 전 한도', cap: '최대 95%', desc: '주택 인도를 완료하여 거주 승인이 떨어졌으나 핑크북이 공식 등재되어 수령하기 직전까지 시행사가 가득할 수 있는 대금 상한.' },
    { label: '마지막 잔금 청산', cap: '나머지 최종 5%', desc: '개별 소유권증서(핑크북)가 정식 발행되어 매수자 명의로 교부되는 시점에 전액 지급 및 청산.' }
  ];

  // Taxes
  const taxItems = [
    { stage: '신축 매수', item: '부가가치세 (VAT 10%)', basis: '주거용 아파트 분양가격 과세 표준 기준 적용' },
    { stage: '신축 매수', item: '장기수선충당금 (2%)', basis: '통상 부가가치세를 제외한 아파트 세전 가격의 약 2% 일시 납부 (Kinh phí bảo trì)' },
    { stage: '소유권 등록', item: '소유권 이전 등록세 (Lệ phí trước bạ)', basis: '관할 세무 기관의 토지 및 아파트 평가가액을 과세 표준으로 기준 적용 (통상 거래가 0.5% 내외)' },
    { stage: '계약 시점', item: '번역·공증·법무 대행비', basis: '계약 공증처 수수료 및 여권 번역 실비 등 거래 조건 및 대행사별 상이' },
    { stage: '보유 단계', item: '관리비·주차비·보험·공과금', basis: '아파트 운영 위원회 및 단지 면적, 가구당 등록 주차 대수 및 사용량 등에 따라 상이' },
    { stage: '임대 운영', item: '임대소득 부가가치세 및 소득세', basis: '연간 총 임대 수입이 1억 동을 초과할 경우, 현행 소득 세법에 명시된 임대 사업자 소득세율 정비 적용' },
    { stage: '매도 처분', item: '부동산 양도 관련 세금 (양도소득세 2%)', basis: '양도 차익이 아닌 계약가격(거래가) 대비 2% 정율 과세 적용 (당시 세법 기준 재조회 필수)' },
    { stage: '매도 후', item: '해외 중개수수료 및 한국 송금 비용', basis: '베트남 현지 중개수수료 약정 조건 및 환전에 따른 송금 은행별 거래 수수료 적용' }
  ];

  return (
    <section id="remittance-guide" className="py-16 bg-white border-b border-navy-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-600 font-mono">
            Remittance, Payments & Taxes Guide
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-800 tracking-tight mt-1">
            송금 절차, 분양 대금 규정 및 관련 세금 안내
          </h2>
          <div className="h-1 w-20 bg-gold-500 mx-auto mt-3"></div>
          <p className="text-sm text-navy-400 mt-4">
            자금을 전달하는 전 과정의 적법성과 소요되는 부대 세금을 면밀하게 다룹니다. 
            반드시 합법적인 은행 전산망만을 사용하여 전 거래 내역의 역추적이 가능하게 관리해야 합니다.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center mb-8">
          <div className="bg-navy-50 p-1.5 rounded-2xl border border-navy-100 flex space-x-1 w-full max-w-xl shadow-inner">
            <button
              onClick={() => setActiveTab('remit')}
              className={`flex-1 py-3 text-xs sm:text-sm font-bold rounded-xl transition-all flex items-center justify-center space-x-1 ${
                activeTab === 'remit'
                  ? 'bg-navy-800 text-gold-300 shadow'
                  : 'text-navy-400 hover:text-navy-800'
              }`}
            >
              <Send className="h-4 w-4 shrink-0" />
              <span>1. 해외 송금 절차</span>
            </button>
            <button
              onClick={() => setActiveTab('payment')}
              className={`flex-1 py-3 text-xs sm:text-sm font-bold rounded-xl transition-all flex items-center justify-center space-x-1 ${
                activeTab === 'payment'
                  ? 'bg-navy-800 text-gold-300 shadow'
                  : 'text-navy-400 hover:text-navy-800'
              }`}
            >
              <Scale className="h-4 w-4 shrink-0" />
              <span>2. 분양 대금 규정</span>
            </button>
            <button
              onClick={() => setActiveTab('tax')}
              className={`flex-1 py-3 text-xs sm:text-sm font-bold rounded-xl transition-all flex items-center justify-center space-x-1 ${
                activeTab === 'tax'
                  ? 'bg-navy-800 text-gold-300 shadow'
                  : 'text-navy-400 hover:text-navy-800'
              }`}
            >
              <Percent className="h-4 w-4 shrink-0" />
              <span>3. 취득 및 세금 비용</span>
            </button>
          </div>
        </div>

        {/* Tab Content 1: Remittance Steps */}
        {activeTab === 'remit' && (
          <div className="space-y-10 animate-fadeIn">
            {/* Steps Timeline Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {remittanceSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="bg-navy-50/50 rounded-2xl p-6 border border-navy-100 relative overflow-hidden"
                >
                  <span className="absolute right-4 top-2 text-5xl font-extrabold text-navy-200/30 font-mono">
                    {step.step}
                  </span>
                  <div className="relative z-10 space-y-2">
                    <span className="text-[10px] bg-gold-100 text-gold-800 font-bold px-2 py-0.5 rounded-full uppercase font-mono">
                      Phase {step.step}
                    </span>
                    <h3 className="font-bold text-navy-800 text-sm mt-1">{step.title}</h3>
                    <p className="text-xs text-navy-500 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Crucial Storage Documents Card */}
            <div className="bg-navy-800 text-white rounded-2xl p-6 sm:p-8 border-b-4 border-gold-400 shadow-lg">
              <div className="flex items-center space-x-3 pb-4 mb-6 border-b border-navy-700">
                <ClipboardCheck className="h-6 w-6 text-gold-400" />
                <div>
                  <h3 className="text-base font-bold text-gold-300">합법 자금 유입 입증을 위해 평생 보관해야 할 필수 서류</h3>
                  <p className="text-xs text-navy-300">추후 베트남 부동산 처분 대금을 제한 없이 한국으로 합법 송출하기 위한 가장 원천적인 증빙 수단입니다.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {requiredDocuments.map((doc, dIdx) => (
                  <div key={dIdx} className="bg-navy-900/60 p-4 rounded-xl border border-navy-700/60 space-y-1">
                    <h4 className="text-xs font-bold text-gold-300 flex items-center space-x-1">
                      <span className="w-1.5 h-1.5 bg-gold-400 rounded-full"></span>
                      <span>{doc.title}</span>
                    </h4>
                    <p className="text-[11px] text-navy-200 leading-relaxed">{doc.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab Content 2: Payment Schedule Caps */}
        {activeTab === 'payment' && (
          <div className="space-y-8 animate-fadeIn">
            {/* Warning Alarm Header banner */}
            <div className="bg-rose-50 border border-rose-200 rounded-2xl p-5 flex items-start space-x-4">
              <AlertOctagon className="h-6 w-6 text-rose-600 shrink-0 mt-0.5" />
              <div className="space-y-2">
                <span className="font-extrabold text-sm text-rose-800">송금 사기 및 차명 편취 원천 차단 강력 경고</span>
                <p className="text-xs text-rose-700 leading-relaxed font-semibold">
                  “중개인 또는 직원 개인계좌로 송금하지 마세요.”
                </p>
                <p className="text-xs text-rose-600 leading-relaxed">
                  “계약서에 기재된 개발사 또는 매도인 명의 계좌로만 지급해야 합니다.” 개인 신용 구좌나 사설 환전 채널(환치기 등)은 계약 효력 불인정뿐 아니라 외국환거래법 위반 형사처벌 대상입니다.
                </p>
              </div>
            </div>

            {/* Payment Schedule Caps List */}
            <div className="bg-white rounded-2xl border border-navy-100 overflow-hidden shadow-lg">
              <div className="bg-navy-700 text-white px-6 py-4">
                <h3 className="font-bold text-sm">베트남 주택법상 신축 아파트 분양 대금 납입 상한 구조 (법정 캡)</h3>
                <p className="text-[11px] text-navy-300 mt-0.5">완공 및 소유권 증서 교부 시점 이전까지의 무단 과다 납입 요구 방지법</p>
              </div>

              <div className="divide-y divide-navy-100">
                {scheduleCaps.map((cap, cIdx) => (
                  <div key={cIdx} className="p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between hover:bg-navy-50/50 transition-colors">
                    <div className="space-y-1 max-w-xl">
                      <span className="text-[10px] font-bold text-gold-600 font-mono uppercase">LIMIT STEP #{cIdx+1}</span>
                      <h4 className="font-bold text-navy-800 text-sm">{cap.label}</h4>
                      <p className="text-xs text-navy-500 leading-relaxed">{cap.desc}</p>
                    </div>
                    <div className="mt-3 sm:mt-0 bg-gold-100/50 border border-gold-300 text-gold-900 font-bold px-4 py-2 rounded-xl text-center min-w-[180px]">
                      <span className="text-xs block font-normal text-navy-500">법정 납입 한도</span>
                      <span className="text-sm font-mono tracking-tight">{cap.cap}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab Content 3: Tax Schedule */}
        {activeTab === 'tax' && (
          <div className="space-y-8 animate-fadeIn">
            {/* Taxes Table */}
            <div className="overflow-x-auto shadow-xl rounded-2xl border border-navy-100">
              <table className="w-full min-w-[650px] border-collapse text-left">
                <thead>
                  <tr className="bg-navy-700 text-white text-xs uppercase tracking-wider font-mono">
                    <th className="py-4 px-6 font-bold w-1/5">거래 시점</th>
                    <th className="py-4 px-6 font-bold w-1/4">정식 세금 및 비용 항목</th>
                    <th className="py-4 px-6 font-bold w-11/20">세법 가이드 및 부과 기준</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-navy-100 text-xs sm:text-sm">
                  {taxItems.map((tax, tIdx) => (
                    <tr key={tIdx} className="hover:bg-navy-50/50 transition-all">
                      <td className="py-4 px-6 font-bold text-navy-800 bg-navy-50/20">
                        <span className="inline-block bg-navy-100 text-navy-700 font-medium px-2 py-0.5 rounded text-[11px]">
                          {tax.stage}
                        </span>
                      </td>
                      <td className="py-4 px-6 font-bold text-gold-700">
                        {tax.item}
                      </td>
                      <td className="py-4 px-6 text-navy-600 leading-relaxed">
                        {tax.basis}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Checklist Warning callout */}
            <div className="bg-gold-50/50 border border-gold-400 rounded-2xl p-5 space-y-3">
              <h4 className="text-xs font-bold text-gold-800 uppercase tracking-widest flex items-center space-x-1.5">
                <ShieldCheck className="h-4 w-4" />
                <span>계약 시 현장 가격 정보 검토 확인 의무</span>
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-xs text-navy-600">
                <li className="flex items-center space-x-2 bg-white p-3 rounded-lg border border-navy-100">
                  <span className="h-1.5 w-1.5 bg-gold-500 rounded-full shrink-0"></span>
                  <span>광고가격이 VAT(부가가치세) 포함인지 확인</span>
                </li>
                <li className="flex items-center space-x-2 bg-white p-3 rounded-lg border border-navy-100">
                  <span className="h-1.5 w-1.5 bg-gold-500 rounded-full shrink-0"></span>
                  <span>2% 장기수선충당금 포함 여부 사전 확인</span>
                </li>
                <li className="flex items-center space-x-2 bg-white p-3 rounded-lg border border-navy-100">
                  <span className="h-1.5 w-1.5 bg-gold-500 rounded-full shrink-0"></span>
                  <span>기본 가구와 가전 빌트인 포함 여부 대조</span>
                </li>
                <li className="flex items-center space-x-2 bg-white p-3 rounded-lg border border-navy-100">
                  <span className="h-1.5 w-1.5 bg-gold-500 rounded-full shrink-0"></span>
                  <span>관리비 부과율 및 단지 내 주차 요금 확인</span>
                </li>
                <li className="flex items-center space-x-2 bg-white p-3 rounded-lg border border-navy-100 md:col-span-2">
                  <span className="h-1.5 w-1.5 bg-gold-500 rounded-full shrink-0"></span>
                  <span>임대수입 관련 납세 요건은 계약 당시 최신 현지 지방세 조세 특례법 재확인</span>
                </li>
              </ul>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
