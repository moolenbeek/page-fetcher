const fs = require('fs')

var args = process.argv.slice(2);


const request = require('request');
request(args[0], function (error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML
  const content = body

  fs.writeFile(args[1], content, err => {
    if (err) {
      console.error(err)
      return
    }
    console.log(`${args[1]} has successfully been created`)
  })
});

