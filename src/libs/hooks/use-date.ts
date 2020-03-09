import moment from 'moment';
import 'moment/locale/es';
import { useGlobalState } from './use-global-state';

/** date transformation (according to locale) */
export const useDate = () => {
  const {
    state: { locale },
  } = useGlobalState();

  function dateFromNow(date: Date | string) {
    return moment(date)
      .locale(locale)
      .local()
      .fromNow();
  }

  function getYearsFromNow(date: Date | string) {
    return moment().diff(date, 'years');
  }

  return { dateFromNow, getYearsFromNow };
};
