const fs = require('fs');
const path = require('path');

const dir = 'C:\\Users\\favaz\\Bandhan';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Revert to 48px in HTML
    content = content.replace(/width="80" height="80" style="height: 80px;/g, 'width="48" height="48" style="height: 48px;');
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file}`);
});

const cssPath = path.join(dir, 'style.css');
let cssContent = fs.readFileSync(cssPath, 'utf8');

cssContent = cssContent.replace(/\.logo-img \{\s*height: 80px;/g, '.logo-img {\n  height: 48px;\n  transform: scale(2.5);\n  transform-origin: left center;');

cssContent = cssContent.replace(/\.logo-link:hover \.logo-img \{\s*transform: scale\(1\.05\);/g, '.logo-link:hover .logo-img {\n  transform: scale(2.6);');

fs.writeFileSync(cssPath, cssContent, 'utf8');
console.log('Updated style.css');
