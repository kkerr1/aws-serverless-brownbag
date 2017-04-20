const dynamoAdapter = require('../util/dynamo');

module.exports = (location) => {
  const docClient = dynamoAdapter();
  const params = {
    TableName: 'KevinTracker',
    Item: Object.assign({}, {trackid: '1'}, JSON.parse(location))
  };
  return docClient.put(params).promise();
}