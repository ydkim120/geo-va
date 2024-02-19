import React, { useState } from 'react';
import { Button } from '@/components/ui/Button.tsx';
import { Input } from "@/components/ui/input"
import { Locate } from 'lucide-react';
import useGeolocation from '../hooks/useGeolocation.ts';
const naverLocation = useGeolocation()


function FindLocationForm({
  userName, // 이름
}) {
  const onLocationButton

  return (
    <div className="flex items-center justify-between gap-[10px]">
      <Input type="text" placeholder="친구 이름을 입력하세요." />
      <Input type="text" placeholder="지번, 도로명, 건물명으로 검색" />
      <Button type="submit">
        <Locate className="h-4 w-4" />
        현재 위치로 설정
      </Button>
    </div>
  );
}

FindLocationForm.defaultProps = {
  userName: '아무개',
};

export default FindLocationForm;
