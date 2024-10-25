import { wrapReactViewFactory } from "../../shared/adapter-react-web-component-factory";
import styles from "./styles.css?inline";
import { HeaderView } from "./view";

export const headerFactory = wrapReactViewFactory(HeaderView, styles);