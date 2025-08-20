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
  
  const navigationMenu = api.regionManager.regions.shell.navigationMenu;
  api.regionManager.registerView(navigationMenu,{
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
  const mainRegion = api.regionManager.regions.shell.main;
  api.regionManager.removeView(mainRegion, "plugin-main-view");
  const navigationMenu = api.regionManager.regions.shell.navigationMenu;
  api.regionManager.removeView(navigationMenu, "plugin-quick-action");
  return Promise.resolve();
}