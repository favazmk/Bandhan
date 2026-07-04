const fs = require('fs');
const path = require('path');

const dir = 'C:\\Users\\favaz\\Bandhan';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove the span containing Bandhan text
    content = content.replace(/<span class="logo-text"[^>]*>Bandhan<\/span>\s*/g, '');
    
    // Update inline styles to increase logo size from 48px to 80px
    content = content.replace(/width="48" height="48" style="height: 48px;/g, 'width="80" height="80" style="height: 80px;');
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file}`);
});

const cssPath = path.join(dir, 'style.css');
let cssContent = fs.readFileSync(cssPath, 'utf8');
cssContent = cssContent.replace(/\.logo-img \{\s*height: 48px;/g, '.logo-img {\n  height: 80px;');
fs.writeFileSync(cssPath, cssContent, 'utf8');
console.log('Updated style.css');
