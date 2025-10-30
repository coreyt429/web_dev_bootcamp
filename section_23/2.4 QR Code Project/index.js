/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import { input } from '@inquirer/prompts';
import {appendFile, createWriteStream} from 'fs';
import {image} from 'qr-image';

const answer = await input({ message: 'Enter a URL' });

console.log('Answer:', answer);

appendFile("URL.txt", answer + "\n", (err) => {
  if (err) throw err;
});

const qr_svg = image(answer);
qr_svg.pipe(createWriteStream('qrcode.png'));