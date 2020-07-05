export interface LabelsLocale {
  darkModeBtn: string;
  githubBtn: string;
  i18nButton: string;
}

export interface HomePageLabels {
  whatsapp: string;
  email: string;
  buttonKnowMore: string;
  cv: string;
}

export interface AboutMePage {
  linkLabel: string;
  title: string;
  paragraphs: {
    one: {
      partOne: string;
      partTwo: string;
    };
    two: string;
    three: string;
    four: string;
  };
  whyHireMe: {
    title: string;
    cards: AboutMeCard[];
  };
}

export interface AboutMeCard {
  title: string;
  classes: string;
  text: string;
}

export interface ProyectsPage {
  text: string;
  linkLabel: string;
  cards: ProjectsCard[];
}

export interface ProjectsCard {
  title: string;
  description: string;
  cardId: ProjectsCardId | string;
  content: string[];
}

export type ProjectsCardId = 'santz' | 'kirshas' | 'portfolio';

export interface ContactPage {
  text: string;
  linkLabel: string;
  validators: ValidatorGroup;
}

export interface ValidatorLabel {
  [key: string]: string;
}

export interface ValidatorGroup {
  [key: string]: ValidatorLabel;
}

export interface PagesLocale {
  home: {
    text: string;
    linkLabel: string;
    labels: HomePageLabels;
  };
  aboutMe: AboutMePage;
  skills: {
    linkLabel: string;
    text: string;
  };
  projects: ProyectsPage;
  contact: ContactPage;
  notFound: {
    title: string;
    h1: string;
    p: string;
    buttonText: string;
  };
}

/** necesary data for the toolbar componend and his children */
export interface PagesLinkLabel {
  home: string;
  aboutMe: string;
  skills: string;
  projects: string;
  contact: string;
}

/** data traslated */
export interface DataLocale {
  siteDescription: string;
  labels: LabelsLocale;
  pages: PagesLocale;
}
