const fs = require('fs');
const csv = require('csv-parser');

const inputFilePath = './input_countries.csv'; // Ensure the CSV file is in the same directory
const canadaFilePath = 'canada.txt';
const usaFilePath = 'usa.txt';

// Delete existing files if they exist
if (fs.existsSync(canadaFilePath)) {
  fs.unlinkSync(canadaFilePath);
  console.log(`${canadaFilePath} deleted.`);
}
if (fs.existsSync(usaFilePath)) {
  fs.unlinkSync(usaFilePath);
  console.log(`${usaFilePath} deleted.`);
}

// Read the CSV file and filter data
fs.createReadStream(inputFilePath)
  .pipe(csv())
  .on('data', (row) => {
    if (row.country.toLowerCase() === 'canada') {
      fs.appendFileSync(canadaFilePath, `${row.country},${row.year},${row.population}\n`);
    } else if (row.country.toLowerCase() === 'united states') {
      fs.appendFileSync(usaFilePath, `${row.country},${row.year},${row.population}\n`);
    }
  })
  .on('end', () => {
    console.log('CSV file successfully processed and filtered data written to respective files.');
  });
