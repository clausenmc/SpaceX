const SpaceXService = {
  getLaunchList,
};

function getLaunchList(API) {
  return fetch(API)
    .then((response) => response.json())
    .then((data) => {
      return data.launchesPast;
    });
};

export default SpaceXService;
