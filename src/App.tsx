import { useState, useEffect } from 'react';
import { Language, Inquiry } from './types';
import Header from './components/Header';
import Hero from './components/Hero';
import PropertyComparison from './components/PropertyComparison';
import PropertyList from './components/PropertyList';
import KoreanConditions from './components/KoreanConditions';
import BudgetCalculator from './components/BudgetCalculator';
import RemittanceGuide from './components/RemittanceGuide';
import PreContractChecklist from './components/PreContractChecklist';
import ConsultantProfile from './components/ConsultantProfile';
import InquiryForm from './components/InquiryForm';
import InquiryDashboard from './components/InquiryDashboard';
import Footer from './components/Footer';

// Seed Initial Data to make the dashboard look highly realistic
const SEED_INQUIRIES: Inquiry[] = [
  {
    id: 'inq_demo_01',
    name: '김민수',
    contact: 'minsu_k_danang',
    contactType: 'kakaotalk',
    nationality: '대한민국',
    residence: '대한민국',
    purpose: '세컨드하우스',
    liveOrLease: '실거주',
    preferredRegion: '다낭 선짜군',
    preferredProject: '선 코스모 레지던스',
    budget: '40억 ~ 60억 동 (약 2억 ~ 3억 원)',
    bedrooms: '2룸',
    moveInTime: '6개월 이내',
    needLoan: 'no',
    content: '[선 코스모 레지던스 2룸 권리분석 요청]\n가족들과 겨울철에 세컨드하우스로 활용하고자 동호수 예약을 앞두고 있습니다. 해당 동의 30% 외국인 쿼터가 마감 단계라는 소문이 있어 정확한 팩트 대조를 부탁드립니다.',
    createdAt: new Date(Date.now() - 48 * 60 * 60 * 1000).toISOString(), // 2 days ago
    status: 'consulting',
    adminNotes: '◆ 수령 대장 분석 결과: 선 코스모 레지던스 A동의 외국인 30% 한도 중 현재 약 27% 수준 수납 완료로 쿼터 소량 잔존함이 대조되었습니다. 단, 이번 주 계약금 납부자가 몰려 실시간 마감 임박이므로 가계약 홀딩 전 시행사 정식 구좌 대조를 권장합니다. 한국 주거래은행 해외부동산 취득신고 접수 서류양식 전송 완료.'
  },
  {
    id: 'inq_demo_02',
    name: '이지영',
    contact: 'jiyoung_viet_law',
    contactType: 'kakaotalk',
    nationality: '대한민국',
    residence: '베트남',
    purpose: '다낭 실거주',
    liveOrLease: '실거주',
    preferredRegion: '다낭 하이쩌우군',
    preferredProject: '더 필모어 다낭',
    budget: '60억 ~ 100억 동 (약 3억 ~ 5억 원)',
    bedrooms: '3룸',
    moveInTime: '즉시 입주',
    needLoan: 'unconfirmed',
    content: '필모어 고층 3룸 즉시 전매 취득을 검토하고 있습니다. 매도인이 외국인인데, 매수하면 50년 소유권이 새로 시작되는 것인지 아니면 잔여기간만 승계되는 것인지 법적 유권해석을 요청합니다. 대출 연계 가능 여부도 궁금합니다.',
    createdAt: new Date(Date.now() - 120 * 60 * 60 * 1000).toISOString(), // 5 days ago
    status: 'completed',
    adminNotes: '◆ 수령 대장 분석 완료: 주택법 제159조에 의거하여 외국인 소유자로부터 양수(전매)하는 경우는 기존 소유자 잔여 소유연도(약 48년)를 승계 취득하게 됩니다. 대한민국 국적자는 현지 담보 대출 심사가 어려우나, 국내 부동산 담보 연계 혹은 현지 Shinhan Bank Vietnam 지점 외환 소득 검증을 통한 보수적 20% 조달 조건 가이드를 메일로 송부해 드렸습니다.'
  }
];

export default function App() {
  const [lang, setLang] = useState<Language>('ko');
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [preferredProjectPreFill, setPreferredProjectPreFill] = useState<string>('');
  const [checklistSummaryPreFill, setChecklistSummaryPreFill] = useState<string>('');

  // Inquiry storage state
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);

  // Load inquiries from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('danang_safehome_inquiries');
    if (stored) {
      try {
        setInquiries(JSON.parse(stored));
      } catch (e) {
        setInquiries(SEED_INQUIRIES);
      }
    } else {
      setInquiries(SEED_INQUIRIES);
      localStorage.setItem('danang_safehome_inquiries', JSON.stringify(SEED_INQUIRIES));
    }
  }, []);

  // Handle new submission
  const handleInquirySubmitted = (newInq: Inquiry) => {
    const updated = [newInq, ...inquiries];
    setInquiries(updated);
    localStorage.setItem('danang_safehome_inquiries', JSON.stringify(updated));
    
    // Clear pre-fills post-submission to avoid sticking
    setPreferredProjectPreFill('');
    setChecklistSummaryPreFill('');

    // Smoothly scroll to the Dashboard so they can view their status
    setTimeout(() => {
      const element = document.getElementById('dashboard');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 1500);
  };

  // Update inquiry (e.g. adding admin notes or status updates)
  const handleUpdateInquiry = (updatedInq: Inquiry) => {
    const updated = inquiries.map((i) => (i.id === updatedInq.id ? updatedInq : i));
    setInquiries(updated);
    localStorage.setItem('danang_safehome_inquiries', JSON.stringify(updated));
  };

  // Handle preset filter clicks from Hero tags
  const handleHeroFilterSelect = (filterId: string) => {
    setSelectedFilter(filterId);
  };

  // Handle property card "Apply for due diligence" click
  const handleSelectProjectForInquiry = (projectName: string) => {
    setPreferredProjectPreFill(projectName);
  };

  // Handle Checklist reporting submit click
  const handleTriggerInquiryWithChecklist = (summaryText: string) => {
    setChecklistSummaryPreFill(summaryText);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#FAFBFD] selection:bg-gold-200 selection:text-navy-950">
      
      {/* Header with Nav Links & Language swapper */}
      <Header
        lang={lang}
        setLang={setLang}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {/* Main Content Layout */}
      <main className="flex-grow">
        
        {/* Section 1: Hero banner & Slogans */}
        <Hero
          lang={lang}
          onFilterSelect={handleHeroFilterSelect}
        />

        {/* Section 2: Residential Apartments vs Condotel comparisons */}
        <PropertyComparison
          lang={lang}
        />

        {/* Section 3: Recommended Property audit grids */}
        <PropertyList
          lang={lang}
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
          onSelectProjectForInquiry={handleSelectProjectForInquiry}
        />

        {/* Section 4: Foreigner acquisition eligibility requirements */}
        <KoreanConditions
          lang={lang}
        />

        {/* Section 5: Real-time Interactive Budget Simulators */}
        <BudgetCalculator
          lang={lang}
        />

        {/* Section 6: Korea to Vietnam safe remittance & Legal schedules */}
        <RemittanceGuide
          lang={lang}
        />

        {/* Section 7: Interactive safety diagnostic checklist */}
        <PreContractChecklist
          lang={lang}
          onTriggerInquiryWithChecklist={handleTriggerInquiryWithChecklist}
        />

        {/* Section 8: Professional Advisory profiles */}
        <ConsultantProfile
          lang={lang}
        />

        {/* Section 9: Structured consultation intake form */}
        <InquiryForm
          preferredProjectPreFill={preferredProjectPreFill}
          checklistSummaryPreFill={checklistSummaryPreFill}
          onInquirySubmitted={handleInquirySubmitted}
        />

        {/* Section 10: High-fidelity Inquiry Tracking Console */}
        <InquiryDashboard
          inquiries={inquiries}
          onUpdateInquiry={handleUpdateInquiry}
        />

      </main>

      {/* Footer with Business specifications and extensive disclaimers */}
      <Footer
        lang={lang}
      />

    </div>
  );
}
