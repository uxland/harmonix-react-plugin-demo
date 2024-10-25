import { ReactWebComponent } from "./react-web-component"

export const wrapReactViewFactory = ( Component: React.FC, styles: string) => {
    return () => Promise.resolve(new ReactWebComponent(Component, styles));
}