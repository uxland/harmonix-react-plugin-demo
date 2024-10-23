import ReactDOM from 'react-dom/client';
import  headerStyles  from "./header.css?inline";
export const HeaderItem = () => {
    return (
        <div>
            <style>
            {headerStyles}
            </style>
            <div className="title">
                Header React Plugin
            </div>
        </div>
    );
}

export class HeaderWebComponent extends HTMLElement {
    constructor() {
      super();
      this.root = this.attachShadow({ mode: 'open' });
    }
  
    connectedCallback() {
      const mountPoint = document.createElement('div');
      this.root.appendChild(mountPoint);
  
      // Renderiza el componente de React dentro del Web Component
      const root = ReactDOM.createRoot(mountPoint);
      root.render(<HeaderItem />);
    }
  }

  customElements.define('plugin-header-item', HeaderWebComponent);