import react, { ReactNode } from "react";
import styles from './counter-button.module.css';
export const CounterButton: react.FC<{children: ReactNode}> = ({children}) => {
      return (
        <button className={styles.button}>
            {children}
        </button>
      );
    };