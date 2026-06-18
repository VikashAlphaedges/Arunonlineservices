import fs from 'fs';
import { convert } from 'html-to-text';

const html = fs.readFileSync('doc_content.html', 'utf8');

const text = convert(html, {
  wordwrap: 130
});

fs.writeFileSync('doc_converted.txt', text);
console.log('Done');
