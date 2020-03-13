export interface LabelsLocale {
  darkModeBtn: string;
  githubBtn: string;
  i18nButton: string;
}

export interface HomePageLabels {
  whatsapp: string;
  email: string;
  buttonKnowMore: string;
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
    cards: [
      {
        title: string;
        classes: string;
        text: string;
      },
      {
        title: string;
        classes: string;
        text: string;
      },
      {
        title: string;
        classes: string;
        text: string;
      },
    ];
  };
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
  projects: {
    text: string;
    linkLabel: string;
  };
  contact: {
    text: string;
    linkLabel: string;
  };
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
