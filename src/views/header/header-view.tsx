import headerStyles  from "./header.css?inline";
import { adapterReactWebComponentFactory } from "../../shared/adapter-react-web-component-factory";
export const HeaderView = () => {
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

export const factory = adapterReactWebComponentFactory(HeaderView, headerStyles);