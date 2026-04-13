const fs = require('fs');
const lines = fs.readFileSync('.next/static/chunks/app/layout.js', 'utf8').split('\n');
console.log(lines.slice(1885, 1905).map((l, i) => `${i + 1886}: ${l}`).join('\n'));
