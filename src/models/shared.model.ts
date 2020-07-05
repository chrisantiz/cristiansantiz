/** index signature */
export interface Index<T> {
  [key: string]: T;
}

export type RuleHandler = (value: string) => boolean;

/** validator rule */
export interface Rule {
  handler: RuleHandler;
  message: string;
}
