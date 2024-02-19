import * as React from 'react';

import NaverMaps from '@/components/NaverMaps.tsx';
import FindLocationForm from '@/components/FindLocationForm.tsx';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '../components/ui/drawer.tsx';
import { Button } from '../components/ui/button.tsx';

function MapMain() {
  return (
    <>
      <NaverMaps
        latitude={37.3595704}
        longitude={127.105399}
        mapWidth="200px"
        mapHeight="200px"
      />

      <Drawer>
        <div className="added-users__wrap">
          <h3 className="added-users__title">친구들 위치🎈</h3>
          <ul className="added-users__list">
            <li className="added-users__item">
              test
            </li>
          </ul>
          <DrawerTrigger asChild>
            <Button variant="outline" className="added-users__trigger">친구 추가하기</Button>
          </DrawerTrigger>

        </div>

        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>친구 위치 추가</DrawerTitle>
            <DrawerDescription>만날 친구를 추가하세요.</DrawerDescription>
          </DrawerHeader>

          <ul className="positions__list">
            <li className="positions__item">
              <FindLocationForm />
            </li>
          </ul>

          <DrawerFooter className="flex flex-row items-center">
            <DrawerClose>
              Cancel
            </DrawerClose>
            <Button>완료</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
      // <div>
      //   <h2 className="text-blue-500 text-xl font-bold">Hello, React!</h2>
      //   <p className="text-lg font-medium">Hello, Typescript!</p>
      // </div>
}

export default MapMain;
