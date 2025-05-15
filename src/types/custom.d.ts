declare namespace JSX {
  interface IntrinsicElements {
    'dss-button': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      onClick?: () => void;
      label?: string;
      size?: string;
      variant?: string;
    };
  }
} 