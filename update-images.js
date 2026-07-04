const fs = require('fs');
const path = require('path');

const dir = 'C:\\Users\\favaz\\Bandhan';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace favicon
    content = content.replace(/<link rel="icon" type="image\/jpeg" href="\.\/logo\.jpg" \/>/g, '<link rel="icon" type="image/png" href="./Fav icon.PNG" />');
    
    // Replace logo images
    content = content.replace(/src="\.\/logo\.jpg"/g, 'src="./new logo.PNG"');
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file}`);
});
