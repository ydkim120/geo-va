// 지도에서 검색 Form
import React, { useState } from 'react';
import NaverMaps from '@/components/NaverMaps.tsx';

import { Button } from '../components/ui/button.tsx';
import {  } from '@/@types'

function SearchOnMapForm({
  latitude, // 위도
  longitude // 경도
}: {
  latitude: number
  longitude: number
}) {

    return (
    <section>
      <div className="section__header">
        <h3 className="added-users__title">지도에서 위치 확인</h3>
      </div>

      <NaverMaps
        latitude={latitude}
        longitude={longitude}
        mapWidth="200px"
        mapHeight="200px"
        isMarker={true}
      />

      <div className="section__footer p-[20px]">

        <Button>이 위치로 주소 설정</Button>
      </div>

    </section>
  );
}

SearchOnMapForm.defaultProps = {
  // latitude: 37.3595704, // 위도
  // longitude: 127.105399, // 경도
};

export default SearchOnMapForm;
