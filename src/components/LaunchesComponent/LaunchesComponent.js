import React, { useState, useEffect } from 'react';
import Item from '../Item';
import SpaceXService from '../../hooks/SpaceXService';

const LaunchesComponent = (props) => {

  const [launches, setLaunches] = useState(props.launches);
  const [isLoading, setIsLoading] = useState(props.isLoading);

  return (
    <div className='component'>
      {isLoading ?
        <p className='loading'>Loading...</p> :
        launches.map((item) => <Item key={item.id} {...item} />) }
    </div>
  );

};

export default LaunchesComponent;
