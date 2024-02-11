#!/usr/bin/node
// comment

const req = require('request');

req(process.argv[2], (error, content) => {
  if (error) {
    console.error(error);
  }
  console.log(`code: ${content.statusCode}`);
});
