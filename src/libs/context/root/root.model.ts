import { LocaleType } from '../../i18n/languages';

export interface RootStateModel {
  openSideDrawer: boolean;
  /** active language */
  locale: LocaleType;
  initialDarkMode: boolean;
  activePath: string;
  myData: MyData;
}

export interface MyDataName {
  full: string;
  short: string;
}

export interface MyDataLinks {
  whatsapp: string;
  github: string;
  repository: string;
  linkedin: string;
  email: string;
  mobile: string;
}

export interface MyData {
  name: MyDataName;
  birthdate: string;
  currentLocation: string;
  socialMediaLinks: MyDataLinks;
}
