import { useState } from 'react';
import {
  Building,
  CheckCircle,
  XCircle,
  HelpCircle,
  AlertTriangle,
  MapPin,
  Calendar,
  Layers,
  Scale,
  Users2,
  FileText,
  DollarSign,
  Briefcase,
  ChevronDown,
  ChevronUp,
  Info,
  BadgePercent
} from 'lucide-react';
import { PropertyListing, PropertyStatus, Language } from '../types';
import { PROPERTIES, DICTIONARY } from '../data';

interface PropertyListProps {
  lang: Language;
  selectedFilter: string;
  setSelectedFilter: (filter: string) => void;
  onSelectProjectForInquiry: (projectName: string) => void;
}

export default function PropertyList({
  lang,
  selectedFilter,
  setSelectedFilter,
  onSelectProjectForInquiry
}: PropertyListProps) {
  const [expandedPaymentId, setExpandedPaymentId] = useState<string | null>(null);
  const t = DICTIONARY[lang];

  // Helper to render property status badges
  const renderStatusBadge = (status: PropertyStatus) => {
    switch (status) {
      case 'foreigner-possible':
        return (
          <span className="inline-flex items-center space-x-1 bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
            <CheckCircle className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
            <span>외국인 계약 가능 (Verified)</span>
          </span>
        );
      case 'checking-quota':
        return (
          <span className="inline-flex items-center space-x-1 bg-amber-50 border border-amber-300 text-amber-800 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
            <HelpCircle className="h-3.5 w-3.5 text-amber-500 shrink-0" />
            <span>외국인 쿼터 확인 중</span>
          </span>
        );
      case 'quota-closed':
        return (
          <span className="inline-flex items-center space-x-1 bg-rose-50 border border-rose-300 text-rose-800 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
            <XCircle className="h-3.5 w-3.5 text-rose-600 shrink-0" />
            <span>외국인 쿼터 마감</span>
          </span>
        );
      case 'need-ownership-check':
        return (
          <span className="inline-flex items-center space-x-1 bg-slate-100 border border-slate-300 text-slate-800 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
            <Scale className="h-3.5 w-3.5 text-slate-500 shrink-0" />
            <span>소유권증서 확인 필요</span>
          </span>
        );
      case 'condotel-warning':
        return (
          <span className="inline-flex items-center space-x-1 bg-indigo-50 border border-indigo-300 text-indigo-800 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
            <AlertTriangle className="h-3.5 w-3.5 text-indigo-600 shrink-0" />
            <span>콘도텔·관광용 부동산</span>
          </span>
        );
    }
  };

  // Filtering Logic based on dynamic selectedFilter state
  const filteredProperties = PROPERTIES.filter((p) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'residential') return p.type === 'residential';
    if (selectedFilter === 'condotel') return p.type === 'condotel';
    if (selectedFilter === 'new-launch') return p.completionDate.includes('예정');
    if (selectedFilter === 'completed') return p.completionDate.includes('완공') || p.completionDate.includes('준공');
    if (selectedFilter === 'live-recommend') return p.type === 'residential' && p.priceVndBillion > 4.0;
    if (selectedFilter === 'lease-recommend') return p.longTermLeaseAllowed === true;
    if (selectedFilter === 'foreigner-only') return p.status === 'foreigner-possible';
    return true;
  });

  const handleInquiryRequest = (projectName: string) => {
    onSelectProjectForInquiry(projectName);
    const element = document.getElementById('inquiry');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const getFilterHeading = () => {
    switch (selectedFilter) {
      case 'all': return '다낭 전체 등록 프로젝트';
      case 'residential': return '주거용 아파트 프로젝트';
      case 'condotel': return '콘도텔 및 관광용 프로젝트';
      case 'new-launch': return '분양 및 입주 예정 신축 프로젝트';
      case 'completed': return '완공 및 실입주 가능 프로젝트';
      case 'live-recommend': return '고급 실거주 및 정주 아파트 추천';
      case 'lease-recommend': return '공실률이 낮은 장기임대 특화 아파트';
      case 'foreigner-only': return '외국인 직접 계약 가능 검증 매물';
      default: return '전체 매물 목록';
    }
  };

  return (
    <section id="properties" className="py-16 bg-navy-50/50 border-b border-navy-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header and Filter Info */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 pb-4 border-b border-navy-200">
          <div>
            <div className="inline-block bg-navy-800 text-gold-400 font-mono text-[10px] font-bold px-3 py-1 rounded-md uppercase tracking-wider mb-2">
              Danang Properties Audit List
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-800 tracking-tight">
              {getFilterHeading()}
            </h2>
            <p className="text-sm text-navy-400 mt-1">
              * 다낭시 건설국의 공식 대장 승인 여부와 외국인 30% 잔여 쿼터를 사전 검토한 신뢰할 수 있는 매물 정보입니다.
            </p>
          </div>

          <div className="mt-4 md:mt-0">
            <select
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
              className="bg-white border border-navy-300 text-navy-800 rounded-lg px-4 py-2 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-gold-500"
            >
              <option value="all">전체 매물 보기</option>
              <option value="residential">주거용 아파트</option>
              <option value="condotel">콘도텔·관광용 아파트</option>
              <option value="new-launch">신축 분양</option>
              <option value="completed">완공 완료 세대</option>
              <option value="live-recommend">실거주 추천</option>
              <option value="lease-recommend">장기임대 추천</option>
              <option value="foreigner-only">외국인 계약 가능 매물</option>
            </select>
          </div>
        </div>

        {/* Warning Callout Box */}
        <div className="mb-10 bg-amber-50 border border-amber-300 rounded-xl p-4 flex items-start space-x-3 text-amber-800">
          <Info className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
          <div className="text-xs space-y-1">
            <span className="font-bold">외국인 계약 자격 엄격 준수 방침: </span>
            <span>
              {t.warningContent} 외국인 계약이 가능한 매물은 현지 건설 당국의 정식 확인 결정을 받은 동·호수만 한정 표기합니다. 
              일부 중개인의 감언이설에 속지 않도록 사전 권리 조회를 반드시 거쳐야 합니다.
            </span>
          </div>
        </div>

        {/* Property Grid */}
        {filteredProperties.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-navy-100 max-w-lg mx-auto">
            <AlertTriangle className="h-12 w-12 text-amber-500 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-navy-800">해당 필터에 부합하는 매물이 없습니다.</h3>
            <p className="text-sm text-navy-400 mt-2">
              조건에 적합한 오프마켓 매물 또는 최신 분양 미분양 호실 목록을 실시간으로 확인해 드릴 수 있으니 고객센터나 개별 상담을 신청해 주세요.
            </p>
            <button
              onClick={() => setSelectedFilter('all')}
              className="mt-4 bg-navy-800 text-white font-semibold text-xs px-4 py-2 rounded-lg hover:bg-navy-700"
            >
              전체 필터 초기화
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((p) => (
              <div
                key={p.id}
                className="bg-white rounded-2xl shadow-lg border border-navy-100 overflow-hidden flex flex-col hover:shadow-xl hover:border-gold-500/30 transition-all group"
              >
                {/* Property Image & Status Ribbon */}
                <div className="relative h-48 sm:h-52 bg-slate-100 overflow-hidden shrink-0">
                  <img
                    src={p.image}
                    alt={p.nameKo}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 to-transparent"></div>
                  
                  {/* Absolute badging on top */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className={`px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider text-white shadow ${
                      p.type === 'residential' ? 'bg-navy-700' : 'bg-indigo-600'
                    }`}>
                      {p.type === 'residential' ? '주거용 아파트' : '콘도텔·관광용'}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                    <div>
                      <h3 className="text-lg font-bold text-white tracking-tight">{p.nameKo}</h3>
                      <p className="text-[10px] text-gold-300 font-mono font-bold uppercase tracking-wide">{p.nameEn}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] text-navy-200">분양/매매 기준가</p>
                      <p className="text-base font-extrabold text-gold-400 font-mono">
                        약 {p.priceVndBillion}억 동 ~
                      </p>
                    </div>
                  </div>
                </div>

                {/* Property Details Body */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  {/* Status Badge */}
                  <div className="pb-3 border-b border-navy-100">
                    {renderStatusBadge(p.status)}
                  </div>

                  {/* Core specifications */}
                  <div className="space-y-2 text-xs text-navy-600">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-3.5 w-3.5 text-gold-500 shrink-0" />
                      <span className="font-semibold text-navy-800 shrink-0">위치:</span>
                      <span className="truncate">{p.locationKo}</span>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Calendar className="h-3.5 w-3.5 text-gold-500 shrink-0" />
                      <span className="font-semibold text-navy-800 shrink-0">준공/입주:</span>
                      <span>{p.completionDate}</span>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Layers className="h-3.5 w-3.5 text-gold-500 shrink-0" />
                      <span className="font-semibold text-navy-800 shrink-0">면적/타입:</span>
                      <span>{p.areaSqm} (침실 {p.bedrooms.join('/')}룸)</span>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Scale className="h-3.5 w-3.5 text-gold-500 shrink-0" />
                      <span className="font-semibold text-navy-800 shrink-0">토지 용도:</span>
                      <span className="text-navy-700">{p.landPurposeKo}</span>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Calendar className="h-3.5 w-3.5 text-gold-500 shrink-0" />
                      <span className="font-semibold text-navy-800 shrink-0">토지 기간:</span>
                      <span className="text-navy-700">{p.landDurationKo}</span>
                    </div>
                  </div>

                  {/* Legal checklist values (Green checks or red alerts) */}
                  <div className="bg-navy-50 p-3 rounded-xl border border-navy-100 space-y-1.5 text-[11px]">
                    <div className="flex justify-between items-center">
                      <span className="text-navy-500 font-medium">외국인 소유 공식 승인 여부</span>
                      <span className={`font-bold px-1.5 py-0.5 rounded ${
                        p.foreignerApproved ? 'text-emerald-700 bg-emerald-100' : 'text-rose-700 bg-rose-100'
                      }`}>
                        {p.foreignerApproved ? '승인 완료' : '미승인 / 보류'}
                      </span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-navy-500 font-medium">동별 외국인 30% 쿼터 상태</span>
                      <span className="font-bold text-navy-800 truncate max-w-[150px]" title={p.quotaRemainingKo}>
                        {p.quotaRemainingKo}
                      </span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-navy-500 font-medium">핑크북 발급 가능성</span>
                      <span className="font-bold text-navy-800">{p.certIssuanceKo}</span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-navy-500 font-medium">부가가치세 (VAT 10%) 포함</span>
                      <span className="font-bold text-navy-700">{p.vatIncluded ? '포함' : '별도 (10%)'}</span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-navy-500 font-medium">장기수선충당금 (2%) 포함</span>
                      <span className="font-bold text-navy-700">{p.maintenanceIncluded ? '포함' : '별도 (2%)'}</span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-navy-500 font-medium">장기 주거 임대 운영</span>
                      <span className={`font-bold ${p.longTermLeaseAllowed ? 'text-emerald-600' : 'text-rose-600'}`}>
                        {p.longTermLeaseAllowed ? '자유 임대 가능' : '제한/위탁운영'}
                      </span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-navy-500 font-medium">단기 숙박 (에어비앤비) 운영</span>
                      <span className={`font-bold ${p.shortTermRentAllowed ? 'text-emerald-600' : 'text-rose-600'}`}>
                        {p.shortTermRentAllowed ? '가능 (규약 준수)' : '원천 차단 / 금지'}
                      </span>
                    </div>
                  </div>

                  {/* Dev / Builder branding info */}
                  <div className="pt-2 border-t border-navy-100 flex items-center justify-between text-[11px] text-navy-400">
                    <div>
                      <span className="font-semibold text-navy-600">개발사: </span>
                      <span>{p.developerKo}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-navy-600">시공사: </span>
                      <span>{p.builderKo}</span>
                    </div>
                  </div>

                  {/* Toggle Payment Schedule Details */}
                  <div className="border-t border-navy-100 pt-3">
                    <button
                      onClick={() => setExpandedPaymentId(expandedPaymentId === p.id ? null : p.id)}
                      className="w-full flex items-center justify-between text-xs font-semibold text-navy-700 hover:text-gold-500 transition-colors"
                    >
                      <span className="flex items-center space-x-1">
                        <BadgePercent className="h-4 w-4 text-gold-500" />
                        <span>분양 대금 납부 일정 확인</span>
                      </span>
                      {expandedPaymentId === p.id ? (
                        <ChevronUp className="h-4 w-4 text-navy-400" />
                      ) : (
                        <ChevronDown className="h-4 w-4 text-navy-400" />
                      )}
                    </button>

                    {expandedPaymentId === p.id && (
                      <div className="mt-3 bg-navy-50 rounded-xl p-3 border border-navy-200/60 space-y-2 text-[11px] animate-fadeIn">
                        {p.paymentSchedule.map((step, sIdx) => (
                          <div key={sIdx} className="flex justify-between items-start space-x-2 pb-1.5 last:pb-0 border-b border-navy-200/40 last:border-0">
                            <div>
                              <span className="font-bold text-navy-800">{step.step}</span>
                              <p className="text-navy-400 text-[10px]">{step.description}</p>
                            </div>
                            <span className="font-mono font-bold text-gold-600 text-right bg-gold-100/50 px-1.5 py-0.5 rounded shrink-0">
                              {step.percentage}%
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Call to Action Button inside Card */}
                  <div className="pt-2">
                    <button
                      onClick={() => handleInquiryRequest(p.nameKo)}
                      className="w-full py-2.5 bg-navy-800 hover:bg-gold-500 hover:text-navy-900 text-white font-bold text-xs rounded-xl transition-all shadow-md hover:scale-[1.01] flex items-center justify-center space-x-1.5"
                    >
                      <span>{p.nameKo} 전용 권리분석 신청</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
