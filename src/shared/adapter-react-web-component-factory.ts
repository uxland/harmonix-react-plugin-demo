import { ReactWebComponent } from "./react-web-component"

export const adapterReactWebComponentFactory = ( Component: React.FC, styles: string) => {
    return Promise.resolve(new ReactWebComponent(Component, styles));
}