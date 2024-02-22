export interface geocodeResponseType {
  status: string;
  meta: object;
  addresses: object[];
  errorMessage: string;
}

export interface geocodeResponseAddressType {
  roadAddress: string;
  jibunAddress: string;
  englishAddress: string;
  addressElements: object[];
  x: number;
  y: number;
  distance: number;
}