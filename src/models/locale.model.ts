export interface LinksLocale {
  home: string;
  aboutMe: string;
  projects: string;
  contact: string;
}

export interface LabelsLocale {
  darkModeBtn: string;
  githubBtn: string;
}

export interface PagesLocale {
  home: {
    text: string;
  };
  aboutMe: {
    text: string;
  };
  projects: {
    text: string;
  };
  contact: {
    text: string;
  };
}

/** data traslated */
export interface DataLocale {
  links: LinksLocale;
  labels: LabelsLocale;
  pages: PagesLocale;
}
