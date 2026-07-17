import { useState, useEffect, FormEvent } from 'react';
import { Send, CheckCircle, HelpCircle, User, MessageSquare, Briefcase, Landmark } from 'lucide-react';
import { Inquiry } from '../types';

interface InquiryFormProps {
  preferredProjectPreFill: string;
  checklistSummaryPreFill: string;
  onInquirySubmitted: (inquiry: Inquiry) => void;
}

export default function InquiryForm({
  preferredProjectPreFill,
  checklistSummaryPreFill,
  onInquirySubmitted
}: InquiryFormProps) {
  // Form States
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [contactType, setContactType] = useState<'kakaotalk' | 'telegram' | 'phone'>('kakaotalk');
  const [nationality, setNationality] = useState('대한민국');
  const [residence, setResidence] = useState('대한민국');
  const [purpose, setPurpose] = useState('다낭 실거주');
  const [liveOrLease, setLiveOrLease] = useState('실거주');
  const [preferredRegion, setPreferredRegion] = useState('다낭 하이쩌우군');
  const [preferredProject, setPreferredProject] = useState('');
  const [budget, setBudget] = useState('40억 ~ 60억 동 (약 2억 ~ 3억 원)');
  const [bedrooms, setBedrooms] = useState('2룸');
  const [moveInTime, setMoveInTime] = useState('6개월 이내');
  const [needLoan, setNeedLoan] = useState<'yes' | 'no' | 'unconfirmed'>('no');
  const [content, setContent] = useState('');

  // Statuses
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Handle Pre-Fill Triggers
  useEffect(() => {
    if (preferredProjectPreFill) {
      setPreferredProject(preferredProjectPreFill);
      // Automatically add pre-fill mention in content
      setContent((prev) => {
        const header = `[관심 매물: ${preferredProjectPreFill} 권리분석 요청]\n`;
        if (prev.includes(preferredProjectPreFill)) return prev;
        return header + prev;
      });
    }
  }, [preferredProjectPreFill]);

  useEffect(() => {
    if (checklistSummaryPreFill) {
      setContent((prev) => {
        if (prev.includes('[계약 전 권리진단 자가체크 결과]')) return prev;
        return prev ? prev + '\n\n' + checklistSummaryPreFill : checklistSummaryPreFill;
      });
    }
  }, [checklistSummaryPreFill]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!name.trim()) {
      setErrorMessage('이름 또는 담당자명을 입력해 주세요.');
      return;
    }
    if (!contact.trim()) {
      setErrorMessage('카카오톡 ID 또는 정확한 연락처를 입력해 주세요.');
      return;
    }

    setIsSubmitting(true);

    // Simulate short network delay for immersive polish
    setTimeout(() => {
      const newInquiry: Inquiry = {
        id: 'inq_' + Math.random().toString(36).substr(2, 9),
        name,
        contact,
        contactType,
        nationality,
        residence,
        purpose,
        liveOrLease,
        preferredRegion,
        preferredProject: preferredProject || '지정 안함 / 전체 매칭 희망',
        budget,
        bedrooms,
        moveInTime,
        needLoan,
        content,
        createdAt: new Date().toISOString(),
        status: 'new'
      };

      onInquirySubmitted(newInquiry);
      setIsSubmitting(false);
      setSubmitSuccess(true);

      // Reset main keys
      setName('');
      setContact('');
      setContent('');
    }, 1000);
  };

  return (
    <section id="inquiry" className="py-16 bg-navy-800 text-white border-b border-navy-950 relative overflow-hidden">
      {/* Decorative Gold Elements */}
      <div className="absolute right-0 bottom-0 w-80 h-80 rounded-full bg-gold-500/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-block bg-gold-500/10 border border-gold-500/40 text-gold-400 text-[10px] font-bold px-3 py-1 rounded-md uppercase tracking-wider mb-2">
            Foreigner Eligibility Consultation Form
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            다낭 외국인 구입 가능 매물 상담 신청
          </h2>
          <div className="h-1 w-20 bg-gold-400 mx-auto mt-3"></div>
          <p className="text-xs text-navy-300 mt-4 leading-relaxed">
            매입 계약 전 필수 확인 요건인 외국인 승인 쿼터 현황과 시행사 세무 연계 이력을 정식 조회해 드립니다. 
            개인정보는 엄격히 암호화 처리되며 상담 목적으로만 활용됩니다.
          </p>
        </div>

        {submitSuccess ? (
          <div className="bg-navy-900/80 border border-gold-400 rounded-2xl p-8 text-center space-y-4 max-w-xl mx-auto shadow-2xl">
            <div className="w-16 h-16 bg-gold-500 text-navy-950 rounded-full flex items-center justify-center mx-auto shadow-lg">
              <CheckCircle className="h-10 w-10" />
            </div>
            <h3 className="text-xl font-bold text-gold-300">상담 신청서가 정상적으로 접수되었습니다.</h3>
            <p className="text-xs text-navy-200 leading-relaxed max-w-md mx-auto">
              입력하신 메신저({contactType.toUpperCase()}: <span className="font-mono text-white font-bold">{contact}</span>)로 
              영업일 기준 2시간 이내에 담당 법무 컨설턴트가 대조 공문 원본 파일과 함께 연락드리겠습니다.
            </p>
            
            <div className="p-3.5 bg-navy-800 rounded-xl border border-navy-700 text-left text-xs text-navy-300">
              <p className="font-bold text-gold-400 mb-1">상담 절차 안내:</p>
              <ol className="list-decimal pl-4 space-y-1">
                <li>요청하신 다낭 프로젝트 잔여 30% 쿼터 원본 조회</li>
                <li>희망 목적(실거주/임대)에 따른 세무 비용 시뮬레이션 교부</li>
                <li>카카오톡 또는 해외 송금 전담 전산망 연계</li>
              </ol>
            </div>

            <button
              onClick={() => setSubmitSuccess(false)}
              className="mt-4 px-6 py-2.5 bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-xs rounded-xl transition"
            >
              추가 문의 신청서 작성
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-navy-900/60 backdrop-blur-sm border border-navy-700 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6">
            
            {/* Header notification */}
            <div className="bg-navy-800/80 p-3 rounded-xl border border-navy-700 flex items-center space-x-2 text-xs text-gold-300">
              <span className="flex h-1.5 w-1.5 bg-gold-400 rounded-full shrink-0"></span>
              <span>다낭 아파트, 콘도텔 구분 상담 및 한국 외환은행 신고 서류 무료 검수 혜택 포함</span>
            </div>

            {/* Error Message */}
            {errorMessage && (
              <div className="bg-red-500/20 border border-red-500/50 rounded-xl p-3 text-xs text-red-300 text-center font-semibold">
                {errorMessage}
              </div>
            )}

            {/* Row 1: Name and Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-xs font-bold text-navy-200 flex items-center space-x-1">
                  <User className="h-3.5 w-3.5 text-gold-400" />
                  <span>이름 (Name) *</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="실명 혹은 담당자명 입력"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-navy-800 border border-navy-700 focus:border-gold-500 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-gold-500"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-navy-200 flex items-center space-x-2">
                  <select
                    value={contactType}
                    onChange={(e) => setContactType(e.target.value as any)}
                    className="bg-navy-800 border-0 p-0 text-gold-400 font-bold focus:ring-0 text-xs cursor-pointer focus:outline-none"
                  >
                    <option value="kakaotalk">카카오톡 ID</option>
                    <option value="telegram">텔레그램 ID</option>
                    <option value="phone">전화번호</option>
                  </select>
                  <span>상담 주소 (Contact) *</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder={contactType === 'kakaotalk' ? '예: danang_safe_id' : contactType === 'telegram' ? '예: @danang_safe' : '예: 010-1234-5678'}
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  className="w-full bg-navy-800 border border-navy-700 focus:border-gold-500 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-gold-500"
                />
              </div>
            </div>

            {/* Row 2: Nationality and Current Residence */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-xs font-bold text-navy-200 block">국적 (Nationality)</label>
                <select
                  value={nationality}
                  onChange={(e) => setNationality(e.target.value)}
                  className="w-full bg-navy-800 border border-navy-700 focus:border-gold-500 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-gold-500"
                >
                  <option value="대한민국">대한민국 (South Korea)</option>
                  <option value="베트남">베트남 (Vietnam)</option>
                  <option value="미국/캐나다">미국 / 캐나다 (US / Canada)</option>
                  <option value="기타 외국인">기타 외국적 (Other)</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-navy-200 block">현재 거주 국가 (Residence)</label>
                <select
                  value={residence}
                  onChange={(e) => setResidence(e.target.value)}
                  className="w-full bg-navy-800 border border-navy-700 focus:border-gold-500 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-gold-500"
                >
                  <option value="대한민국">대한민국 (South Korea)</option>
                  <option value="베트남">베트남 (Vietnam)</option>
                  <option value="기타 거주">기타 국가 (Overseas)</option>
                </select>
              </div>
            </div>

            {/* Row 3: Purpose of Purchase & Living vs Lease */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-xs font-bold text-navy-200 block">구입 목적 (Purpose of Purchase)</label>
                <select
                  value={purpose}
                  onChange={(e) => setPurpose(e.target.value)}
                  className="w-full bg-navy-800 border border-navy-700 focus:border-gold-500 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-gold-500"
                >
                  <option value="다낭 실거주">다낭 실거주 (Living in Da Nang)</option>
                  <option value="장기임대">장기임대 (Long-term leasing business)</option>
                  <option value="세컨드하우스">세컨드하우스 (Holiday Home)</option>
                  <option value="은퇴 후 거주">은퇴 후 거주 (Retirement living)</option>
                  <option value="자녀 또는 가족 거주">자녀 또는 가족 거주 (Family resident)</option>
                  <option value="투자 검토">투자 검토 (Value increase review)</option>
                  <option value="콘도텔 운영 검토">콘도텔 운영 검토 (Condotel operations review)</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-navy-200 block">주요 운영 선호 (Preference)</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setLiveOrLease('실거주')}
                    className={`py-2 px-3 text-xs font-bold rounded-xl border transition-all ${
                      liveOrLease === '실거주'
                        ? 'bg-gold-500 text-navy-950 border-gold-400'
                        : 'bg-navy-800 text-navy-300 border-navy-700'
                    }`}
                  >
                    직접 실거주 선호
                  </button>
                  <button
                    type="button"
                    onClick={() => setLiveOrLease('임대운영')}
                    className={`py-2 px-3 text-xs font-bold rounded-xl border transition-all ${
                      liveOrLease === '임대운영'
                        ? 'bg-gold-500 text-navy-950 border-gold-400'
                        : 'bg-navy-800 text-navy-300 border-navy-700'
                    }`}
                  >
                    임대수익 중심 선호
                  </button>
                </div>
              </div>
            </div>

            {/* Row 4: Preferred Region and Preferred Project */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-xs font-bold text-navy-200 block">희망 다낭 지역 (Preferred Area)</label>
                <select
                  value={preferredRegion}
                  onChange={(e) => setPreferredRegion(e.target.value)}
                  className="w-full bg-navy-800 border border-navy-700 focus:border-gold-500 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-gold-500"
                >
                  <option value="다낭 하이쩌우군">하이쩌우군 (시내 한강변 중심)</option>
                  <option value="다낭 선짜군">선짜군 (미케비치 동부 해안)</option>
                  <option value="다낭 응우하인선군">응우하인선군 (리조트 골프장 벨트)</option>
                  <option value="다낭 전체">지역 상관없음 (전체 다 매칭 희망)</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-navy-200 block">희망하는 구체적 프로젝트명</label>
                <select
                  value={preferredProject}
                  onChange={(e) => setPreferredProject(e.target.value)}
                  className="w-full bg-navy-800 border border-navy-700 focus:border-gold-500 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-gold-500"
                >
                  <option value="">전체 프로젝트 적격 검토 요청</option>
                  <option value="더 필모어 다낭">더 필모어 다낭 (The Filmore)</option>
                  <option value="선 코스모 레지던스">선 코스모 레지던스 (Sun Cosmo)</option>
                  <option value="선 폰테 레지던스">선 폰테 레지던스 (Sun Ponte)</option>
                  <option value="더 생 레지던스">더 생 레지던스 (The Sang)</option>
                  <option value="윈덤 솔레이 다낭 (콘도텔)">윈덤 솔레이 다낭 (Soleil Condotel)</option>
                  <option value="모나치 아파트 B동">모나치 아파트 B동 (Monarchy B)</option>
                </select>
              </div>
            </div>

            {/* Row 5: Budget and Bedrooms */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-xs font-bold text-navy-200 block">예상 준비 자금 예산 (Estimated Budget)</label>
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full bg-navy-800 border border-navy-700 focus:border-gold-500 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-gold-500"
                >
                  <option value="30억 동 이하 (약 1.5억 원 내외)">30억 동 이하 (약 1.5억 원 내외)</option>
                  <option value="30억 ~ 40억 동 (약 1.5억 ~ 2억 원)">30억 ~ 40억 동 (약 1.5억 ~ 2억 원)</option>
                  <option value="40억 ~ 60억 동 (약 2억 ~ 3억 원)">40억 ~ 60억 동 (약 2억 ~ 3억 원)</option>
                  <option value="60억 ~ 100억 동 (약 3억 ~ 5억 원)">60억 ~ 100억 동 (약 3억 ~ 5억 원)</option>
                  <option value="100억 동 초과 (약 5억 원 이상)">100억 동 초과 (약 5억 원 이상)</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-navy-200 block">희망 침실 수 / 입주 희망 시기</label>
                <div className="grid grid-cols-2 gap-2">
                  <select
                    value={bedrooms}
                    onChange={(e) => setBedrooms(e.target.value)}
                    className="bg-navy-800 border border-navy-700 focus:border-gold-500 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none"
                  >
                    <option value="1룸">1 룸 (스튜디오 포함)</option>
                    <option value="2룸">2 룸 (가장 선호)</option>
                    <option value="3룸">3 룸 (펜트하우스 포함)</option>
                  </select>
                  
                  <select
                    value={moveInTime}
                    onChange={(e) => setMoveInTime(e.target.value)}
                    className="bg-navy-800 border border-navy-700 focus:border-gold-500 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none"
                  >
                    <option value="즉시 입주">즉시 입주 완공 물건</option>
                    <option value="6개월 이내">6개월 이내 준공 예정</option>
                    <option value="1년 이내">1년 이내 예정</option>
                    <option value="신축 선분양">느긋한 일정 (선분양 매치)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Row 6: Loan Requirements */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-navy-200 block">
                현지 은행 대출 조달 검토가 필요하십니까? (Loan Necessity)
              </label>
              <div className="flex space-x-4">
                {[
                  { key: 'no', val: '아니오 (100% 자기자본 조달 상정)' },
                  { key: 'yes', val: '예 (은행 승인 심사 가이드 요청)' },
                  { key: 'unconfirmed', val: '상담 후 대출 타당성 결정' }
                ].map((item) => (
                  <label key={item.key} className="flex items-center space-x-2 text-xs text-navy-300 cursor-pointer">
                    <input
                      type="radio"
                      name="needLoan"
                      checked={needLoan === item.key}
                      onChange={() => setNeedLoan(item.key as any)}
                      className="text-gold-500 bg-navy-800 border-navy-700 focus:ring-0"
                    />
                    <span>{item.val}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Content field */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-navy-200 flex items-center space-x-1.5">
                <MessageSquare className="h-3.5 w-3.5 text-gold-400" />
                <span>상담 문의 상세 사항 및 사전 요청 리포트 항목</span>
              </label>
              <textarea
                rows={4}
                placeholder="구체적인 예산 구조, 특정 단지 소유권 이슈, 혹은 한국 지정거래 은행 부동산 매수 자격 신고 시 필요한 서류 일절 등 궁금한 내역을 상세히 기술해 주세요."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full bg-navy-800 border border-navy-700 focus:border-gold-500 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-gold-500"
              />
            </div>

            {/* Submit button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gold-500 hover:bg-gold-400 disabled:bg-navy-700 text-navy-950 font-extrabold text-sm py-4 rounded-xl shadow-xl shadow-gold-500/10 hover:shadow-gold-500/20 active:scale-[0.99] transition-all flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-navy-950"></span>
                    <span>다낭 건설 대장 및 외국인 쿼터 실시간 대조 중...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    <span>외국인 구입 가능 매물 상담 및 권리분석 신청</span>
                  </>
                )}
              </button>
            </div>

            {/* Zero-Risk Notice */}
            <p className="text-[10px] text-center text-navy-400">
              ※ 본 접수는 즉각적인 유료 청구나 위탁을 계약하는 행위가 아니므로, 다낭 신축 매물 전매에 대한 순수 법률/세무 안전 자문을 무상 지원받기 위한 접수입니다.
            </p>

          </form>
        )}

      </div>
    </section>
  );
}
