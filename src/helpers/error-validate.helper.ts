import { Rule } from '@/models/shared.model';

type CB = (isError: boolean, message: string) => void;

export function errorValidate(value: string, rules: Rule[], cb: CB) {
  if (!rules || !rules.length) return;

  for (const error of rules) {
    if (!error.handler(value)) {
      cb(true, error.message);
      break;
    } else {
      cb(false, '');
    }
  }
}
