import React from 'react';
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
      <dss-button onClick={addHistoryItem} label="Afegir Element" size="md" variant="primary"></dss-button>
      <dss-button onClick={modifyHistoryItem} label="Modificar Element" size="md" variant="primary"></dss-button>
      <p>Afegeix o modifica elements al segiment clinic.</p>
    </>
  );
};
