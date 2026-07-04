const fs = require('fs');
const path = require('path');

const dir = 'C:\\Users\\favaz\\Bandhan';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Update favicon casing
    content = content.replace(/href="\.\/Fav icon\.PNG"/gi, 'href="./Fav Icon.PNG"');
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated HTML: ${file}`);
});

const cssPath = path.join(dir, 'style.css');
let cssContent = fs.readFileSync(cssPath, 'utf8');

// Remove the pop up hover effect completely
cssContent = cssContent.replace(/\.logo-link:hover \.logo-img\s*\{\s*transform: scale\(1\.05\);\s*\}/g, '');

// Decrease desktop size
cssContent = cssContent.replace(/height: 150px;\s*margin: -51px 0;/g, 'height: 120px;\n  margin: -36px 0;');

// Decrease mobile size
cssContent = cssContent.replace(/height: 110px;\s*margin: -31px 0;/g, 'height: 80px;\n    margin: -16px 0;');

fs.writeFileSync(cssPath, cssContent, 'utf8');
console.log('Updated style.css');
