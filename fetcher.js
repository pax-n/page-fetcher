const args = process.argv.slice(2);
const request = require('request');
const fs = require('fs');

let website = args[0];
let filePath = args[1];

request(website, (error, response, body) => {
  if(error) {
    throw error;
  }
  fs.writeFile(filePath, body, (error) => {
    if (error) {
      throw error;
    }
    console.log(`\nDownloaded and saved ${body.length} bytes to ${filePath}\n`);
  });
});
