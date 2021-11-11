import type { Position } from '@capacitor/geolocation'
import { Geolocation } from '@capacitor/geolocation'
import { useEffect, useState } from 'react'

import { isGeolocationAvailable } from '../util/util'

interface PositionReturn {
    error?: any;
    position?: Position;
}
export function useWatchPosition(): PositionReturn {
    const [position, setPosition] = useState<Position>()
    const [errorMsg, setErrorMsg] = useState()
    const [watch, setWatch] = useState<string>()

    useEffect(() => {
        if (!isGeolocationAvailable()) {
            return;
        }
        if (!watch) {
            Geolocation.watchPosition({ enableHighAccuracy: true }, (position: Position | null, error) => {
                console.log(position)
                if (error) {
                    setErrorMsg(error)
                }
                if (position) {
                    setPosition(position)
                }
            }).then((id) => {
                setWatch(id)
            })
        }
        return () => {
            if (watch) {
                Geolocation.clearWatch({ id: watch })
                //this might not be needed due to GC
                setWatch(undefined)
            }
        }
    }, [])

    return { error: errorMsg, position }
}
export function useCheckPermission(): boolean {
    const [geolocationPermission, setGeolocationPermission] = useState(false)
    useEffect(() => {
        Geolocation.checkPermissions().then((perm) => {
            if (perm.location == 'granted') {
                setGeolocationPermission(true)
            } else {
                setGeolocationPermission(false)
            }

        })
    }, [])
    return geolocationPermission && isGeolocationAvailable()
}