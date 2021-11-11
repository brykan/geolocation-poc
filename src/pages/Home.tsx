import {  IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import Location from '../components/Location';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Geolocation Sample Application</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen forceOverscroll>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Location />
      </IonContent>
    </IonPage>
  );
};

export default Home;
