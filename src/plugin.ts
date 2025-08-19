import { PrimariaApi, PrimariaNavItem } from "@uxland/primary-shell";
import { mainFactory } from "./views/main/factory";
import { executeInjectHistoryItemsTask } from "./activity-history-plugin-integration/activity-history-actions";

export const initialize = (api: PrimariaApi) => {
  console.log(`Plugin ${api.pluginInfo.pluginId} initialized`);
  executeInjectHistoryItemsTask(api);

  api.regionManager.registerMainView({
    id: "plugin-main-view",
    factory: ()=>mainFactory({api})
  });
  
  api.regionManager.registerNavigationMenu({
    id: "plugin-quick-action",
    factory: () => Promise.resolve(new PrimariaNavItem({
        icon: "add_circle_outline",
        label: "React plugin",
        callbackFn: () => {
      api.regionManager.activateMainView("plugin-main-view")}
    })),
  });
};
export const dispose = (api: PrimariaApi) => {
  console.log(`Plugin ${api.pluginInfo.pluginId} disposed`);
  const content = api.regionManager.regions.clinicalMonitoring.content;
  api.regionManager.removeView(content, "plugin-main-view");
  return Promise.resolve();
}