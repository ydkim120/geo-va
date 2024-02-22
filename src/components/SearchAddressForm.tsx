// 주소로 검색 Form
import React, { useState } from 'react';
import { useNavermaps } from 'react-naver-maps';
import { Locate, Search } from 'lucide-react'
import { addressType, geocodeResponseType, geocodeResponseAddressType } from '@/@types'

import { Input } from "@/components/ui/input"
import { Button } from '../components/ui/button.tsx';

import AddressList from '@/components/AddressList'
import SearchOnMapForm from '@/components/SearchOnMapForm'
import useGeolocation from '@/hooks/useGeolocation.ts';

const naverMaps = useNavermaps();


function SearchAddressForm() {
  const [searchedAddressText, setSearchedAddressText] = useState('') // 검색 할 주소명
  const [isActiveMapPanel, setIsActiveMapPanel] = useState(false) // 맵 패널 활성화
  const [addressList, setAddressList] = useState<undefined | addressType>(undefined)

  const onChangeAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchedAddressText(e.target.value)

    onSearchAddress(searchedAddressText)
  }

  const onSearchAddress = (query: string) => {
    new naverMaps.Service.geocode({
      query
    }, (status: object, response: { v2: object }) => {
      if (status !== new naverMaps.Service.Status.OK) {
        return alert('Something wrong!');
      }

      if (response.v2) {
        debugger
        const addressList = response.v2?.addresses || [] // 검색 결과의 컨테이너
        const items = addressList.map((ad: geocodeResponseAddressType) => {
          return {
            roadAddress: ad.roadAddress,
            jibunAddress: ad.jibunAddress,
            englishAddress: ad.englishAddress,
            postalCode: '',
            position: {
              x: ad.x,
              y: ad.y
            }
          }
        })
        console.log('@@@', items)
        debugger

        setAddressList(items)
      }
    })
  }

  /**
   * 현재 위치로 설정 클릭
   */
  const onMoveToCurrentPosition = () => {
    const currentLocation = useGeolocation

    naver.maps.Service.reverseGeocode(
      {
        location: new naver.maps.LatLng(
          // lat === undefined ? 37.3849483 : lat2,
          // lng === undefined ? 127.1229117 : lng2
          naverLocation.coordinates.lat.toFixed(4),
          naverLocation.coordinates.lng.toFixed(4)
        ),
      },
      function (status, response) {
        if (status !== naver.maps.Service.Status.OK) {
          return alert('Something Wrong!');
        }

        const result = response.result;
        setLocation(result.items[0].address);
      }
    )
    setIsActiveMapPanel(true)
  }

  return (
    <section>
      <div className="form__wrap flex flex-col gap-[10px] p-[20px]">
        <div className="flex gap-[10px]">
          <Input type="text" placeholder="지번, 도로명, 건물명으로 검색" onChange={onChangeAddress} />
          <Button className="">
            <Search className="h-4 w-4" />
          </Button>
        </div>
        <a className="flex items-center w-[100%]" onClick={onMoveToCurrentPosition}>
          <Locate className="h-4 w-4" />
          &nbsp;현재 위치로 설정
        </a>

        {searchedAddressText?.trim() ? (
          <AddressList data={addressList} />
        ) : (
          <div className= "guide flex flex-col justify-center gap-[20px]">
            <b className='text-slate-600'>이렇게 검색해보세요.</b>
            <ol className="flex flex-col gap-[10px] text-slate-500">
              <li>
                * 도로명 + 건물번호
              </li>
              <li>
                * 지역명 + 번지
              </li>
              <li>
                * 건물명, 아파트명
              </li>
            </ol>
          </div>
        )}
      </div>

      {isActiveMapPanel && (
        <SearchOnMapForm longitude={0} latitude={0} />
      )}
    </section>
  );
}

export default SearchAddressForm;
