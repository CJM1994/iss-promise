const fetchMyIP = require('./iss');

fetchMyIP()
  .then(body => console.log(body));