import React from 'react';
import ReactDOM from 'react-dom/client';

// Tu componente de React
const ComponenteBasico = () => {
  return (
    <div>
      <h1>¡Hola, mundo!</h1>
      <p>Este es un componente funcional básico en React dentro de un Web Component.</p>
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