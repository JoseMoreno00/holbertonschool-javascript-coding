#!/usr/bin/node
// comment

const request = require('request');

request(process.argv[2], (error, response) => {
  if (error) {
    console.error(error);
  }
  console.log(`code: ${response.statusCode}`);
});
