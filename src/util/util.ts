import { Capacitor } from '@capacitor/core'
//Function to check the Geolocation permission and availability
export function isGeolocationAvailable() {
    const isAvailable = Capacitor.isPluginAvailable('Geolocation');
    return isAvailable
}
