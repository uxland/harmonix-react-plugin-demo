import { PrimariaApi, PrimariaMenuItem, shellRegions } from "@uxland/primary-shell";
import { factory as mainFactory } from "./views/main/main-view";
import { factory as headerFactory } from "./views/header/header-view";

export const initialize = (api: PrimariaApi) => {
  console.log(`Plugin ${api.pluginInfo.pluginId} initialized`);
  api.regionManager.registerMainView({
    id: "plugin-main-view",
    factory: () =>  mainFactory,
  }, "React plugin");
  
  api.regionManager.registerQuickAction({
    id: "plugin-quick-action",
    factory: () => Promise.resolve(new PrimariaMenuItem("add_circle_outline", "React plugin", () => {
      api.regionManager.activateMainView("plugin-main-view");
})),
  });

  api.regionManager.registerView(shellRegions.header,{
    id: "plugin-header-view",
    factory: () =>  headerFactory
  })
  return Promise.resolve();
};
export const dispose = (api: PrimariaApi) => {
  console.log(`Plugin ${api.pluginInfo.pluginId} disposed`);
  api.regionManager.removeView(shellRegions.main, "plugin-main-view");
  return Promise.resolve();
}