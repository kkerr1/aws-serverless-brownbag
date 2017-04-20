'use strict';
const updateLocation = require('./api/update-location');
const getLocations = require('./api/get-locations');

module.exports.getLocations = (event, context, callback) => {
 return getLocations()
    .then(locations => {
      const httpResp = {
        statusCode: 200,
        body: JSON.stringify(locations),
      };
      callback(null, httpResp);
    }).catch(callback);
};


module.exports.updateLocation = (event, context, callback) => {
  return updateLocation(event.body)
    .then(res => {
      const httpResp = {
        statusCode: 200
      };
      callback(null, res);
    }).catch(callback);
};
