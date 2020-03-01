import moment from 'moment';
import 'moment/locale/es';
import { useContext } from 'react';
import { RootContext } from '../context/root/root.context';

/** date transformation (according to locale) */
export const useDate = () => {
  const { getState } = useContext(RootContext);

  const locale = getState(t => t.locale);

  function dateFromNow(date: Date | string) {
    return moment(date)
      .locale(locale)
      .local()
      .fromNow();
  }

  return { dateFromNow };
};
