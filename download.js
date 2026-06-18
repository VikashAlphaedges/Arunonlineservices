import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fileId = '1IOjlOutgfWyABR8om5LJjbqLeOfv9yKH';
const url = `https://drive.google.com/uc?export=download&id=${fileId}`;
const destDir = path.join(__dirname, 'public');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir);
}

const destFile = path.join(destDir, 'bg-video.mp4');

function downloadFile(url, dest) {
  https.get(url, (res) => {
    if (res.statusCode === 302 || res.statusCode === 301 || res.statusCode === 303) {
      console.log('Redirecting to:', res.headers.location);
      downloadFile(res.headers.location, dest);
    } else {
      const fileStream = fs.createWriteStream(dest);
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        console.log('Download complete.');
      });
    }
  }).on('error', (err) => {
    console.error('Error downloading file:', err.message);
  });
}

downloadFile(url, destFile);
