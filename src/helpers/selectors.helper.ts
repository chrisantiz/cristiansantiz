import { DataLocale, PagesLinkLabel } from '../models/locale.model';

export function pagesLinkLabelSelector(data: DataLocale): PagesLinkLabel {
  const labels: any = {};
  for (let page in data.pages) {
    labels[page] = (data.pages as any)[page].linkLabel;
  }
  return labels;
}
