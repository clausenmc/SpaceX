import React, { useState, useEffect } from 'react';
import '../assets/styles/components/Company.scss';
import SpaceXService from '../hooks/SpaceXService';

const Company = () => {
  const [name, setName] = useState('');
  const [summary, setSummary] = useState('');
  const [founder, setFounder] = useState('');
  const [elonTwitter, setElonTwitter] = useState('');
  const [website, setWebsite] = useState('');
  const [twitter, setTwitter] = useState('');
  const [flickr, setFlickr] = useState('');

  useEffect(() => {
    SpaceXService.getCompanyInfo()
      .then((company) => {
        setName(company.name);
        setSummary(company.summary);
        setFounder(company.founder);
        setElonTwitter(company.links.elon_twitter);
        setWebsite(company.links.website);
        setTwitter(company.links.twitter);
        setFlickr(company.links.flickr);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className='company'>
      <h3 className='title'>About us</h3>
      <h1 className='company__name'>{name}</h1>
      <div className='company__details slide-top'>
        <div className='company__details--left'>
          <p className='company__details--left--summary'>{summary}</p>
          <div className='company__details--left--founder'>
            <span>{`Founder ${founder}`}</span>
            <a href={elonTwitter} target='_blank'>@elonmusk</a>
          </div>
        </div>

        <div className='company__details--right'>
          <div className='company__details--links slide-top'>
            <a href={website} target='_blank'>www.spacex.com</a>
            <a href={twitter} target='_blank'>twitter</a>
            <a href={flickr} target='_blank'>flickr</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
