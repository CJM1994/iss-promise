const request = require('request-promise-native');

const fetchMyIP = function () {
  return request('https://api.ipify.org?format=json');
};

const fetchCoordsByIP = function (body) {
  const IP = JSON.parse(body).ip;
  return request(`https://api.freegeoip.app/json/${IP}?apikey=a74512d0-906b-11ec-9ae3-8368081b37ef`);
};

const fetchISSFlyOverTimes = function (body) {
  const { latitude, longitude } = JSON.parse(body);
  return request(`https://iss-pass.herokuapp.com/json/?lat=${latitude}&lon=${longitude}`)
};

const nextISSTimesForMyLocation = function () {
  return fetchMyIP()
    .then(fetchCoordsByIP)
    .then(fetchISSFlyOverTimes)
    .then((data) => {
      const { response } = JSON.parse(data);
      return response;
    });
};

const printISSTimes = function (data) {

  for (ISSpass of data) {
    const dateTime = new Date(0);
    dateTime.setUTCSeconds(ISSpass.risetime);
    const duration = ISSpass.duration;
    console.log(`The ISS will pass next on ${dateTime} for a duration of ${duration} seconds`);
  };

}

module.exports = { nextISSTimesForMyLocation, printISSTimes };