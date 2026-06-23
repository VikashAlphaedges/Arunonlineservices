import fs from 'fs';

const html = fs.readFileSync('index.html', 'utf8');
const tagOpen = '<!-- JSON-LD Schema Markup composite -->';
const tagClose = '</script>';

const startIndex = html.indexOf(tagOpen);
const endIndex = html.indexOf(tagClose, startIndex) + tagClose.length;

if (startIndex !== -1 && endIndex !== -1) {
  const newHtml = html.substring(0, Math.max(0, startIndex)) + html.substring(endIndex);
  fs.writeFileSync('index.html', newHtml);
  console.log('Removed old JSON-LD script');
} else {
  console.log('Could not find old JSON-LD script block.');
}
