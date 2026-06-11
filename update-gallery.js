const fs = require('fs');
const path = require('path');
const portfolioDir = 'c:/Users/favaz/Bandhan/public/portfolio';

const files = fs.readdirSync(portfolioDir).filter(f => f.endsWith('.jpeg') || f.endsWith('.jpg') || f.endsWith('.png'));

let nextIdx = 1;
// Find the max project index to know where to start
files.forEach(f => {
    if (f.startsWith('project-')) {
        const num = parseInt(f.replace('project-', '').split('.')[0]);
        if (num >= nextIdx) {
            nextIdx = num + 1;
        }
    }
});

files.forEach(f => {
    if (!f.startsWith('project-')) {
        const src = path.join(portfolioDir, f);
        const dest = path.join(portfolioDir, `project-${nextIdx}.jpeg`);
        fs.renameSync(src, dest);
        console.log(`Renamed "${f}" to project-${nextIdx}.jpeg`);
        nextIdx++;
    }
});

// Now update projects.html
const projectsHtmlPath = 'c:/Users/favaz/Bandhan/projects.html';
let html = fs.readFileSync(projectsHtmlPath, 'utf8');

const totalImages = nextIdx - 1;
html = html.replace(/Array\.from\(\{length: \d+\}/, `Array.from({length: ${totalImages}}`);

fs.writeFileSync(projectsHtmlPath, html);
console.log(`Updated projects.html to show ${totalImages} images.`);
