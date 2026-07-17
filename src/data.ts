import { PropertyListing, PaymentStep } from './types';

export const PROPERTIES: PropertyListing[] = [
  {
    id: 'filmore-danang',
    nameKo: '더 필모어 다낭',
    nameEn: 'The Filmore Da Nang',
    locationKo: '다낭 하이쩌우군 한강변 (용다리 인근)',
    locationEn: 'Bach Dang Street, Hai Chau, Da Nang',
    type: 'residential',
    priceVndBillion: 5.5, // 55억 동부터 시작
    bedrooms: [1, 2, 3],
    areaSqm: '48㎡ ~ 125㎡',
    completionDate: '2024년 완공 (즉시 입주 및 전매 가능)',
    landPurposeKo: '주거용 토지 (안정적인 소유권 보장)',
    landPurposeEn: 'Residential Land (Stable Ownership)',
    landDurationKo: '외국인 개인 50년 (법률에 의거 연장 신청 가능)',
    landDurationEn: 'Foreigner 50 Years (Extendable by Law)',
    foreignerApproved: true,
    quotaRemainingKo: '잔여 외국인 쿼터 소량 있음 (실시간 확인 필요)',
    quotaRemainingEn: 'Small amount of Foreigner Quota remains',
    certIssuanceKo: '소유권증서(핑크북) 발급 심사 진행 중',
    certIssuanceEn: 'Ownership Certificate (Pink Book) application in progress',
    vatIncluded: true,
    maintenanceIncluded: false, // 장기수선충당금 별도 (2%)
    longTermLeaseAllowed: true,
    shortTermRentAllowed: true, // 관리규약상 장기 주거 중심, 콘도텔식 단기 숙박은 운영 주체에 확인 필요
    developerKo: 'Filmore Development (필모어 디벨롭먼트)',
    builderKo: 'Delta Group (델타 그룹)',
    paymentSchedule: [
      { step: '예약금 (Deposit)', percentage: 5, description: '호실 지정을 위한 예약 신청금 (1억 동 내외)' },
      { step: '1차 납부 (계약시)', percentage: 25, description: '분양 계약서(SPA) 체결 및 대금 납부' },
      { step: '중도금 (분할 납부)', percentage: 40, description: '공정 및 기간별 순차 납부' },
      { step: '잔금 (인도 청구시)', percentage: 25, description: '열쇠 수령 및 주택 인도' },
      { step: '최종 잔금 (소유권 이전)', percentage: 5, description: '소유권증서(핑크북) 발급 완료 시 납부' }
    ],
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
    status: 'foreigner-possible'
  },
  {
    id: 'sun-cosmo-residence',
    nameKo: '선 코스모 레지던스',
    nameEn: 'Sun Cosmo Residence',
    locationKo: '다낭 응우하인선군 쩐티리 교량 인근',
    locationEn: 'Ngu Hanh Son, near Tran Thi Ly Bridge, Da Nang',
    type: 'residential',
    priceVndBillion: 4.8,
    bedrooms: [1, 2, 3],
    areaSqm: '43㎡ ~ 100㎡',
    completionDate: '2026년 상반기 예정',
    landPurposeKo: '장기 주거용 토지 (Căn hộ sở hữu lâu dài)',
    landPurposeEn: 'Long-term Residential Land',
    landDurationKo: '외국인 개인 50년 (양도 시 잔여기간 승계)',
    landDurationEn: 'Foreigner 50 Years (Succession on Transfer)',
    foreignerApproved: true,
    quotaRemainingKo: '외국인 30% 쿼터 범위 내 계약 가능 (동별 확인 필요)',
    quotaRemainingEn: 'Contracts available within 30% quota',
    certIssuanceKo: '완공 후 절차에 따라 핑크북 신청 예정',
    certIssuanceEn: 'Pink Book application after completion',
    vatIncluded: true,
    maintenanceIncluded: false, // 2% 별도
    longTermLeaseAllowed: true,
    shortTermRentAllowed: true,
    developerKo: 'Sun Group (선그룹 - 베트남 10대 개발사)',
    builderKo: 'Coteccons (코텍콘 - 1군 건설사)',
    paymentSchedule: [
      { step: '보증금 예약', percentage: 5, description: '호실 홀딩 계약금' },
      { step: '1차 대금 (SPA 체결)', percentage: 25, description: '분양계약서 서명 시 납입' },
      { step: '중도금 (10회 분할)', percentage: 40, description: '2개월 간격 4%씩 분할 납부' },
      { step: '주택 인도 (입주)', percentage: 25, description: '2026년 입주 시점' },
      { step: '증서 발급', percentage: 5, description: '핑크북 발급 시점 최종 납부' }
    ],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    status: 'foreigner-possible'
  },
  {
    id: 'sun-ponte-residence',
    nameKo: '선 폰테 레지던스',
    nameEn: 'Sun Ponte Residence',
    locationKo: '다낭 선짜군 한강변 (용다리 직망)',
    locationEn: 'Tran Hung Dao Street, Son Tra, Da Nang',
    type: 'residential',
    priceVndBillion: 6.2,
    bedrooms: [1, 2, 3],
    areaSqm: '45㎡ ~ 112㎡',
    completionDate: '2027년 상반기 예정',
    landPurposeKo: '주거용 토지 (한강변 요지 아파트)',
    landPurposeEn: 'Residential Land (Premium Waterfront)',
    landDurationKo: '외국인 개인 50년 (갱신 연장 신청 가능)',
    landDurationEn: 'Foreigner 50 Years (Renewable)',
    foreignerApproved: true, // 건설부 외국인 분양 승인 대기 또는 쿼터 수량 확인 진행 단계
    quotaRemainingKo: '외국인 분양 승인 절차 및 실시간 쿼터 확인 중',
    quotaRemainingEn: 'Quota confirmation and governmental procedures ongoing',
    certIssuanceKo: '완공 후 정상적 개별 핑크북 교부 대상',
    certIssuanceEn: 'Individual Pink Book eligible post-completion',
    vatIncluded: true,
    maintenanceIncluded: false,
    longTermLeaseAllowed: true,
    shortTermRentAllowed: true,
    developerKo: 'Sun Group (선그룹)',
    builderKo: 'Hoa Binh Construction (호아빈 건설)',
    paymentSchedule: [
      { step: '예약금 선납', percentage: 5, description: '호실 확보 선납금' },
      { step: '본계약서 (SPA)', percentage: 25, description: '계약금 및 1차 중도금 누계' },
      { step: '건설 단계별 중도금', percentage: 40, description: '골조 완성 단계까지 일정 분할' },
      { step: '인도 청구 (인도일)', percentage: 25, description: '주택 양도 통지일로부터 15일 이내' },
      { step: '소유권 이전 고시', percentage: 5, description: '소유권 권리 관계 등록일' }
    ],
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    status: 'checking-quota'
  },
  {
    id: 'wyndham-soleil-condo',
    nameKo: '윈덤 솔레이 다낭 (콘도텔)',
    nameEn: 'Wyndham Soleil Danang',
    locationKo: '다낭 선짜군 미케비치 교차로 바로 앞',
    locationEn: 'Pham Van Dong - Vo Nguyen Giap intersection, Da Nang',
    type: 'condotel',
    priceVndBillion: 3.5,
    bedrooms: [1, 2],
    areaSqm: '32㎡ ~ 75㎡ (스튜디오 및 1-2룸)',
    completionDate: '기완공 및 순차적 가동 중',
    landPurposeKo: '상업·서비스업용 토지 (토지용도가 주택이 아님)',
    landPurposeEn: 'Commercial & Service Land (Non-residential)',
    landDurationKo: '프로젝트 잔여 개발사용 승인 기간에 준함 (임대차 성격)',
    landDurationEn: 'Subject to project remaining lease period',
    foreignerApproved: false, // 외국인 주거용 소유권 대상 아님 (장기 임대 계약 형태 중심)
    quotaRemainingKo: '일반적 주택법 쿼터 비대상 (개발사 장기임대 계약만 가능)',
    quotaRemainingEn: 'Non-residential housing quota (Developer long lease option)',
    certIssuanceKo: '관광용 콘도텔로 개별 소유권증서 발급 제약 가능성 매우 높음',
    certIssuanceEn: 'Certificate issuance highly restricted due to tourism designation',
    vatIncluded: true,
    maintenanceIncluded: true, // 관리 위탁에 포함되거나 별도 정산
    longTermLeaseAllowed: false, // 자체 거주 목적 임대보다 관광 위탁 운영 성격 강함
    shortTermRentAllowed: true, // 호텔 브랜드 위탁 운영 필수 규정 확인 필요
    developerKo: 'PPC An Thinh Da Nang (PPC 안틴 다낭)',
    builderKo: 'Hoa Binh (호아빈)',
    paymentSchedule: [
      { step: '청약금', percentage: 10, description: '가계약 및 홀딩금' },
      { step: '계약 완료', percentage: 90, description: '인도 및 운영 위탁 연계 정산' }
    ],
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80',
    status: 'condotel-warning'
  },
  {
    id: 'the-sang-residence',
    nameKo: '더 생 레지던스',
    nameEn: 'The Sang Residence',
    locationKo: '다낭 응우하인선군 푸미안 (미케비치 하단 인근)',
    locationEn: 'Phu My An, Ngu Hanh Son, Da Nang',
    type: 'residential',
    priceVndBillion: 3.9,
    bedrooms: [1, 2],
    areaSqm: '62㎡ ~ 82㎡',
    completionDate: '2024년 완공 마감 단계',
    landPurposeKo: '주거용지',
    landPurposeEn: 'Residential Land',
    landDurationKo: '외국인 50년',
    landDurationEn: 'Foreigner 50 Years',
    foreignerApproved: true,
    quotaRemainingKo: '동별 외국인 쿼터 최종 집계 진행 중 (계약 전 정밀 대조 필수)',
    quotaRemainingEn: 'Foreigner Quota status needs developer validation',
    certIssuanceKo: '완공 후 준공 승인 완료 단계로 소유권 소명 요청 필요',
    certIssuanceEn: 'Due diligence on legal handover required',
    vatIncluded: true,
    maintenanceIncluded: false,
    longTermLeaseAllowed: true,
    shortTermRentAllowed: false, // 아파트 주민 공동자치 규약상 단기 에어비앤비 엄격 통제
    developerKo: 'The Sang JSC',
    builderKo: 'Hoa Binh (호아빈)',
    paymentSchedule: [
      { step: '예약 신청', percentage: 5, description: '가계약금' },
      { step: '본계약서 서명', percentage: 25, description: 'SPA 서명 및 입금' },
      { step: '입주 대금 잔금', percentage: 65, description: '입주 및 열쇠 인수' },
      { step: '소유권 발급 완료', percentage: 5, description: '핑크북 수령 전 최종 정리' }
    ],
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80',
    status: 'need-ownership-check'
  },
  {
    id: 'monarchy-b-danang',
    nameKo: '모나치 아파트 B동',
    nameEn: 'The Monarchy Block B',
    locationKo: '다낭 선짜군 안하이떠이 (용다리-쩐티리 교량 사이)',
    locationEn: 'An Hai Tay, Son Tra, Da Nang',
    type: 'residential',
    priceVndBillion: 2.8,
    bedrooms: [1, 2, 3],
    areaSqm: '47㎡ ~ 110㎡',
    completionDate: '2020년 준공 완료 및 안정적 운영 중',
    landPurposeKo: '주택 주거용지',
    landPurposeEn: 'Residential Land',
    landDurationKo: '외국인 소유기간 만료 잔여기간 상속 및 양도 승계',
    landDurationEn: 'Transfer remaining period of 50 years lease',
    foreignerApproved: true,
    quotaRemainingKo: '외국인 분양 승인 30% 쿼터 전석 마감 (베트남인 양수 전매 계약만 가능)',
    quotaRemainingEn: 'Quota fully sold out (Only Vietnamese-owned resell options possible for locals)',
    certIssuanceKo: '일부 세대 개별 핑크북 발급 완료',
    certIssuanceEn: 'Pink Book issued to several qualified units',
    vatIncluded: true,
    maintenanceIncluded: true,
    longTermLeaseAllowed: true,
    shortTermRentAllowed: true,
    developerKo: 'NDN (다낭주택개발그룹)',
    builderKo: 'NDN',
    paymentSchedule: [
      { step: '전매 전액 완납', percentage: 100, description: '전매 거래이므로 공증 계약서 작성 시 대금 100% 지급 및 인수인계' }
    ],
    image: 'https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=1200&q=80',
    status: 'quota-closed'
  }
];

export const DICTIONARY = {
  ko: {
    brandName: '다낭 세이프홈',
    tagline: '다낭 부동산, 매물보다 권리관계를 먼저 확인합니다.',
    subTagline: '외국인 소유 가능 여부부터 토지 용도, 외국인 쿼터, 소유권증서와 세금까지 확인한 후 안내합니다.',
    navHome: '홈',
    navCompare: '주거용 vs 콘도텔',
    navProperties: '추천 매물',
    navConditions: '외국인 구매 요건',
    navCalculator: '예산 계산기',
    navChecklist: '체크리스트',
    navInquiry: '상담 신청',
    navDashboard: '상담 내역 조회',
    callToAction: '권리분석 및 매물상담 신청',
    kakaoConsult: '카카오톡 상담',
    telegramConsult: '텔레그램 상담',
    inquiryDirect: '매물 문의하기',
    residentialLabel: '주거용 아파트',
    condotelLabel: '콘도텔·관광용 아파트',
    verifiedOnly: '외국인 구입 확인 매물',
    statusPossible: '외국인 계약 가능',
    statusChecking: '외국인 쿼터 확인 중',
    statusClosed: '외국인 쿼터 마감',
    statusNeedCheck: '소유권증서 확인 필요',
    statusCondotel: '콘도텔·관광용 부동산',
    warningTitle: '주의 및 경고',
    warningContent: '외국인 구입 가능 여부가 확인되지 않은 매물에는 절대로 "외국인 구입 가능" 표시를 하지 않습니다.'
  },
  en: {
    brandName: 'SafeHome Da Nang',
    tagline: 'Da Nang Real Estate: Rights and Title Due Diligence First.',
    subTagline: 'We guide you after auditing ownership eligibility, land purpose, quota availability, pink book, and tax/remittance regulations.',
    navHome: 'Home',
    navCompare: 'Residential vs Condotel',
    navProperties: 'Properties',
    navConditions: 'Foreigner Requirements',
    navCalculator: 'Budget Estimator',
    navChecklist: 'Checklist',
    navInquiry: 'Consultation',
    navDashboard: 'My Requests',
    callToAction: 'Request Legal Audit',
    kakaoConsult: 'KakaoTalk',
    telegramConsult: 'Telegram',
    inquiryDirect: 'Property Inquiry',
    residentialLabel: 'Residential Apartment',
    condotelLabel: 'Condotel / Tourist Apt',
    verifiedOnly: 'Verified Foreigner-Eligible',
    statusPossible: 'Foreigner Contract Possible',
    statusChecking: 'Quota Under Audit',
    statusClosed: 'Quota Sold Out',
    statusNeedCheck: 'Ownership Title Audit Required',
    statusCondotel: 'Condotel / Tourist Property',
    warningTitle: 'Disclaimer & Caution',
    warningContent: 'We never label a property "Foreigner Eligible" unless strictly validated by official regulatory construction listings.'
  },
  vi: {
    brandName: 'SafeHome Đà Nẵng',
    tagline: 'Bất động sản Đà Nẵng: Thẩm định pháp lý là ưu tiên hàng đầu.',
    subTagline: 'Chúng tôi chỉ tư vấn sau khi xác minh điều kiện sở hữu của người nước ngoài, mục đích sử dụng đất, room ngoại bang, sổ hồng và quy định chuyển tiền.',
    navHome: 'Trang chủ',
    navCompare: 'Căn hộ vs Condotel',
    navProperties: 'Dự án',
    navConditions: 'Điều kiện sở hữu',
    navCalculator: 'Tính ngân sách',
    navChecklist: 'Checklist pháp lý',
    navInquiry: 'Đăng ký tư vấn',
    navDashboard: 'Yêu cầu của tôi',
    callToAction: 'Đăng ký thẩm định pháp lý',
    kakaoConsult: 'KakaoTalk',
    telegramConsult: 'Telegram',
    inquiryDirect: 'Liên hệ dự án',
    residentialLabel: 'Căn hộ chung cư (Để ở)',
    condotelLabel: 'Condotel / Căn hộ du lịch',
    verifiedOnly: 'Hợp pháp cho người nước ngoài',
    statusPossible: 'Có thể ký HĐMB cho người nước ngoài',
    statusChecking: 'Đang xác minh room ngoại bang',
    statusClosed: 'Đã hết room người nước ngoài',
    statusNeedCheck: 'Cần thẩm định pháp lý sổ hồng',
    statusCondotel: 'BĐS nghỉ dưỡng / Condotel',
    warningTitle: 'Lưu ý quan trọng',
    warningContent: 'Tuyệt đối không dán nhãn "Người nước ngoài có thể mua" trừ khi đã có văn bản chấp thuận chính thức từ Sở Xây dựng.'
  }
};

export const COMPARISON_DATA = [
  {
    criteria: '베트남 용어 (Vietnamese Term)',
    residential: 'Căn hộ chung cư (Sở hữu lâu dài)',
    condotel: 'Condotel / Căn hộ du lịch'
  },
  {
    criteria: '토지 용도 (Land Purpose)',
    residential: '주거용 토지 (Residential Land)',
    condotel: '상업·서비스용 토지 (Commercial & Service Land)'
  },
  {
    criteria: '외국인 소유권 (Foreign Ownership)',
    residential: '건설부 허가 및 30% 쿼터 요건 충족 시 가능',
    condotel: '프로젝트 승인 및 분양 형태별 제한적 (불확실성 높음)'
  },
  {
    criteria: '소유 기간 (Ownership Duration)',
    residential: '최대 50년 및 정당한 갱신 신청 가능',
    condotel: '개발사 잔여 허가기간(통상 50년 이하) 연장 불가할 수 있음'
  },
  {
    criteria: '실거주 등록 (Residence Registration)',
    residential: '합법적 장기 주소지 및 임시 거주증 발급 가능',
    condotel: '숙박 시설 성격으로 거주 등록 불가 또는 제한 가능'
  },
  {
    criteria: '임대 운영 (Rental Operations)',
    residential: '소유주 직접 또는 대행사를 통한 장기임대 자율 진행',
    condotel: '호텔 위탁운영 의무 계약 조건 또는 수익분배 계약 체결'
  },
  {
    criteria: '핵심 검토사항 (Key Audit Item)',
    residential: '외국인 30% 쿼터 잔여 수량 및 준공 후 핑크북 신청 여부',
    condotel: '개발사 대출 담보 여부, 토지 사용 종료일, 위탁 계약 독소조항'
  }
];

export const CHECKLIST_ITEMS = [
  { id: 'type', label: '주거용 아파트(Chung cư)인지 콘도텔(Condotel)인지 정확한 구분', checked: false },
  { id: 'land_purpose', label: '토지사용 목적이 "장기 주거용"인지 "상업/관광 서비스용"인지 여부', checked: false },
  { id: 'land_expire', label: '토지사용 만료일과 프로젝트에 남은 잔여기간 확인', checked: false },
  { id: 'danang_approved', label: '다낭시 건설국(Sở Xây dựng) 공식 외국인 분양 허가 아파트 목록 확인', checked: false },
  { id: 'quota_remaining', label: '해당 아파트 동의 외국인 30% 분양 쿼터 실시간 잔여 상황 검증', checked: false },
  { id: 'pink_book', label: '준공 시 개별 소유권증서(핑크북) 발급 적격성 및 선례 확인', checked: false },
  { id: 'dev_tax_debt', label: '개발사(Developer)의 토지 대금 완납 여부 및 지방세 체납 확인', checked: false },
  { id: 'collateral_loan', label: '프로젝트 토지 또는 건설 대상 세대가 은행에 담보로 잡혀있는지 여부', checked: false },
  { id: 'mortgage_release', label: '담보 설정 시 분양 계약 전에 개별 담보 해지(Giải chấp) 확약서 발급 여부', checked: false },
  { id: 'sales_approval', label: '정식 분양 가능 승인서(외국인 판매 적격 결정문) 확보 여부', checked: false },
  { id: 'fire_inspection', label: '소방 검사(Nghiệm thu PCCC) 및 준공 승인 검사 완료 확인', checked: false },
  { id: 'vat_included', label: '분양 공고 가격에 부가가치세(VAT 10%)가 명시적으로 포함되었는지', checked: false },
  { id: 'maintenance_fund', label: '장기수선충당금(2% KPBT)이 포함된 가격인지 별도 부과인지 확인', checked: false },
  { id: 'airbnb_rules', label: '아파트 관리 위원회(Ban quản trị) 자치 규약상 단기 숙박 임대 금지 조항 유무', checked: false },
  { id: 'refund_terms', label: '개발사 귀책으로 인한 분양 연기 시 해약권 및 원금+이자 반환 약정', checked: false },
  { id: 'delay_penalty', label: '시공/입주 지연 시 일단위 배상 지체 보상금(Lãi phạt chậm bàn giao) 확인', checked: false },
  { id: 'transfer_period', label: '기존 외국인 소유자로부터 양수(전매) 시 새로운 50년이 아닌 "잔여 소유기간 승계" 확인', checked: false },
  { id: 'account_match', label: '송금 및 수납 계좌가 분양계약서상의 "개발사 법인 계좌"와 완벽히 일치하는지', checked: false }
];
