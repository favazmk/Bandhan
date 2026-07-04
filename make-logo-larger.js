const fs = require('fs');
const path = require('path');

const dir = 'C:\\Users\\favaz\\Bandhan';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove the hardcoded width and height and inline styles
    content = content.replace(/width="48" height="48" style="height: 48px; width: auto;"/g, '');
    content = content.replace(/width="80" height="80" style="height: 80px;"/g, '');
    content = content.replace(/width="48" height="48" style="height: 48px;"/g, '');
    
    // Just to be thorough, if there's any remaining width="48" or height="48"
    content = content.replace(/width="48"/g, '');
    content = content.replace(/height="48"/g, '');
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file}`);
});

const cssPath = path.join(dir, 'style.css');
let cssContent = fs.readFileSync(cssPath, 'utf8');

// Update desktop size from 100px to 160px
cssContent = cssContent.replace(/\.logo-img \{\s*height: 100px;\s*margin: -26px 0;/g, '.logo-img {\n  height: 150px;\n  margin: -51px 0;');

// Update mobile size from 72px to 120px
cssContent = cssContent.replace(/\.logo-img \{\s*height: 72px;\s*margin: -12px 0;/g, '.logo-img {\n    height: 110px;\n    margin: -31px 0;');

fs.writeFileSync(cssPath, cssContent, 'utf8');
console.log('Updated style.css');
