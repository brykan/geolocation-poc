import { useState } from 'react'
import { Geolocation, Position } from '@capacitor/geolocation'
import { isGeolocationAvailable } from '../util/util'

interface PositionReturn {
    error?: any;
    position?: Position;
}
export function useWatchPosition(): PositionReturn {
    const [position, setPosition] = useState<Position>()
    const [errorMsg, setErrorMsg] = useState()
    const watch = Geolocation.watchPosition({ enableHighAccuracy: true }, (position: Position | null, error) => {
        if (error) {
            setErrorMsg(error)
        }
        if (position) {
            setPosition(position)
        }
    })
    return { error: errorMsg, position }
}
export function useCheckPermission(): boolean {
    const [geolocationPermission, setGeolocationPermission] = useState(false)
    Geolocation.checkPermissions().then((perm) => {
        if (perm.location == 'granted') {
            setGeolocationPermission(true)
        } else {
            setGeolocationPermission(false)
        }

    })
    return geolocationPermission && isGeolocationAvailable()
}