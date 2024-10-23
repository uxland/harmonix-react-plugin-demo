import { PrimariaApi, PrimariaMenuItem, shellRegions } from "@uxland/primary-shell";
import { ReactCSSWebComponent } from "./components/main";

export const initialize = (api: PrimariaApi) => {
  console.log(`Plugin ${api.pluginInfo.pluginId} initialized`);
  api.regionManager.registerMainView({
    id: "plugin-css-modules-main-view",
    factory: () =>  Promise.resolve(new ReactCSSWebComponent()) ,
  }, "React plugin");
  
  api.regionManager.registerQuickAction({
    id: "plugin-css-modules-quick-action",
    factory: () => Promise.resolve(new PrimariaMenuItem("add_circle_outline", "React CSS modules", () => {
      api.regionManager.activateMainView("plugin-css-modules-main-view")
    })),
  });
  return Promise.resolve();
};
export const dispose = (api: PrimariaApi) => {
  console.log(`Plugin ${api.pluginInfo.pluginId} disposed`);
  api.regionManager.removeView(shellRegions.main, "plugin-css-modules-main-view");
  return Promise.resolve();
}