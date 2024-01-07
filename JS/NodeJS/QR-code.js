/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from 'inquirer';
import fs from 'fs';
import qr from 'qr-image';

inquirer
  .prompt([{
    "message": "Let's Insert a URL: ",
    "name": "URL"
  }
  ])
  .then((answers) => {
    const url = answers.URL;

    const qr_png = qr.image(url, { type: 'png' });
    qr_png.pipe(fs.createWriteStream('qr_code.png'));

    const content = url;
    fs.writeFile('URL.txt', content, err => {
      if (err) {
        console.error(err);
      }
      else {
        console.log('URL.txt file written successfully!');
      }
    // file written successfully
    
  });
  })

  .catch((error) => {
    if (error.isTtyError) {
      console.error("Prompt couldn't be rendered in the current environment. Try another terminal.");
    } else {
      console.error('Something else went wrong:', error.message);
    }
  });

        

  
