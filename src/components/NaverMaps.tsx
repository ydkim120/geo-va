import React, { useState, useEffect } from 'react';
import {
  Container as MapDiv, NaverMap, Marker, useNavermaps,
} from 'react-naver-maps';
import { Skeleton } from '@/components/ui/skeleton.tsx';

const naverMaps = useNavermaps();

// const loadScript = (src: string, callback?: () => void) => {
//   const script = document.createElement('script');
//   script.type = 'text/javascript';
//   script.src = src;
//   if (callback) script.onload = () => callback();
//   document.head.appendChild(script);
// };

function NaverMaps({
  mapWidth, // 맵 너비
  mapHeight, // 맵 높이
  latitude, // 위도 *
  longitude, // 경도 *
  isMarker, // 마커 사용 유무
  markerLatitude, // 마커 위도
  markerLongitude, // 마커 경도
  defaultZoom, // zoom 배율
}: {
  mapWidth?: string;
  mapHeight?: string;
  latitude: number;
  longitude: number;
  isMarker?: boolean;
  markerLatitude?: number;
  markerLongitude?: number;
  defaultZoom?: number;
}) {
  // 지도 로딩 상태
  const [isMapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    // loadScript(
    //   'https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=wxm74y5h9u',
    // );
    setMapLoaded(true);
  }, [latitude, longitude]);

  return (
    <>
      {/* 위치 정보(지도) */}
      <div className="mb-8 mt-40 flex w-screen flex-col items-center">
        <span className="sm:text-md font-Pretendard text-sm font-bold text-[#06439F] md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
          위치 안내
        </span>
        {isMapLoaded ? (
          <MapDiv
            style={{
              width: mapWidth,
              height: mapHeight,
            }}
          >
            <NaverMap
              defaultCenter={new naverMaps.LatLng(latitude, longitude)}
              defaultZoom={defaultZoom}
            >
              {isMarker && (
                <Marker
                  defaultPosition={new naverMaps.LatLng(
                    markerLatitude || latitude,
                    markerLongitude || longitude,
                  )}
                />
              )}
            </NaverMap>
          </MapDiv>
        ) : (
          <Skeleton className="h-[125px] w-[250px] rounded-xl" />
        )}
      </div>
    </>
  );
}

NaverMaps.defaultProps = {
  mapWidth: '600px',
  mapHeight: '100%',
  //   latitude: 37.3595704, // 위도
  //   longitude: 127.105399, // 경도
  isMarker: true, // 마커 사용 유무
  markerLatitude: 37.3595704, // 마커 위도
  markerLongitude: 127.105399, // 마커 경도
  defaultZoom: 15, // zoom 비율
};

export default NaverMaps;
