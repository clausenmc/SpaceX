import React, { useState, useEffect } from 'react';
import SpaceXService from '../hooks/SpaceXService';
import LaunchesComponent from './LaunchesComponent/LaunchesComponent';

const API = 'http://localhost:3000/data';

const Paginator = () => {
  const [launches, setLaunches] = useState([]);
  /*useEffect(() => {
    SpaceXService.getLaunchList(API)
      .then((launchesPast) => {
        setLaunches(launchesPast);
      })
      .catch((error) => console.error(error));
  }, []);
*/
  //const [itemPerPage, setItemPerPage] = useState(12);

  //const [itemTotal, setItemTotal] = useState(0);
  /*useEffect(() => {
    setItemTotal(launches.length);
  }, [launches]);
*/
  //const [totalPages, setTotalPages] = useState(0);
  /*useEffect(() => {
      console.log(itemTotal);
      setTotalPages(Math.floor(itemTotal / itemPerPage));
    }, [itemTotal]);
*/
 // const [currentPage, setCurrentPage] = useState(1);

  //const [arrayEnd, setArrayEnd] = useState(0);
  /*useEffect(() => {
    console.log(totalPages);
    setArrayEnd(currentPage * itemPerPage);
  }, [totalPages]);
*/
 // const [arrayInit, setArrayInit] = useState(0);
  /*useEffect(() => {
    console.log('arrayEnd'+ arrayEnd);
    setArrayInit(arrayEnd - itemPerPage);
   }, [arrayEnd]);
*/
 // const [subArray, setSubArray] = useState([]);
  /*useEffect(() => {
    console.log(`arrayinit ${arrayInit}`);
    setSubArray(launches.slice(arrayInit, arrayEnd));
    console.log(subArray);
  }, [arrayInit]);
*/
//  const [loading, setLoading] = useState(true);
  /*useEffect(() => {
    console.log(subArray);

    setLoading(false);
  }, [subArray]);
*/
  useEffect(() => {
    SpaceXService.getLaunchList(API)
      .then((launchesPast) => {
        //launches = launchesPast;
        setLaunches(launchesPast);
       /* setItemTotal(launches.length);
        //itemTotal = launches.length;
        console.log(`launches${JSON.stringify(launches)}`);
        //console.log( "setItemTotal" + itemTotal);

        setTotalPages(Math.floor(itemTotal / itemPerPage));
        setArrayEnd(currentPage * itemPerPage);
        setArrayInit(arrayEnd - itemPerPage);
        setSubArray(launches.slice(arrayInit, arrayEnd));
        console.log('subArray '+ JSON.stringify(subArray));*/
       // setLoading(false);
      })
      .catch((error) => console.error(error));

  },[]);

  return (
    <div>
       <LaunchesComponent {...launches} />
    </div>
  );

};

export default Paginator;
