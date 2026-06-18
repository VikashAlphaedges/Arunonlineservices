import https from 'https';
import fs from 'fs';

const url = 'https://docs.google.com/document/d/1v2-7bAPRlRemIUn0qPwjwe9sAERbIY0-q1nVnN_ztIE/export?format=html';

function downloadFile(url) {
  https.get(url, (res) => {
    if (res.statusCode === 302 || res.statusCode === 301 || res.statusCode === 303) {
      downloadFile(res.headers.location);
    } else {
      let data = '';
      res.on('data', chunk => { data += chunk; });
      res.on('end', () => { console.log(data); });
    }
  }).on('error', (err) => {
    console.error('Error downloading file:', err.message);
  });
}

downloadFile(url);
