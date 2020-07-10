import React, { useState, useEffect } from 'react';
import Item from '../Item';

const LaunchesComponent = (launchList) => {

  const [launchesA, setLaunchesA] = useState([]);

  useEffect(() => {
    setLaunchesA(launchList);
  },[]);

  return (

    <div className='carousel__container'>
      {launchesA.map((item) => <Item key={item.id} {...item} />) }
    </div>
  );

};

export default LaunchesComponent;
