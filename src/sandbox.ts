import { bootstrapPlugins, initializeShell, shellApi } from "@uxland/primary-shell";
import { plugins } from "./plugins"
import "@uxland/primary-shell/dist/style.css";
import { getPlugins } from "./get-plugins";

const createAndAppendSandboxApp= () => {
  const app = document.createElement("sandbox-app");
  document.body.appendChild(app);
  const sandbox = document.querySelector("sandbox-app");
  return sandbox as HTMLElement;
};

const initializeSandboxApp = async (sandbox: HTMLElement) => {
  try {
    if (sandbox) {
        initializeShell(sandbox);
        const plugins = await getPlugins(shellApi);
        bootstrapPlugins(plugins);
      }
    }
    catch (error) {
      console.warn(error);
    }
 }

const app = createAndAppendSandboxApp();
initializeSandboxApp(app);