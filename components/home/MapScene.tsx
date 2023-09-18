import React from 'react';
import Map from './Map';

const MapScene = () => {
  const onLoad = () => {
    console.log('로드완료');
  };
  return <Map onLoad={onLoad} />;
};

export default MapScene;
