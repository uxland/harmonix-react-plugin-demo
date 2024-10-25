import React from 'react';
import styles from './main.css?inline';
import {CounterButton} from "../../components/counter-button/counter-button";
import { adapterReactWebComponentFactory } from '../../shared/adapter-react-web-component-factory';

export const MainView = () => {

const [count, setCount] = React.useState(0);
const increment = () => setCount(count + 1);
const decrement = () => setCount(count - 1);

  return (
    <>
      <h1>React Harmonix plugin</h1>
      <h2>Contador: {count}</h2>
      <CounterButton onClick={increment}>Incrementar</CounterButton>
      <CounterButton onClick={decrement}>Decrementar</CounterButton>
      <h1>¡Hola, mundo!</h1>
      <p>Este es un componente funcional básico en React dentro de un Web Component.</p>
    </>
  );
};
export const factory = adapterReactWebComponentFactory(MainView, styles);