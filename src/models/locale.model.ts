export interface LabelsLocale {
  darkModeBtn: string;
  githubBtn: string;
}

export interface PagesLocale {
  home: {
    text: string;
    labelLink: string;
  };
  aboutMe: {
    text: string;
    labelLink: string;
  };
  projects: {
    text: string;
    labelLink: string;
  };
  contact: {
    text: string;
    labelLink: string;
  };
}

/** data traslated */
export interface DataLocale {
  labels: LabelsLocale;
  pages: PagesLocale;
}
