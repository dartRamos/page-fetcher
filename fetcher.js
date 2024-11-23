const fs = require('fs'); // For file system operations
const needle = require('needle'); // For HTTP requests


const args = process.argv.slice(2); // takes away first 2 arguments in node
const URL = args[0]; // The URL to fetch
const path = args[1]; // The local file path to save to

// Make an HTTP GET request to the specified URL using needle
needle.get(URL, (error, response) => {
  if (error) {
    console.log(`Error:`, error);
    process.exit(1); // Exit if there's an error
  }

  // Write the response body to the specified file path
  fs.writeFile(path, response.body, (error) => {
    if (error) {
      console.log(`Error:`, error);
    } else {
      console.log(`Downloaded and saved ${response.headers['content-length']} bytes to ${path}`)
    }
  })
});


