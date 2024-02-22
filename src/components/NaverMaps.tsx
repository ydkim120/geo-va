import { Suspense, useState, useEffect } from 'react'
import { Container as MapDiv, NaverMap, useNavermaps, NavermapsProvider, Marker } from 'react-naver-maps'
import { Skeleton } from '@/components/ui/skeleton.tsx';
import useMapsListenerEvent from '@/hooks/useMapsListenerEvent';

interface propTypes {
  mapWidth?: string;
  mapHeight?: string;
  latitude: number;
  longitude: number;
  isMarker?: boolean;
  markerLatitude?: number;
  markerLongitude?: number;
  defaultZoom?: number;
}

function Call() {
  const navermaps = useNavermaps()
  console.log(navermaps)
  return null;
}

function NaverMaps({
  mapWidth, // 맵 너비
  mapHeight, // 맵 높이
  latitude, // 위도 *
  longitude, // 경도 *
  isMarker, // 마커 사용 유무
  markerLatitude, // 마커 위도
  markerLongitude, // 마커 경도
  defaultZoom, // zoom 배율
}: propTypes) {
  const naverMaps = useNavermaps();
  const [nMap, setNMap] = useState(null)

  /**
   * 지도 클릭 시 > 클릭한 곳의 위치 정보를 가져옵니다.
   * 
   */
  const onClickGetPosition = (latlng: naverMaps.LatLng, nmap: naverMaps.Map) => {
    const { naver } = window;
    // infoWindow 생성
    naver.maps.Service.reverseGeocode(
      {
        coords: latlng,
        orders: [naver.maps.Service.OrderType.ADDR, naver.maps.Service.OrderType.ROAD_ADDR].join(','),
      },
      (
        status: naver.maps.Service.Status,
        response: naver.maps.Service.ReverseGeocodeResponse,
      ) => {
        if (status !== naver.maps.Service.Status.OK) {
          return alert('Something went wrong!');
        }

        const address = response.v2.address.roadAddress
          ? response.v2.address.roadAddress
          : response.v2.address.jibunAddress;

        return {coords: latlng, maps: nmap}
      }
    );
  }

  useMapsListenerEvent(nMap, 'click', (e) => {
    alert(e.coord); // 클릭한 지점 좌표
    onClickGetPosition()
  })

  useEffect(() => {
    // if (naverMaps) 
    const { naver } = window;
    if (naver) {
      const nmap = naver.maps.Map;
      setNMap(nmap)
    }
  }, [naverMaps]);

  return (
    <>
      {/* 위치 정보(지도) */}
      <div className="mb-8 mt-40 flex w-screen flex-col items-center">
        <Suspense fallback={<Skeleton className="h-[125px] w-[250px] rounded-xl" />}>
          <Call />
        </Suspense>
        <NavermapsProvider ncpClientId='wxm74y5h9u'>
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
        </NavermapsProvider>
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
