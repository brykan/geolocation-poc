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
    const [error, setError] = useState()
    const [watch, setWatch] = useState<string>()
    useEffect(() => {
        if (!isGeolocationAvailable()) {
            return;
        }
        if (!watch) {
            Geolocation.watchPosition({ enableHighAccuracy: true }, (position: Position | null, error) => {
                if (error) {
                    setError(error)
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
    return { error: error, position }
}