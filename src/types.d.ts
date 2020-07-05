declare module '*.json' {
  const value: any;
  export default value;
}

declare type TextAreaHTMLComponent = React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;

declare type InputHTMLComponent = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

// declare module '*.svg' {
//   const value: any;
//   export default value;
// }

// declare module '*.svg' {
//   const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
//   export default content;
// }

declare module '\*.svg' {
  import React = require('react');
  const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}

declare module 'wowjs';
