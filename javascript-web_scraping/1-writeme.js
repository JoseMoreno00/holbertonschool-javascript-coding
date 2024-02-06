#!/usr/bin/node
// comment

const argvs = process.argv.slice(2);
const filename = argvs[0];
const text = argvs[1];

const fs = require('fs');
fs.writeFile(filename, text, (err) => {
  if (err) {
    throw Error(`${err}`);
  }
});
