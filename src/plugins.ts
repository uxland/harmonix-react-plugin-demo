import { PluginDefinition, Plugin } from "@uxland/primary-shell";

const importer: () => Promise<Plugin> = () => import("./plugins/plugin-counter/entry") as any;

export const plugins: PluginDefinition[] = [
    { pluginId: "plugin-react", importer: importer },
    { pluginId: "plugin-react", importer:  () => import("./plugins/plugin-counter-css-modules/entry") as any },
];