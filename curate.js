const fs = require('fs');
const path = require('path');
const worksDir = 'c:/Users/favaz/Bandhan/public/works';
const portfolioDir = 'c:/Users/favaz/Bandhan/public/portfolio';

if (!fs.existsSync(portfolioDir)){
    fs.mkdirSync(portfolioDir);
}

const files = fs.readdirSync(worksDir).filter(f => f.endsWith('.jpeg') || f.endsWith('.jpg') || f.endsWith('.png')).sort();

// Select every 5th image to avoid bursts
const selected = [];
for (let i = 0; i < files.length; i += 5) {
    if (selected.length < 16) {
        selected.push(files[i]);
    }
}

// Copy and rename selected
selected.forEach((file, index) => {
    const src = path.join(worksDir, file);
    const dest = path.join(portfolioDir, `project-${index + 1}.jpeg`);
    fs.copyFileSync(src, dest);
    console.log(`Copied ${file} to project-${index + 1}.jpeg`);
});

// Delete original works dir
fs.rmSync(worksDir, { recursive: true, force: true });
console.log('Deleted original works directory.');
