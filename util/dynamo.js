const AWS = require('aws-sdk');

AWS.config.setPromisesDependency(require('bluebird'));

const dynamo = new AWS.DynamoDB({ region: 'us-west-2', apiVersion: '2012-08-10' });

module.exports = () => new AWS.DynamoDB.DocumentClient({service: dynamo});

