import React, { useState, useEffect } from 'react';
import SpaceXService from '../hooks/SpaceXService';
import LaunchesComponent from './LaunchesComponent/LaunchesComponent';

const Paginator = () => {
  const [launchList, setLaunchList] = useState([]);
  const [itemPerPage, setItemPerPage] = useState(12);
  const [itemTotal, setItemTotal] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  let [currentPage, setCurrentPage] = useState(1);
  const [arrayEnd, setArrayEnd] = useState(0);
  const [arrayInit, setArrayInit] = useState(0);
  const [subArray, setSubArray] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    SpaceXService.getLaunchList()
      .then((launchesPast) => {
        const cp = 1;
        setCurrentPage(1);
        setLaunchList(launchesPast);
        const total = launchesPast.length;
        setItemTotal(total);
        const piso = Math.ceil(launchesPast.length / itemPerPage);
        setTotalPages(piso);
        const fin = currentPage * itemPerPage;
        setArrayEnd(fin);
        const inicio = fin - itemPerPage;
        setArrayInit(inicio);
        setSubArray(launchesPast.slice(inicio, fin));
        setLoading(false);

      });

  }, []);

  const update = () => {
    console.log(currentPage);
    setLoading(true);
    sleep(100).then(() => {
      const fin = currentPage * itemPerPage;
      setArrayEnd(fin);
      const inicio = fin - itemPerPage;
      setArrayInit(inicio);
      setSubArray(launchList.slice(inicio, fin));
      setLoading(false);
    });

  } ;

  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  const getBTS = () => {
    const btns = [] ;
    for (let i = 0 ; i < totalPages; i++) {
      const index = i + 1;
    btns.push(<button className='btn-pages' key={index} onClick={() => { currentPage = index;update(); }}>{`Page ${index}`}</button>);
    }
    return <div className='btn-container'>{btns}</div>;

  };

  return (
    <div>
      {loading ? <p className='loading'>Loading...</p> : (
        <div className='paginator'>
          <h3 className='title'>Latest Launches</h3>
          {getBTS()}
          <LaunchesComponent launches={subArray} isLoading={loading} />
        </div>
      )}
    </div>
  );
};

export default Paginator;
