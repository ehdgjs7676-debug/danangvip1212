export type PropertyType = 'residential' | 'condotel';

export type PropertyStatus =
  | 'foreigner-possible'       // 외국인 계약 가능
  | 'checking-quota'          // 외국인 쿼터 확인 중
  | 'quota-closed'            // 외국인 쿼터 마감
  | 'need-ownership-check'    // 소유권증서 확인 필요
  | 'condotel-warning';        // 콘도텔·관광용 부동산

export interface PaymentStep {
  step: string;
  percentage: number;
  description: string;
}

export interface PropertyListing {
  id: string;
  nameKo: string;
  nameEn: string;
  locationKo: string;
  locationEn: string;
  type: PropertyType;
  priceVndBillion: number; // e.g., 5.2 for 5.2B VND
  bedrooms: number[];
  areaSqm: string;
  completionDate: string;
  landPurposeKo: string;
  landPurposeEn: string;
  landDurationKo: string;
  landDurationEn: string;
  foreignerApproved: boolean;
  quotaRemainingKo: string;
  quotaRemainingEn: string;
  certIssuanceKo: string;
  certIssuanceEn: string;
  vatIncluded: boolean;
  maintenanceIncluded: boolean; // 장기수선충당금 포함 여부
  longTermLeaseAllowed: boolean; // 장기임대 가능 여부
  shortTermRentAllowed: boolean; // 단기숙박 가능 여부
  developerKo: string;
  builderKo: string;
  paymentSchedule: PaymentStep[];
  image: string;
  status: PropertyStatus;
}

export type Language = 'ko' | 'vi' | 'en';

export interface Inquiry {
  id: string;
  name: string;
  contact: string;
  contactType: 'kakaotalk' | 'telegram' | 'phone';
  nationality: string;
  residence: string;
  purpose: string;
  liveOrLease: string;
  preferredRegion: string;
  preferredProject: string;
  budget: string;
  bedrooms: string;
  moveInTime: string;
  needLoan: 'yes' | 'no' | 'unconfirmed';
  content: string;
  createdAt: string;
  status: 'new' | 'consulting' | 'completed';
  adminNotes?: string;
}
