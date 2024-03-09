const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
document.documentElement.innerHTML = html.toString();


const flashColor = require('./index.js');

test('flashes color', () => {
  flashColor();
  const bottomRight = document.querySelector('#bottomright');
  const result = bottomRight.style.backgroundColor == 'lightskyblue';
  expect(result).toBe(true);
});
