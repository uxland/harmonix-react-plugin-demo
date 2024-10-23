import react, { ReactNode } from "react";
export const CounterButton: react.FC<{children: ReactNode}> = ({children}) => {
      return (
        <button>
            {children}
        </button>
      );
    };