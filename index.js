const request = require('request-promise-native');

const fetchMyIP = function () {
  console.log('hello')
  return request('https://api.ipify.org?format=json');
};

module.exports = fetchMyIP;