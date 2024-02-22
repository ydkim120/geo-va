import { useEffect } from 'react'
import { useNavermaps } from 'react-naver-maps';

function useMapsListenerEvent(
  target: any,
  eventType: string,
  listener: void,
) {
  const naverMaps = useNavermaps();

  useEffect(() => {
    const event = target && naverMaps.Event.addListener(target, eventType, listener);

    return () => {
      naverMaps.Event.removeListener(event);
    }
  }, [target, listener])
}

export default useMapsListenerEvent