#!/usr/bin/node
// comment

const res = require('request');

const api = process.argv[2];
const id = '18';

res(api, function (error, response, body) {
  if (error != null) {
    console.error('error:', error);
  }
  const objMovie = JSON.parse(body);
  let count = 0;
  objMovie.results.forEach(element => {
    element.characters.forEach(item => {
      if (item.includes(id)) {
        count += 1;
      }
    });
  });
  console.log(count);
});
