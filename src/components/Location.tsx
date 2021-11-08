import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonIcon, IonItem, IonLabel, IonList, IonText } from '@ionic/react';
import { locationSharp } from 'ionicons/icons'
import { useWatchPosition } from '../hooks/Geolocation';
import './Location.css';

interface LocationProps { }

const Location: React.FC<LocationProps> = () => {
  const currentLocation = useWatchPosition();
  return (
    <div className="container">
      {currentLocation ?
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
        <div />
      }
    </div>
  );
};

export default Location;
