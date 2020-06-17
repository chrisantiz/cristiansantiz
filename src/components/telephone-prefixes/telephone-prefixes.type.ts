export interface Country {
  name: string;
  code: string;
  city: string;
  region: string;
  timezone: string;
  currencyCode: string;
  currencyConverter: number;
}

export interface Continent {
  name: string;
  code: string;
}

export interface ApiLocationResponse {
  requestIp: string;
  country: Country;
  continent: Continent;
  latitude: string;
  longitude: string;
}
