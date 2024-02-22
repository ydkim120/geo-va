// 현재 위치 반환 hooks
import { useState, useEffect } from 'react'

interface locationType {
  loaded: boolean;
  coordinates?:{ lat: number, lng: number}; // 위도 & 경도
  error?: { code: number, message: string };
}

const useGeolocation = () => {
  const [location, setLocation] = useState<locationType>({
    loaded: false,
    coordinates: {lat: 0, lng: 0},
  })

  // 조회 성공
  const onSuccess = (location: {
    coords: {lat: number, lng: number}
  }) => {
    setLocation({
      loaded: true,
      coordinates: {
        lat: location.coords.lat,
        lng: location.coords.lng
      }
    })
  }
  // 조회 에러
  const onError = (error: { 
    code: number,
    message: string
  }) => {
    setLocation({
      loaded: true,
      error
    })
  }

  useEffect(() => {
    if (!('geolocation' in navigator)) {
      onError({
        code: 0,
        message: 'Geolocation not supported.'
      })
    }
    navigator.geolocation.getCurrentPosition(onSuccess, onError)
  }, [])
  return location
}

export default useGeolocation