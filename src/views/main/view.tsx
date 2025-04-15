import React from 'react';
import { ActionButton } from "../../components/action-button/action-button";
import { addItem, updateItem } from '../../activity-history-plugin-integration/activity-history-actions';
import { PrimariaApi } from '@uxland/primary-shell';

interface MainViewProps {
  api: PrimariaApi;
}

export const MainView: React.FC<MainViewProps> = ({api}) => {

const addHistoryItem = () => addItem(api);
const modifyHistoryItem = () => updateItem(api);

  return (
    <>
      <h1>React Harmonix plugin</h1>
      <ActionButton onClick={addHistoryItem}>Afegir Element</ActionButton>
      <ActionButton onClick={modifyHistoryItem}>Modificar Element</ActionButton>
      <p>Afegeix o modifica elements al segiment clinic.</p>
    </>
  );
};
