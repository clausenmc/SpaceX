import React from 'react';
import '../assets/styles/components/Item.scss';
import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';

const Item = ({ launch_date_local, links, mission_name, launch_success }) => (
  <div className='carousel-item'>
    <img className='carousel-item__img' src='https://live.staticflickr.com/65535/50065947228_804efe6117_o.jpg' alt='' />
    <div className='carousel-item__details'>
      <div>
        <img className='carousel-item__details--img' src={playIcon} alt='Play Icon' />
        <img className='carousel-item__details--img' src={plusIcon} alt='Plus Icon' />
      </div>
      <p className='carousel-item__details--title'>{mission_name}</p>
      <p className='carousel-item__details--subtitle'>{launch_date_local}</p>
    </div>
  </div>
);

export default Item;
