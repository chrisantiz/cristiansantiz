export interface LabelsLocale {
  darkModeBtn: string;
  githubBtn: string;
  i18nButton: string;
}

export interface PagesLocale {
  home: {
    text: string;
    linkLabel: string;
  };
  aboutMe: {
    text: string;
    linkLabel: string;
  };
  projects: {
    text: string;
    linkLabel: string;
  };
  contact: {
    text: string;
    linkLabel: string;
  };
}

/** necesary data for the toolbar componend and his children */
export interface PagesToolbarData {
  home: {
    labelLink: string;
  };
  aboutMe: {
    labelLink: string;
  };
  projects: {
    labelLink: string;
  };
  contact: {
    labelLink: string;
  };
}

/** data traslated */
export interface DataLocale {
  labels: LabelsLocale;
  pages: PagesLocale;
}
