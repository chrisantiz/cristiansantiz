import { RuleHandler } from '@/models/shared.model';

export class Validator {
  public static required: RuleHandler = v => !!v;

  public static match(regex: RegExp): RuleHandler {
    return v => regex.test(v);
  }

  public static minLength(length: number): RuleHandler {
    return v => v.length >= length;
  }

  public static maxLength(length: number): RuleHandler {
    return v => v.length <= length;
  }
}
