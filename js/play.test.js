// load index.html into testfile
const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
document.documentElement.innerHTML = html.toString();

// load functions to test from index.js
const index = require('./index.js');
const clearColor = index.clearColor;
const flashColor = index.flashColor;

// tests if clearColor() changes color for 'bottom right' expected
test('clears color', () => {
  clearColor();
  const bottomRight = document.querySelector('#bottomright');
  const result = bottomRight.style.backgroundColor == 'darkblue';
  expect(result).toBe(true);
});

// tests if flashColor() changes color for 'bottom right' expected
test('flashes color', () => {
  flashColor();
  const bottomRight = document.querySelector('#bottomright');
  const result = bottomRight.style.backgroundColor == 'lightskyblue';
  expect(result).toBe(true);
});
