import dayjs from 'dayjs';

export function getYearsFromNow(date: Date | string) {
  return dayjs().diff(date, 'year');
}
