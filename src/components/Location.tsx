import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonItem, IonLabel, IonList } from '@ionic/react';

import { useWatchPosition, useCheckPermission } from '../hooks/Geolocation';
import './Location.css';

const Location: React.FC<Record<string,never>> = () => {
  const {error,position} = useWatchPosition();
  const isPermissionEnabled = useCheckPermission();
  return (
    <div className="container">
      {isPermissionEnabled ?
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
          <p>Geolocation permissions are disabled for this application</p>
        </div>
      }
    </div>
  );
};

export default Location;
