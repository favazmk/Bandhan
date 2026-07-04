const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'dist');
const destDir = __dirname;

function copyRecursiveSync(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();
  if (isDirectory) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest);
    }
    fs.readdirSync(src).forEach(function(childItemName) {
      copyRecursiveSync(path.join(src, childItemName), path.join(dest, childItemName));
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

if (fs.existsSync(srcDir)) {
  console.log('Copying built files from dist/ to the root directory for Hostinger...');
  copyRecursiveSync(srcDir, destDir);
  console.log('Removing dist/ directory...');
  fs.rmSync(srcDir, { recursive: true, force: true });
  console.log('Build output moved to root successfully!');
} else {
  console.log('dist directory not found. Make sure vite build ran successfully.');
}
