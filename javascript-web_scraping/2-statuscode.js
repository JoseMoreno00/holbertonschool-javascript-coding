#!/usr/bin/node
// comment.

const req = require('request');

const url = process.argv[2];

req(url, function (err, response) {
  if (err != null) {
    console.err('err:', err);
    return;
  }
  console.log('code:', response && response.statusCode);
});
