import { IActivityHistoryItem, PrimariaApi, IActivityHistoryCustomFilter } from "@uxland/primary-shell";
import { ActivityHistoryItemWrapped } from "./activity-history-item/factory";
import { mockActivityHistoryItem } from "./activity-history-item/mocks";

export const asyncTask = (item) => {
	return new Promise((resolve) => {
		setTimeout(() => resolve([item]), 2000);
	});
};

export const executeInjectHistoryItemsTask = (api: PrimariaApi) => {
	const payload = {
		entityId: api.pluginInfo.pluginId,
		asyncDataProvider: () => asyncTask(mockActivityHistoryItem),
		componentFactory: (props: { item: IActivityHistoryItem }) =>
			ActivityHistoryItemWrapped({ item: props.item }),
		errorMessage: "Error plugin demo",
		searchPredicate: (searchString: string, item: any) =>
			item.title.toLowerCase().includes(searchString.toLowerCase()),
		filters: {
			id: api.pluginInfo.pluginId,
			title: "Plugin Demo",
			enabled: true,
			sort: "003",
			filters: [
				{
					id: "speciality",
					title: "Especialitat",
					propPathValue: ["professional", "speciality", "id"],
					propsPathDescription: ["professional", "speciality", "description"],
					enabled: true,
					type: "checkbox",
				},
				{
					id: "role",
					title: "Rol",
					propPathValue: ["professional", "role", "id"],
					propsPathDescription: ["professional", "role", "description"],
					enabled: true,
					type: "checkbox",
				},
				{
					id: "service",
					title: "Servei",
					propPathValue: ["service", "id"],
					propsPathDescription: ["service", "description"],
					enabled: true,
					type: "checkbox",
				},
			],
		} as IActivityHistoryCustomFilter,
	};
	api.broker.send("inject_async_history_items_request", payload);
};

export const addItem = (api: PrimariaApi) => {
	const newItem = { ...mockActivityHistoryItem, id: Math.random().toString() };
	return api.broker.send("add_history_item_request", {
		entityId: api.pluginInfo.pluginId,
		item: newItem,
	});
};

export const updateItem = (api: PrimariaApi) => {
	const newItem = {
		...mockActivityHistoryItem,
		date: "2025-05-18T09:20:09.903Z",
	};
	return api.broker.send("update_history_item_request", {
		entityId: api.pluginInfo.pluginId,
		item: newItem,
	});
};

export const deleteItem = (api: PrimariaApi) => {
	return api.broker.send("remove_history_item_request", {
		entityId: api.pluginInfo.pluginId,
		itemId: mockActivityHistoryItem.id,
	});
};
