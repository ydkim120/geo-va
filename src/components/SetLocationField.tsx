import React, { useState } from 'react';
import SearchAddressForm from '@/components/SearchAddressForm.tsx';
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input"
import { Locate } from 'lucide-react';
import useGeolocation from '../hooks/useGeolocation.ts';


function SetLocationField() {
  const getCurrentLocation = () => {

  }

  return (
    <div>
      <div className="form__wrap flex items-center justify-between gap-[10px] p-[20px]">

        <Input type="text" placeholder="친구 이름을 입력하세요." className='w-[200px]'/>
        <Input type="text" placeholder="지번, 도로명, 건물명으로 검색" />
        <Button type="submit">
          <Locate className="h-4 w-4" />
          &nbsp;현재 위치로 설정
        </Button>
      </div>
      <SearchAddressForm />

    </div>
  );
}

SetLocationField.defaultProps = {

};

export default SetLocationField;
