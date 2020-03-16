interface Props {
  condition: boolean;
}

interface PropsHandleFunction {
  onTrue: string;
  onFalse: string;
  always?: string;
}

export const useConditionalString = ({ condition }: Props) => {
  function handle({
    onTrue,
    onFalse,
    always = '',
  }: PropsHandleFunction): string {
    return (condition ? onTrue : onFalse).concat(always && ` ${always}`);
  }

  return { conditionalString: handle };
};
