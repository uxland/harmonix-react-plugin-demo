import { PluginDefinition, Plugin } from "@uxland/primary-shell";

const reactPluginImporter: () => Promise<Plugin> = () => import("./plugin") as any;
const clinicalMonitoringImporter: () => Promise<Plugin> = () => import("./clinical-monitoring/src/plugin") as any;

export const plugins: PluginDefinition[] = [
    { pluginId: "plugin-react", importer: reactPluginImporter },
    { pluginId: "clinical-monitoring", importer: clinicalMonitoringImporter },
];