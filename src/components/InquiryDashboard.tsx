import { useState } from 'react';
import { ClipboardList, ShieldCheck, Mail, Phone, Calendar, MessageSquare, Clock, Users, ArrowRight, Save, ToggleLeft, ToggleRight } from 'lucide-react';
import { Inquiry } from '../types';

interface InquiryDashboardProps {
  inquiries: Inquiry[];
  onUpdateInquiry: (updated: Inquiry) => void;
}

export default function InquiryDashboard({ inquiries, onUpdateInquiry }: InquiryDashboardProps) {
  const [isAdminMode, setIsAdminMode] = useState<boolean>(false);
  const [selectedInquiryId, setSelectedInquiryId] = useState<string | null>(null);
  const [adminNoteInput, setAdminNoteInput] = useState<string>('');
  const [statusInput, setStatusInput] = useState<'new' | 'consulting' | 'completed'>('new');

  const handleSelectInquiry = (inq: Inquiry) => {
    setSelectedInquiryId(inq.id);
    setAdminNoteInput(inq.adminNotes || '');
    setStatusInput(inq.status);
  };

  const handleSaveAdminUpdate = () => {
    if (!selectedInquiryId) return;
    const original = inquiries.find(i => i.id === selectedInquiryId);
    if (original) {
      const updated: Inquiry = {
        ...original,
        status: statusInput,
        adminNotes: adminNoteInput
      };
      onUpdateInquiry(updated);
      alert('전문가 권리분석 자문 메모와 상태가 성공적으로 등록되었습니다.');
    }
  };

  const formatDate = (isoString: string) => {
    const d = new Date(isoString);
    return `${d.getFullYear()}년 ${d.getMonth() + 1}월 ${d.getDate()}일 ${d.getHours()}시 ${d.getMinutes()}분`;
  };

  const getStatusBadge = (status: 'new' | 'consulting' | 'completed') => {
    switch (status) {
      case 'new':
        return (
          <span className="inline-flex items-center space-x-1 bg-blue-50 border border-blue-300 text-blue-800 text-[11px] font-bold px-2.5 py-0.5 rounded-full">
            <Clock className="h-3 w-3 animate-pulse" />
            <span>분석 접수 완료 (New)</span>
          </span>
        );
      case 'consulting':
        return (
          <span className="inline-flex items-center space-x-1 bg-amber-50 border border-amber-300 text-amber-800 text-[11px] font-bold px-2.5 py-0.5 rounded-full">
            <Clock className="h-3 w-3 text-amber-600" />
            <span>대조 실사 진행 중 (Analyzing)</span>
          </span>
        );
      case 'completed':
        return (
          <span className="inline-flex items-center space-x-1 bg-emerald-50 border border-emerald-300 text-emerald-800 text-[11px] font-bold px-2.5 py-0.5 rounded-full">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
            <span>권리분석 완료 (Verified)</span>
          </span>
        );
    }
  };

  const selectedInquiry = inquiries.find(i => i.id === selectedInquiryId);

  return (
    <section id="dashboard" className="py-16 bg-navy-900 text-white border-b border-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 pb-4 border-b border-navy-800">
          <div>
            <div className="inline-block bg-gold-500 text-navy-950 font-mono text-[10px] font-bold px-3 py-1 rounded-md uppercase tracking-wider mb-2">
              Da Nang SafeHome Consultation Portal
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              나의 실시간 권리분석 상담 조회
            </h2>
            <p className="text-sm text-navy-300 mt-1">
              신청하신 자가 대조 체크리스트 내용 및 호실 분석 의뢰 진행 경과를 즉각 투명하게 조회합니다.
            </p>
          </div>

          {/* Admin Toggle Swapper */}
          <div className="mt-4 md:mt-0 flex items-center space-x-2 bg-navy-800 border border-navy-700 px-4 py-2 rounded-xl">
            <Users className="h-4 w-4 text-gold-400" />
            <span className="text-xs font-semibold text-navy-200">개발자/고문 위원 콘솔 전환</span>
            <button
              onClick={() => {
                setIsAdminMode(!isAdminMode);
                setSelectedInquiryId(null);
              }}
              className="focus:outline-none"
            >
              {isAdminMode ? (
                <ToggleRight className="h-7 w-7 text-gold-400" />
              ) : (
                <ToggleLeft className="h-7 w-7 text-navy-400" />
              )}
            </button>
          </div>
        </div>

        {/* Dashboard Grid split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Registered Inquiry Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-4 max-h-[600px] overflow-y-auto pr-2">
            <h3 className="text-xs font-bold text-gold-400 uppercase tracking-widest flex items-center space-x-1.5">
              <ClipboardList className="h-4 w-4" />
              <span>{isAdminMode ? '시스템 전체 수령 상담서 목록' : '내가 접수한 권리분석 신청 내역'}</span>
            </h3>

            {inquiries.length === 0 ? (
              <div className="bg-navy-850 border border-navy-800 rounded-2xl p-8 text-center text-navy-400 space-y-3">
                <Clock className="h-8 w-8 text-navy-600 mx-auto" />
                <p className="text-xs">상담 신청 내역이 없습니다. 하단 신청서 양식을 작성해 제출하시면 웹 브라우저 로컬 저장소와 동기화되어 즉시 조회할 수 있습니다.</p>
                <a
                  href="#inquiry"
                  className="inline-block text-[11px] text-gold-400 font-bold hover:underline"
                >
                  상담 신청하러 가기 &rarr;
                </a>
              </div>
            ) : (
              <div className="space-y-3">
                {inquiries.map((inq) => (
                  <div
                    key={inq.id}
                    onClick={() => handleSelectInquiry(inq)}
                    className={`p-4 rounded-xl border cursor-pointer transition-all ${
                      selectedInquiryId === inq.id
                        ? 'bg-navy-800 border-gold-500'
                        : 'bg-navy-850 hover:bg-navy-800/60 border-navy-800'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-bold text-sm text-white">{inq.name} 고객님</h4>
                        <span className="text-[10px] text-navy-400 block font-mono">ID: {inq.id}</span>
                      </div>
                      {getStatusBadge(inq.status)}
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-[11px] text-navy-300 mt-2 pt-2 border-t border-navy-800/60">
                      <div>
                        <span className="text-navy-500 block">관심 프로젝트:</span>
                        <span className="font-semibold text-white truncate block">{inq.preferredProject}</span>
                      </div>
                      <div>
                        <span className="text-navy-500 block">신청 일시:</span>
                        <span className="font-mono text-navy-300 block">{formatDate(inq.createdAt).split(' ')[1] + ' ' + formatDate(inq.createdAt).split(' ')[2]}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Active Selected Details (7 cols) */}
          <div className="lg:col-span-7">
            {selectedInquiry ? (
              <div className="bg-navy-850 border border-navy-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl animate-fadeIn">
                
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-navy-800 pb-4 space-y-2 sm:space-y-0">
                  <div>
                    <span className="text-[10px] text-gold-400 font-bold uppercase tracking-widest font-mono">Selected Document Sheet</span>
                    <h3 className="text-lg font-extrabold text-white">{selectedInquiry.name} 고객의 정밀 자문 검토 결과</h3>
                  </div>
                  {getStatusBadge(selectedInquiry.status)}
                </div>

                {/* Sub Metadata parameters */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs bg-navy-900/60 p-4 rounded-xl border border-navy-800/80">
                  <div>
                    <span className="text-navy-400 block mb-0.5">상담 메신저 주소</span>
                    <span className="font-bold text-white uppercase font-mono">
                      {selectedInquiry.contactType}: {selectedInquiry.contact}
                    </span>
                  </div>
                  <div>
                    <span className="text-navy-400 block mb-0.5">국적 / 거주국</span>
                    <span className="font-bold text-gold-300">
                      {selectedInquiry.nationality} / {selectedInquiry.residence}
                    </span>
                  </div>
                  <div>
                    <span className="text-navy-400 block mb-0.5">매수 목적 / 타겟</span>
                    <span className="font-bold text-white">
                      {selectedInquiry.purpose} ({selectedInquiry.liveOrLease})
                    </span>
                  </div>
                  <div>
                    <span className="text-navy-400 block mb-0.5">희망 지역</span>
                    <span className="font-bold text-navy-200">{selectedInquiry.preferredRegion}</span>
                  </div>
                  <div>
                    <span className="text-navy-400 block mb-0.5">가용 총 준비 예산</span>
                    <span className="font-bold text-gold-300">{selectedInquiry.budget}</span>
                  </div>
                  <div>
                    <span className="text-navy-400 block mb-0.5">대출 검토 여부</span>
                    <span className={`font-bold ${selectedInquiry.needLoan === 'yes' ? 'text-amber-400' : 'text-navy-400'}`}>
                      {selectedInquiry.needLoan === 'yes' ? '대출 가이드 필요' : selectedInquiry.needLoan === 'no' ? '대출 불필요' : '상담 후 결정'}
                    </span>
                  </div>
                </div>

                {/* Content User text message */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-gold-300 uppercase tracking-wider">의뢰 및 자가진단 기술 내역</h4>
                  <div className="bg-navy-900 p-4 rounded-xl text-xs text-navy-200 leading-relaxed max-h-[150px] overflow-y-auto whitespace-pre-wrap border border-navy-800">
                    {selectedInquiry.content || '작성된 특별 보완 요청 사항이 없습니다.'}
                  </div>
                </div>

                {/* Admin Note Panel (Viewable by users, editable in Admin Mode) */}
                <div className="pt-4 border-t border-navy-800 space-y-3">
                  <h4 className="text-xs font-bold text-gold-400 uppercase tracking-widest flex items-center space-x-1.5">
                    <ShieldCheck className="h-4 w-4 text-gold-400" />
                    <span>다낭 세이프홈 전문 위원 권리 분석 의견서 (Pink Book Audit Note)</span>
                  </h4>

                  {isAdminMode ? (
                    <div className="bg-navy-900 p-4 rounded-xl border border-gold-500/30 space-y-4">
                      <div className="space-y-2">
                        <label className="text-xs text-navy-300 font-semibold block">상담 진행 및 권리분석 단계 설정</label>
                        <div className="flex space-x-2">
                          {[
                            { key: 'new', label: '접수대기 (New)' },
                            { key: 'consulting', label: '실사조사 (Analyzing)' },
                            { key: 'completed', label: '분석완료 (Verified)' }
                          ].map(opt => (
                            <button
                              key={opt.key}
                              type="button"
                              onClick={() => setStatusInput(opt.key as any)}
                              className={`flex-1 py-1.5 text-xs font-bold rounded-lg border transition-all ${
                                statusInput === opt.key
                                  ? 'bg-gold-500 text-navy-950 border-gold-400'
                                  : 'bg-navy-800 text-navy-400 border-navy-700'
                              }`}
                            >
                              {opt.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs text-navy-300 font-semibold block">의견서 기술란 (고객 전용 화면 노출)</label>
                        <textarea
                          rows={3}
                          className="w-full bg-navy-800 border border-navy-700 focus:border-gold-500 rounded-lg px-3 py-2 text-xs text-white focus:outline-none"
                          placeholder="더 필모어 30% 쿼터 잔여 최종 확인됨, 은행 송금 시 필요한 외환거주자 실사 가이드 전송 완료."
                          value={adminNoteInput}
                          onChange={(e) => setAdminNoteInput(e.target.value)}
                        />
                      </div>

                      <div className="text-right">
                        <button
                          onClick={handleSaveAdminUpdate}
                          className="px-4 py-2 bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-xs rounded-lg transition flex items-center space-x-1 ml-auto"
                        >
                          <Save className="h-3.5 w-3.5" />
                          <span>분석 의견서 실시간 반영</span>
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-navy-900/40 p-4 rounded-xl border border-navy-800 text-xs leading-relaxed text-navy-300 italic">
                      {selectedInquiry.adminNotes ? (
                        <p className="text-navy-100 font-medium not-italic">
                          {selectedInquiry.adminNotes}
                        </p>
                      ) : (
                        <p>
                          * 현재 고객님의 희망 프로젝트 수령 대장에 대한 동별 30% 쿼터 잔여분을 실사 대조 중입니다. 
                          의뢰 완료 후 영업일 기준 2시간 내에 전문 의견서 및 시행사 신용도 조회가 이곳에 게시되며, 카카오톡 또는 기재하신 메신저 ID로 상세 자료가 전송됩니다.
                        </p>
                      )}
                    </div>
                  )}
                </div>

              </div>
            ) : (
              <div className="bg-navy-850 border border-navy-800 rounded-2xl p-12 text-center text-navy-400 space-y-4 shadow-xl">
                <ClipboardList className="h-12 w-12 text-navy-700 mx-auto" />
                <h3 className="text-base font-bold text-navy-200">조회할 신청서를 선택해 주세요.</h3>
                <p className="text-xs text-navy-400 max-w-sm mx-auto">
                  왼쪽 목록에서 자신의 이름이나 신청 ID 카드를 누르시면 상세 권리 분석 상태 피드백을 실시간으로 확인하실 수 있습니다.
                </p>
                {isAdminMode && (
                  <p className="text-[10px] text-gold-400 font-semibold bg-gold-500/10 border border-gold-500/20 py-2 rounded-lg max-w-sm mx-auto">
                    * 전문가 위원 모드가 켜져 있습니다. 신청 카드를 선택하여 직접 의견서 메모를 변경하고 실시간 동기화 상태를 실험할 수 있습니다.
                  </p>
                )}
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
