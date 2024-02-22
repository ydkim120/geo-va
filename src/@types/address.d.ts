export interface addressType {
  roadAddress: string; // 도로명 주소
  jibunAddress: string; // 지번
  englishAddress: string; // 영문 주소
  postalCode: string; // 우편번호
  position?: { x: number, y: number }; // 위도 & 경도
}
