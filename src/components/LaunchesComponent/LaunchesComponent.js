import React, { useState } from 'react';
import SpaceXService from '../../hooks/SpaceXService';
import Item from '../Item';

const API = 'http://localhost:3000/data';

const LaunchesComponent = () => {

  const [launches, setLaunches] = useState([]);
  const [loading, setLoading] = useState(true);

  SpaceXService.getLaunchList(API)
    .then((launchesPast) => {
      setLaunches(launchesPast);
      setLoading(false);
    })
    .catch((error) => console.error(error));

  return (

    <div>
      {loading ? <p> is loading </p> : launches.map((item) => <Item key={item.id} {...item} />) }
    </div>
  );

};

export default LaunchesComponent;
