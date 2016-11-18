const readline = require("readline");
const fs = require("fs");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let arr = []
let file;

function readName(count) {

  if (count--) {
    rl.question("write a country name: ", function(name) {
        arr.push(name);
        readName(count);
    });
  } else {
    recordFile();
  }
}

function getFileName() {
  rl.question("write a file name: \n", function(filename) {
    console.log(`file name --> ${filename}`);
    file = filename;
    readName(5);
  });

}

function recordFile() {
  for (let i in arr) {
    fs.appendFile(`${file}.txt`, `${arr[i]} \n`);
  }

  rl.close();
}
getFileName();
