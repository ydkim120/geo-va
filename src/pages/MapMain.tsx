import * as React from 'react';

import NaverMaps from '../components/NaverMaps.tsx';
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
            <DrawerTitle>Are you absolutely sure?</DrawerTitle>
            <DrawerDescription>This action cannot be undone.</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose>
              Cancel
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      <div>
        <h2 className="text-blue-500 text-xl font-bold">Hello, React!</h2>
        <p className="text-lg font-medium">Hello, Typescript!</p>
      </div>
    </>
  );
}

export default MapMain;
