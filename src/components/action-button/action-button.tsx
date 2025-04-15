import react, { ReactNode } from "react";
export const ActionButton: react.FC<{children: ReactNode, onClick: () => void}> = ({children, onClick}) => {
      return (
        <button className="btn-action" onClick={onClick}>
            {children}
        </button>
      );
    };