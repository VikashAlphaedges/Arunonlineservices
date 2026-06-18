import fs from 'fs';

const html = fs.readFileSync('doc_content.html', 'utf8');

// Simple regex to extract text from <p>, <h1>, <h2>, <ul>, <li>, etc.
// But google docs html is messy. Let's just strip all tags and print lines with content.

let text = html.replace(/<[^>]+>/g, '\n');
text = text.replace(/&nbsp;/g, ' ');
let lines = text.split('\n').map(l => l.trim()).filter(l => l.length > 0);

fs.writeFileSync('doc_cleaned.txt', lines.join('\n'));
console.log('Saved to doc_cleaned.txt');
