import { useState } from 'react'
import { Geolocation, Position } from '@capacitor/geolocation'
import { hasGeolocationPermission } from '../util/util'

interface PositionReturn {
    error?: any;
    position?: Position;
}
const isPermissionGranted = hasGeolocationPermission()
export function useWatchPosition(): PositionReturn {
    const [position, setPosition] = useState<Position>()
    const [errorMsg, setErrorMsg] = useState()

    Geolocation.watchPosition({}, (position, error) => {
        if (error) {
            setErrorMsg(error)
        }
        if (position) {
            setPosition(position)
        }
    })
    return { error: errorMsg, position }
}