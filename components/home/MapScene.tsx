import React from 'react';
import Map from './Map';
import MarkerList from './MarkerList';
import useMap from '@/hooks/useMap';
import { NaverMap } from '@/types/map';

// Marker 를 그려야 한다
// Marker 는 naver.map 객체에 그려야함(전역참조 필요)

const MapScene = () => {
  const { initializeMap } = useMap();
  const onLoadMap = (map: NaverMap) => {
    console.log('로드완료');
    initializeMap(map);
  };
  return (
    <>
      <Map onLoad={onLoadMap} />
      <MarkerList />
    </>
  );
};

export default MapScene;
