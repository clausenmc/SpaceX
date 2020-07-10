import React, { useState, useEffect } from 'react';
import '../assets/styles/components/Item.scss';

const Item = ({ launch_date_unix, links, mission_name, launch_success, id }) => {
  const [wikipedia, setWikipedia] = useState(links.wikipedia);
  const [image, setImage] = useState('');
  const [localTime, setLocalTime] = useState(new Date(launch_date_unix * 1000));
  const launchStatus = (launch_success) ? 'success' : 'fail';

  useEffect(() => {
    const max = links.flickr_images.length;
    const index = Math.floor(Math.random() * (max - 0) + 0);
    console.log(launchStatus);
    console.log(launch_date_unix);
    console.log(launch_success);
    console.log(id);
    setImage(links.flickr_images[index]);
  }, []);

  return (
    <div className='carousel-item'>
      <img className='carousel-item__img' src={image} alt='' />
      <div className='carousel-item__details'>
        <p className={`carousel-item__details--title ${launchStatus}`}> {mission_name}</p>
        <p className='carousel-item__details--subtitle'>{localTime.toLocaleString()}</p>
        {wikipedia != null &&
          <a href={wikipedia} target='_blank' className='carousel-item__details--btn'>Wikipedia</a>
        }
      </div>
    </div>
  );
};

export default Item;
