const fs = require('fs');
const path = require('path');

const files = ['index.html', 'about.html', 'services.html', 'contact.html', 'policy.html'];

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // The previous text
    const oldText = 'Copyright &copy; <span style="color: #9b59b6; font-weight: 600;">thewebbranding.com</span>';
    const newText = 'Site created by <a href="https://thewebbranding.com" target="_blank" style="color: #9b59b6; font-weight: 600; text-decoration: none;">Web Branding</a>';
    
    content = content.replace(oldText, newText);
    
    fs.writeFileSync(filePath, content);
    console.log(`Updated content in ${file}`);
  }
});
