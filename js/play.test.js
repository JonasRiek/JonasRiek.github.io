const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
document.documentElement.innerHTML = html.toString();

// Import your function (replace 'path/to/your/function' with the actual path)
const sum = require('./index.js');


test('properly adds two numbers', () => {
  expect(sum(1, 2)).toBe(3);
});
