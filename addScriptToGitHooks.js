import { fs } from 'fs';

const args = process.argv.slice(2);

const fileToChange = args[0];
const scriptToChange = args[1];

const lineToAdd = `${scriptToChange}\n`;

fs.writeFile(fileToChange, '#!/usr/bin/env sh\n', (err) => {
  if (err) {
    console.error(`Error clearing file: `, err);
    return;
  }

  fs.appendFile(fileToChange, lineToAdd, (err) => {
    if (err) {
      console.error(`Error while changing a file (${fileToChange}):`, err);
    }
    // console.log(`Line to change: ${lineToAdd}`)
    console.log(`File has been changed !`);
  });
});
