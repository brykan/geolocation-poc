import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonIcon, IonItem, IonLabel, IonList } from '@ionic/react';
import { useWatchPosition, useCheckPermission } from '../hooks/Geolocation';
import './Location.css';

interface LocationProps { }
const Location: React.FC<LocationProps> = () => {
  const currentLocation = useWatchPosition();
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
                <IonLabel>Latitude </IonLabel>{currentLocation.position?.coords.latitude}
              </IonItem>
              <IonItem class='ion-no-padding'>
                <IonLabel>Longitude </IonLabel>{currentLocation.position?.coords.longitude}
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
