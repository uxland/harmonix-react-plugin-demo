import react, { ReactNode } from "react";
import styles from './counter-button.module.css';
export const CounterButton: react.FC<{children: ReactNode, onClick: () => void}> = ({children, onClick}) => {
      return (
        <button className={styles.button} onClick={onClick}>
            {children}
        </button>
      );
    };