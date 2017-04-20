const dynamoAdapter = require('../util/dynamo');

module.exports = () => {
  const docClient = dynamoAdapter();
  const params = {
    TableName: 'KevinTracker',
  };
  return docClient.scan(params).promise();
}