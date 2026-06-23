import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fileId = '1y5PpuSSBumkxKcSK0tIiCrxFJCR4jPIl';
const url = `https://drive.google.com/uc?export=download&id=${fileId}`;
const publicDir = path.join(__dirname, 'public');
const destPath = path.join(publicDir, 'bg-video.mp4');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

function download(url, dest) {
  if (fs.existsSync(dest)) {
    console.log('Video already downloaded.');
    return;
  }
  
  https.get(url, (res) => {
    if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
      download(res.headers.location, dest);
      return;
    }
    const file = fs.createWriteStream(dest);
    res.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log('Video download completed');
    });
  }).on('error', (err) => {
    console.error('Error downloading video:', err.message);
  });
}

download(url, destPath);
