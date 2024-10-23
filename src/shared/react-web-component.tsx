import ReactDOM from "react-dom/client";
import React from "react";


export class ReactWebComponent extends HTMLElement {
  jsx: React.FC;
  styles: string;
  constructor(content: React.FC, styles: string) {
    super();
    this.jsx = content;
    this.styles = styles;
    this.root = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const mountPoint = document.createElement('div');
    const styleElement = document.createElement('style');
    styleElement.innerText = this.styles;
    this.root.appendChild(mountPoint);
    this.root.appendChild(styleElement);
    // Renderiza el componente de React dentro del Web Component
    const root = ReactDOM.createRoot(mountPoint);
    root.render(React.createElement(this.jsx));
  }
}
customElements.define('react-web-component', ReactWebComponent);