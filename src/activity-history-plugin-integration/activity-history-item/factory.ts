import styles from "./styles.css?inline";
import { wrapReactViewFactory } from "@uxland/primary-shell";
import { ActivityHistoryItem } from "./activity-history-item";

export const ActivityHistoryItemWrapped = wrapReactViewFactory(ActivityHistoryItem, styles);
