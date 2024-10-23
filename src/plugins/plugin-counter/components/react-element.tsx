import React from 'react';
import ReactDOM from 'react-dom/client';
import styles from './react-element.css?inline';

// Tu componente de React
const ComponenteBasico = () => {

const [count, setCount] = React.useState(0);
const increment = () => setCount(count + 1);
const decrement = () => setCount(count - 1);

  return (
    <div>
      <h1>Contador: {count}</h1>
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement}>Decrementar</button>
      <h1>¡Hola, mundo!</h1>
      <p>Este es un componente funcional básico en React dentro de un Web Component.</p>
      <style type="text/css">{styles}</style>
    </div>
  );
};

// Web Component que encapsula el componente de React
export class ReactWebComponent extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const mountPoint = document.createElement('div');
    this.root.appendChild(mountPoint);

    // Renderiza el componente de React dentro del Web Component
    const root = ReactDOM.createRoot(mountPoint);
    root.render(<ComponenteBasico />);
  }
}

// Define el nuevo Web Component personalizado
customElements.define('react-web-component', ReactWebComponent);