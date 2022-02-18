const { nextISSTimesForMyLocation, printISSTimes } = require('./iss');

nextISSTimesForMyLocation()
  .then(passTimes => {
    printISSTimes(passTimes);
  });