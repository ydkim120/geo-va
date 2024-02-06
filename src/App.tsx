import React from 'react';
// import {
//   Container as MapDiv, NaverMap, Marker, useNavermaps,
// } from 'react-naver-maps';

// function NaverMapComponent() {
//   const naverMaps = useNavermaps();
//   return (
//     <NaverMap
//       defaultCenter={new naverMaps.LatLng(37.3595704, 127.105399)}
//       defaultZoom={15}
//     >
//       <Marker
//         defaultPosition={new naverMaps.LatLng(37.3595704, 127.105399)}
//       />
//     </NaverMap>
//   );
// }

function App() {
  return (
    // <MapDiv
    //   style={{
    //     width: '100%',
    //     height: '600px',
    //   }}
    // >
    //   <NaverMapComponent />
    // </MapDiv>
    <div>
      <h2 className="text-blue-500 text-xl font-bold">Hello, React!</h2>
      <p className="text-lg font-medium">Hello, Typescript!</p>
    </div>
  );
}

export default App;
