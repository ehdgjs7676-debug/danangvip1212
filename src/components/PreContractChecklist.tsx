import { useState } from 'react';
import { CheckSquare, Square, ClipboardList, ShieldAlert, ChevronRight, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { CHECKLIST_ITEMS } from '../data';

interface PreContractChecklistProps {
  lang: Language;
  onTriggerInquiryWithChecklist: (checklistSummary: string) => void;
}

export default function PreContractChecklist({ lang, onTriggerInquiryWithChecklist }: PreContractChecklistProps) {
  const [items, setItems] = useState(CHECKLIST_ITEMS.map(item => ({ ...item, checked: false })));

  const handleToggle = (id: string) => {
    setItems(prev =>
      prev.map(item => (item.id === id ? { ...item, checked: !item.checked } : item))
    );
  };

  const checkedCount = items.filter(item => item.checked).length;
  const totalCount = items.length;
  const completionPercentage = Math.round((checkedCount / totalCount) * 100);

  // Determine safety diagnostic message based on checklist status
  const getSafetyVerdict = () => {
    if (checkedCount === 0) {
      return {
        title: '계약 사전 진단 대기 중',
        color: 'text-navy-500 bg-navy-50 border-navy-200',
        desc: '아래 계약 전 점검 사항들을 하나씩 체크하며 거래 안전도를 자가 진단해 보세요.'
      };
    }
    if (completionPercentage < 40) {
      return {
        title: '⚠️ 주의: 법률 리스크 노출 심각 단계',
        color: 'text-rose-800 bg-rose-50 border-rose-300',
        desc: '체크되지 않은 항목들은 자칫하면 시행사 부도, 등기 누락, 불법 취득 등으로 이어지는 고위험 권리 관계입니다. 정밀 분석이 추천됩니다.'
      };
    }
    if (completionPercentage < 80) {
      return {
        title: '⚡ 보완 요망: 계약 전 정밀 조사 필요 단계',
        color: 'text-amber-800 bg-amber-50 border-amber-300',
        desc: '과반 이상 확인 중이나, 소유권 만료 잔여기간 승계나 담보 해지 조건 등 전문성이 요구되는 일부 항목의 추가 소명이 반드시 완료되어야 계약이 안전합니다.'
      };
    }
    return {
      title: '🎉 권장 수치 도달: 자체 서류 구비 우수 단계',
      color: 'text-emerald-800 bg-emerald-50 border-emerald-300',
      desc: '계약 전 리스크를 완벽하게 이해하고 분석하셨습니다. 계약 체결 전에 원본 대조 실사를 위해 전담 법무 컨설턴트 검증을 최종 확인하십시오.'
    };
  };

  const verdict = getSafetyVerdict();

  const handleRequestConsultation = () => {
    const checkedItems = items.filter(i => i.checked).map(i => `[완료] ${i.label}`);
    const uncheckedItems = items.filter(i => !i.checked).map(i => `[미완료] ${i.label}`);
    
    let summaryText = `[계약 전 권리진단 자가체크 결과]\n- 확인 비율: ${completionPercentage}% (${checkedCount}/${totalCount})\n`;
    summaryText += `\n* 보완 요청(미확인) 항목:\n${uncheckedItems.slice(0, 5).join('\n')}\n...외 미체크 항목 정밀 권리분석 요청`;

    onTriggerInquiryWithChecklist(summaryText);
    const element = document.getElementById('inquiry');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="checklist" className="py-16 bg-navy-50/50 border-b border-navy-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-600 font-mono">
            Interactive Safety Checklist
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-800 tracking-tight mt-1">
            계약 체결 전 안전 검증 셀프 체크리스트
          </h2>
          <div className="h-1 w-20 bg-gold-500 mx-auto mt-3"></div>
          <p className="text-sm text-navy-400 mt-4">
            가계약서 서명 및 가계약금 입금 버튼을 누르기 직전, 아래 18가지 필수 법적 점검 사항을 체크해보세요. 
            단 한가지라도 미흡할 경우 중대한 손실이 발생할 수 있습니다.
          </p>
        </div>

        {/* Real-time Diagnostic Meter */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-navy-100 p-6 shadow-md mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-navy-800 text-gold-400 rounded-xl">
                <ClipboardList className="h-5 w-5" />
              </div>
              <div>
                <span className="text-xs text-navy-400 font-semibold block uppercase font-mono">Safety Completion Bar</span>
                <span className="text-lg font-bold text-navy-800 font-mono">계약 리스크 인지율: {completionPercentage}%</span>
              </div>
            </div>

            <div className="w-full sm:w-1/2 bg-navy-100 rounded-full h-3 overflow-hidden">
              <div
                className="bg-gold-500 h-3 rounded-full transition-all duration-500"
                style={{ width: `${completionPercentage}%` }}
              ></div>
            </div>
          </div>

          {/* Verdict Box */}
          <div className={`mt-5 border rounded-xl p-4 text-xs leading-relaxed ${verdict.color}`}>
            <span className="font-bold block text-sm mb-1">{verdict.title}</span>
            <p>{verdict.desc}</p>
          </div>
        </div>

        {/* Checkbox Interactive Grid */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-navy-100 overflow-hidden shadow-lg mb-8">
          <div className="bg-navy-700 text-white px-6 py-4 flex items-center justify-between">
            <span className="font-bold text-xs sm:text-sm">법률적 확인 및 리스크 보증 체크리스트</span>
            <span className="text-xs font-mono font-bold bg-navy-800 px-3 py-1 rounded text-gold-300">
              {checkedCount} / {totalCount} Checked
            </span>
          </div>

          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {items.map((item) => (
              <div
                key={item.id}
                onClick={() => handleToggle(item.id)}
                className={`flex items-start space-x-3 p-3 rounded-xl border cursor-pointer transition-all ${
                  item.checked
                    ? 'bg-gold-50/40 border-gold-400/60 text-navy-900 shadow-sm'
                    : 'bg-white border-navy-100 hover:border-navy-300 text-navy-600'
                }`}
              >
                <div className="mt-0.5 shrink-0">
                  {item.checked ? (
                    <CheckSquare className="h-4 w-4 text-gold-500" />
                  ) : (
                    <Square className="h-4 w-4 text-navy-300" />
                  )}
                </div>
                <span className="text-xs font-medium leading-relaxed">{item.label}</span>
              </div>
            ))}
          </div>

          <div className="bg-navy-50/50 p-4 border-t border-navy-100 flex flex-col sm:flex-row sm:items-center sm:justify-between text-center sm:text-left">
            <p className="text-xs text-navy-400 font-medium mb-3 sm:mb-0">
              ※ 체크되지 않은 항목에 대해 베트남 현지 실사 조사를 무상 지원해 드립니다.
            </p>
            <button
              onClick={handleRequestConsultation}
              className="px-5 py-2.5 bg-navy-800 hover:bg-gold-500 hover:text-navy-900 text-white font-bold text-xs rounded-xl transition-all shadow hover:scale-[1.02] flex items-center justify-center space-x-1"
            >
              <Sparkles className="h-3.5 w-3.5" />
              <span>선택 항목 리포트 기반 권리분석 신청</span>
              <ChevronRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
