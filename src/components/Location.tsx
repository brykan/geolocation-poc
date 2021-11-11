import {  IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonItem, IonLabel, IonList } from '@ionic/react';

import { useWatchPosition } from '../hooks/Geolocation';
import './Location.css';

const Location: React.FC<Record<string,never>> = () => {
  const {error,position} = useWatchPosition();
  return (
    <div className="container">
      {!error ?
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>
              Location Details
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent >
            <IonList>
              <IonItem class='ion-no-padding'>
                <IonLabel>Latitude </IonLabel>{position?.coords.latitude}
              </IonItem>
              <IonItem class='ion-no-padding'>
                <IonLabel>Longitude </IonLabel>{position?.coords.longitude}
              </IonItem>
            </IonList>

          </IonCardContent>
        </IonCard>
        :
        <div className="content">
          <strong>Unable to fetch current location</strong>
          <p>{error.message}</p>
        </div>
      }
    </div>
  );
};

export default Location;
