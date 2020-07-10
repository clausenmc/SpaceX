const SpaceXService = {
  getLaunchList,
  getCompanyInfo,
};

function getLaunchList() {
  return fetch('https://api.spacex.land/graphql',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({ query: ' {\n  launchesPast(limit:50 )\n { \nid \n mission_name \n links {\n  article_link\n   flickr_images wikipedia \n  } \n  launch_date_unix \nlaunch_success   }\n  }' }),

    })
    .then((response) => response.json())
    .then((data) => {
      return data.data.launchesPast;
    });
};

function getCompanyInfo() {
  return fetch('https://api.spacex.land/graphql',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({ query: '{\n company { \n name \n summary \n links { \n elon_twitter \n flickr \n twitter \n website \n } \n founder \n } \n }' }),

    })
    .then((response) => response.json())
    .then((data) => {
      return data.data.company;
    });
};

export default SpaceXService;
