import { useState } from 'react';
import { Calculator, Wallet, ShieldAlert, Coins, HelpCircle, CheckCircle, Percent } from 'lucide-react';
import { Language } from '../types';

interface BudgetCalculatorProps {
  lang: Language;
}

export default function BudgetCalculator({ lang }: BudgetCalculatorProps) {
  // Property Price in Billion VND. Default is 5.0 Billion VND (50억 동)
  const [priceBillion, setPriceBillion] = useState<number>(5.0);

  // Conversion rate: 1 Billion VND = approx 54,000,000 KRW (5,400만 원)
  // Let's use 1B VND = 54,000,000 KRW as a realistic reference.
  const VND_TO_KRW_MULTIPLIER = 54000000;

  const formatVndBillion = (val: number) => {
    return `${val.toFixed(1)}억 동`;
  };

  const formatVndFull = (valBillion: number) => {
    const fullDong = valBillion * 1000000000;
    if (fullDong >= 1000000000) {
      const b = Math.floor(fullDong / 1000000000);
      const m = Math.floor((fullDong % 1000000000) / 10000000);
      return `${b}억 ${m > 0 ? m + '천만' : ''} 동`;
    }
    return `${(fullDong / 10000000).toLocaleString()}천만 동`;
  };

  const formatKrw = (valBillion: number) => {
    const krwValue = valBillion * VND_TO_KRW_MULTIPLIER;
    if (krwValue >= 100000000) {
      const eok = Math.floor(krwValue / 100000000);
      const man = Math.floor((krwValue % 100000000) / 10000);
      return `약 ${eok}억 ${man > 0 ? man.toLocaleString() + '만' : ''} 원`;
    }
    return `약 ${(krwValue / 10000).toLocaleString()}만 원`;
  };

  // Expenses Calculations
  const vat = priceBillion * 0.10; // VAT 10%
  const maintenance = priceBillion * 0.02; // Maintenance fund 2%
  const regTax = priceBillion * 0.005; // Registration Tax approx 0.5%
  const legalFee = 0.02; // Translation, notary, administration flat approx 2천만 동 (0.02 Billion VND)
  const furniture = priceBillion * 0.05; // Furniture / interior approx 5% (approx 2.5억 동 for 50억 동)
  const reserve = priceBillion * 0.07; // Exchange rate, vacancy buffer approx 7% (approx 3.5억 동 for 50억 동)
  
  const totalBudget = priceBillion + vat + maintenance + regTax + legalFee + furniture + reserve;

  return (
    <section id="calculator" className="py-16 bg-navy-50 border-b border-navy-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-600 font-mono">
            VND/KRW Interactive Budget Estimator
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-800 tracking-tight mt-1">
            다낭 부동산 예산 및 자금 계획 계산기
          </h2>
          <div className="h-1 w-20 bg-gold-500 mx-auto mt-3"></div>
          <p className="text-sm text-navy-400 mt-4">
            계약 금액에 숨어있는 세금, 예비비, 인테리어 비용을 가늠해 볼 수 있는 계산기입니다. 
            원화 환산 견적(1억 동 ≒ 540만 원 기준)도 함께 표시됩니다.
          </p>
        </div>

        {/* Outer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Calculator (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-navy-100 space-y-6">
            <div className="flex items-center space-x-2 text-navy-800 font-bold border-b border-navy-100 pb-3">
              <Calculator className="h-5 w-5 text-gold-500" />
              <span>실시간 부대비용 및 총 필요 자금 계산</span>
            </div>

            {/* Slider and Input Block */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-sm font-bold text-navy-800">
                  아파트 분양가 설정 (VND 가격)
                </label>
                <span className="text-xs font-mono font-semibold text-navy-400">
                  {formatKrw(priceBillion)}
                </span>
              </div>

              <div className="flex items-center space-x-4">
                <input
                  type="range"
                  min="2.0"
                  max="15.0"
                  step="0.5"
                  value={priceBillion}
                  onChange={(e) => setPriceBillion(parseFloat(e.target.value))}
                  className="w-full h-2 bg-navy-100 rounded-lg appearance-none cursor-pointer accent-gold-500"
                />
              </div>

              {/* Number input and current status sync */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-navy-50 p-3 rounded-xl border border-navy-100">
                  <span className="text-[10px] text-navy-400 block font-semibold uppercase">설정 분양가 (억 동)</span>
                  <div className="flex items-baseline space-x-1 mt-1">
                    <input
                      type="number"
                      min="1.0"
                      max="30.0"
                      step="0.1"
                      value={priceBillion}
                      onChange={(e) => {
                        const val = parseFloat(e.target.value);
                        if (!isNaN(val) && val > 0) setPriceBillion(val);
                      }}
                      className="text-lg font-bold text-navy-800 bg-transparent border-0 p-0 focus:ring-0 w-20 font-mono"
                    />
                    <span className="text-xs font-bold text-navy-600">억 동</span>
                  </div>
                </div>

                <div className="bg-gold-50/50 p-3 rounded-xl border border-gold-200">
                  <span className="text-[10px] text-gold-700 block font-semibold uppercase">원화 대략 환산액</span>
                  <div className="text-sm font-bold text-gold-800 mt-1">
                    {formatKrw(priceBillion).replace('약 ', '')}
                  </div>
                </div>
              </div>
            </div>

            {/* Dynamic Breakdown List */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold text-navy-400 uppercase tracking-wider">상세 자금 준비 내역서</h4>
              
              <div className="space-y-2 text-xs">
                {/* 1. Base Price */}
                <div className="flex justify-between items-center py-2 border-b border-navy-50">
                  <div className="flex items-center space-x-1.5 text-navy-600">
                    <CheckCircle className="h-3.5 w-3.5 text-navy-400 shrink-0" />
                    <span className="font-medium">분양가격 (순수 매매 대금)</span>
                  </div>
                  <div className="text-right">
                    <span className="font-mono font-bold text-navy-800 block">{formatVndFull(priceBillion)}</span>
                    <span className="text-[10px] text-navy-400 block">{formatKrw(priceBillion)}</span>
                  </div>
                </div>

                {/* 2. VAT */}
                <div className="flex justify-between items-center py-2 border-b border-navy-50">
                  <div className="flex items-center space-x-1.5 text-navy-600">
                    <CheckCircle className="h-3.5 w-3.5 text-navy-400 shrink-0" />
                    <div>
                      <span className="font-medium">부가가치세 (VAT 10%)</span>
                      <p className="text-[10px] text-navy-400">주거용 아파트 과세 표준</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="font-mono font-bold text-navy-800 block">+{formatVndFull(vat)}</span>
                    <span className="text-[10px] text-navy-400 block">{formatKrw(vat)}</span>
                  </div>
                </div>

                {/* 3. Maintenance Fund */}
                <div className="flex justify-between items-center py-2 border-b border-navy-50">
                  <div className="flex items-center space-x-1.5 text-navy-600">
                    <CheckCircle className="h-3.5 w-3.5 text-navy-400 shrink-0" />
                    <div>
                      <span className="font-medium">장기수선충당금 (Maintenance 2%)</span>
                      <p className="text-[10px] text-navy-400">인도 시점 납부 의무 (Kinh phí bảo trì)</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="font-mono font-bold text-navy-800 block">+{formatVndFull(maintenance)}</span>
                    <span className="text-[10px] text-navy-400 block">{formatKrw(maintenance)}</span>
                  </div>
                </div>

                {/* 4. Registration Tax */}
                <div className="flex justify-between items-center py-2 border-b border-navy-50">
                  <div className="flex items-center space-x-1.5 text-navy-600">
                    <CheckCircle className="h-3.5 w-3.5 text-navy-400 shrink-0" />
                    <div>
                      <span className="font-medium">소유권 등기 등록세 (approx 0.5%)</span>
                      <p className="text-[10px] text-navy-400">관할 세무 당국 평가가액 기준 고시 세율</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="font-mono font-bold text-navy-800 block">+{formatVndFull(regTax)}</span>
                    <span className="text-[10px] text-navy-400 block">{formatKrw(regTax)}</span>
                  </div>
                </div>

                {/* 5. Legal / Translation / Admin */}
                <div className="flex justify-between items-center py-2 border-b border-navy-50">
                  <div className="flex items-center space-x-1.5 text-navy-600">
                    <CheckCircle className="h-3.5 w-3.5 text-navy-400 shrink-0" />
                    <div>
                      <span className="font-medium">법무·번역·공증·행정 대행비</span>
                      <p className="text-[10px] text-navy-400">송금 대행 및 서류 번역공증 실비</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="font-mono font-bold text-navy-800 block">+{formatVndFull(legalFee)}</span>
                    <span className="text-[10px] text-navy-400 block">{formatKrw(legalFee)}</span>
                  </div>
                </div>

                {/* 6. Furniture */}
                <div className="flex justify-between items-center py-2 border-b border-navy-50">
                  <div className="flex items-center space-x-1.5 text-navy-600">
                    <CheckCircle className="h-3.5 w-3.5 text-navy-400 shrink-0" />
                    <div>
                      <span className="font-medium">가구 및 가전 풀패키지 인테리어 (예산안)</span>
                      <p className="text-[10px] text-navy-400">실거주 또는 임대 가능한 상태를 위한 마감</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="font-mono font-bold text-navy-800 block">+{formatVndFull(furniture)}</span>
                    <span className="text-[10px] text-navy-400 block">{formatKrw(furniture)}</span>
                  </div>
                </div>

                {/* 7. Buffer */}
                <div className="flex justify-between items-center py-2 border-b border-navy-50">
                  <div className="flex items-center space-x-1.5 text-navy-600">
                    <CheckCircle className="h-3.5 w-3.5 text-navy-400 shrink-0" />
                    <div>
                      <span className="font-medium">환율 변동 및 공실 긴급 예비비 (예산안)</span>
                      <p className="text-[10px] text-navy-400">안정적 납부를 위한 자금 버퍼</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="font-mono font-bold text-navy-800 block">+{formatVndFull(reserve)}</span>
                    <span className="text-[10px] text-navy-400 block">{formatKrw(reserve)}</span>
                  </div>
                </div>
              </div>

              {/* Total Row */}
              <div className="bg-navy-800 text-white p-4 rounded-xl mt-4 flex justify-between items-center shadow-lg">
                <span className="text-sm font-bold text-gold-300 flex items-center space-x-1">
                  <Coins className="h-4 w-4" />
                  <span>예상 총 소요자금 (Total Budget)</span>
                </span>
                <div className="text-right">
                  <span className="font-mono text-lg font-extrabold text-gold-400 block">{formatVndFull(totalBudget)}</span>
                  <span className="text-xs text-navy-200 block">{formatKrw(totalBudget)}</span>
                </div>
              </div>
            </div>

            {/* Disclaimer Callout */}
            <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-xl p-4 text-xs text-amber-800">
              <p className="font-bold">⚠️ 비용 산정 시 필독 공지:</p>
              <p className="mt-1 leading-relaxed">
                “실제 비용은 계약서, 과세표준과 프로젝트 조건에 따라 달라집니다.”
              </p>
              <p className="mt-1">
                위 시뮬레이션은 다낭 시내 일반적인 신축 아파트를 기준으로 한 예상 수치이며, 개발사별 프로모션(에어컨 무상 옵션, VAT 세액 감면 등)과 환율 시세에 따라 5~8% 오차가 발생할 수 있습니다.
              </p>
            </div>
          </div>

          {/* Right Column: Conservative Funding Guidelines (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Box 1: Self-funding guidance */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-navy-100">
              <div className="flex items-center space-x-2 text-navy-800 font-bold border-b border-navy-100 pb-3 mb-4">
                <Wallet className="h-5 w-5 text-gold-500" />
                <span>대출보다 자기자금 중심으로 준비하세요</span>
              </div>

              <div className="space-y-4">
                <p className="text-xs text-navy-500 leading-relaxed">
                  베트남 부동산 취득 시 외국인의 은행 신용 대출 자격 승인 요건은 심사가 극도로 보수적입니다. 원칙적으로 자기자본 100% 준비를 상정한 자금 배분이 가장 투명하고 정직한 예산안입니다.
                </p>

                <div className="space-y-2">
                  <p className="text-xs font-bold text-navy-800">보수적인 자금 계획 비율 예시:</p>
                  
                  <div className="space-y-1 text-xs">
                    <div className="flex justify-between p-2 bg-navy-50 rounded">
                      <span className="text-navy-600 font-medium">자기 자금 (본인 자본)</span>
                      <span className="font-bold font-mono text-navy-800">매매대금의 90 ~ 100%</span>
                    </div>

                    <div className="flex justify-between p-2 bg-navy-50 rounded">
                      <span className="text-navy-600 font-medium">부대비용 (세금/법무/가구 등)</span>
                      <span className="font-bold font-mono text-navy-800">대금의 10 ~ 15%</span>
                    </div>

                    <div className="flex justify-between p-2 bg-navy-50 rounded">
                      <span className="text-navy-600 font-medium">예비비 (환율/공실 방어용)</span>
                      <span className="font-bold font-mono text-navy-800">대금의 5 ~ 10%</span>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-gold-50 rounded-lg border border-gold-200/50 text-xs text-gold-800">
                  <span className="font-bold">📌 별도 자금 준비 조언:</span>
                  <p className="mt-1 leading-relaxed">
                    초기 공실 기간 동안 지속 발생하는 아파트 관리비(Phí quản lý) 및 전기세, 기본 수도세 고정 지출을 충당하기 위해 최소 6~12개월분의 고정 관리 유지비를 별도 유보 자금으로 마련하십시오.
                  </p>
                </div>
              </div>
            </div>

            {/* Box 2: Loan Warning */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-navy-100">
              <div className="flex items-center space-x-2 text-navy-800 font-bold border-b border-navy-100 pb-3 mb-4">
                <ShieldAlert className="h-5 w-5 text-red-600" />
                <span>베트남 현지 은행 대출 희망 시 주의사항</span>
              </div>

              <div className="space-y-3 text-xs leading-relaxed text-navy-600">
                <div className="flex items-start space-x-2">
                  <div className="p-1 bg-red-100 text-red-700 rounded mt-0.5 shrink-0">
                    <Percent className="h-3 w-3" />
                  </div>
                  <div>
                    <span className="font-bold text-navy-800">대출 한도 통제</span>
                    <p className="text-[11px] text-navy-500 mt-0.5">자기자금 70~80% 보유를 전제로 하며, 대출은 최대 20~30% 이내에서 조절하는 것을 권장합니다.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-2">
                  <div className="p-1 bg-red-100 text-red-700 rounded mt-0.5 shrink-0">
                    <Percent className="h-3 w-3" />
                  </div>
                  <div>
                    <span className="font-bold text-navy-800">서면 대출 승인서 전제</span>
                    <p className="text-[11px] text-navy-500 mt-0.5">구두 협의를 맹신하지 말고, 분양 계약서 날인 이전에 현지 거래 은행으로부터 문서 형태의 사전 승인서를 정식으로 교부받아야 합니다.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-2">
                  <div className="p-1 bg-red-100 text-red-700 rounded mt-0.5 shrink-0">
                    <Percent className="h-3 w-3" />
                  </div>
                  <div>
                    <span className="font-bold text-navy-800">월 원리금 소득 대비 통제</span>
                    <p className="text-[11px] text-navy-500 mt-0.5">매월 은행에 상환해야 하는 원리금(원금+이자)의 합계는 검증 가능한 부부 합산 안정적 순소득의 30~35% 이내로 맞추는 것이 안전합니다.</p>
                  </div>
                </div>

                <div className="p-3 bg-red-50 rounded-lg text-red-900 border border-red-100 text-[11px] mt-2">
                  <span>“외국인의 베트남 현지 대출 가능 여부는 체류자격, 현지 소득, 근로계약, 신용기록과 은행 심사에 따라 달라집니다.”</span>
                </div>
              </div>
            </div>

          </div>
          
        </div>

      </div>
    </section>
  );
}
