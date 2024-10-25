import { wrapReactViewFactory } from "../../shared/adapter-react-web-component-factory";
import { MainView } from "./view";
import styles from "./styles.css?inline";

export const mainFactory = wrapReactViewFactory(MainView, styles);