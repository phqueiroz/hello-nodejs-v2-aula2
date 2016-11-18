'use strict';

const readline = require("readline");
const wf = require("./writeFile.js");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let arr = [];

function writeName(count) {
  if (count--) {
    rl.question("Write a name: ", function(name) {
      arr.push(name);
      writeName(count);
    });
  } else control();
}

function control() {
  wf.writeFile(arr);
  rl.close();
}

writeName(3);
