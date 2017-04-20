'use strict';
const updateLocation = require('./api/update-location');

module.exports.getLocation = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'location',
      input: event,
    }),
  };

  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};


module.exports.updateLocation = (event, context, callback) => {
  return updateLocation(event.body)
    .then(res => {
      const httpResp = {
        statusCode: 200,
        body: JSON.stringify(res),
      };
      callback(null, httpResp);
    });
};

