import React, { useRef, useState } from 'react';
import { addItem, updateItem } from '../../activity-history-plugin-integration/activity-history-actions';
import { PrimariaApi } from '@uxland/primary-shell';

interface MainViewProps {
  api: PrimariaApi;
}

export const MainView: React.FC<MainViewProps> = ({api}) => {
  const [missatge, setMissatge] = useState<string | null>(null);
  const subscriptionRef = useRef<any>(null);

  const addHistoryItem = () => addItem(api);
  const modifyHistoryItem = () => updateItem(api);

  const publicarEvent = () => {
    api.broker.publish("event_react_demo", { missatge: "Event rebut correctament!" });
  };

  const escoltarEvent = () => {
    if (subscriptionRef.current) return;
    subscriptionRef.current = api.broker.subscribe("event_react_demo", (payload: any) => {
      setMissatge(payload?.missatge || "Missatge buit");
    });
  };
  
  return (
    <>
      <h1>React Harmonix plugin</h1>
      <div style={{display: "flex", gap: "10px"}}>
        <dss-button onClick={addHistoryItem} label="Afegir Element" size="md" variant="primary"></dss-button>
        <dss-button onClick={modifyHistoryItem} label="Modificar Element" size="md" variant="primary"></dss-button>
      </div>
      <p>Afegeix o modifica elements al seguiment clinic.</p>
      <div style={{display: "flex", gap: "10px"}}>
        <dss-button onClick={publicarEvent} label="Publicar event" size="md" variant="primary"></dss-button>
        <dss-button onClick={escoltarEvent} label="Escoltar event" size="md" variant="secondary"></dss-button>
      </div>
      {missatge && (
        <div style={{ marginTop: "20px", color: "green" }}>
          <strong>Missatge rebut:</strong> {missatge}
        </div>
      )}
      <p>
        Clicka primer en "Escoltar event" i després en "Publicar event" per veure com funciona la comunicació mitjançant l'API.
      </p>
    </>
  );
};
