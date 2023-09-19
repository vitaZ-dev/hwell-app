import { Marker } from '@/types/map';
import React, { useEffect } from 'react';

// 필요 props 가 naver 객체, 위도경도 좌표
const Marker = ({ map, cordinates }: Marker) => {
  // mount 가 되면
  useEffect(() => {
    // naver map 이 있다면
    let marker: naver.maps.Marker | null = null;
    if (map) {
      marker = new naver.maps.Marker({
        map: map,
        position: new naver.maps.LatLng(...cordinates),
      });
      // 필수는 아님
      // cleanup 함수는 필요할 때 사용
      // TODO unmount 역할=컴포넌트가 화면에서 제거될 때
      return () => {
        // 지도 지우기
        marker?.setMap(null);
      };
    }
  }, [map]);

  return null;
};

export default Marker;
