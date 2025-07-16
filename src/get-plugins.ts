import { PrimariaApi } from "@uxland/primary-shell";

const pluginStoreUrl = "https://preproduccio.componentssiscat.hes.catsalut.intranet.gencat.cat";
export const getPlugins = async(api: PrimariaApi)=>{
    const response = await api.httpClient.request({url: `${pluginStoreUrl}/api/feed`, method: "GET"});
    if(response.status !== 200) throw new Error("Error fetching plugins");
    return response.data.data.plugins.map((plugin: any) => {
      return {
        pluginId: plugin.id,
        importer: () => import(`${pluginStoreUrl}/plugins/${plugin.src}`),
      };
    });
}