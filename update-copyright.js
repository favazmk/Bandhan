const fs = require('fs');
const path = require('path');

const files = ['index.html', 'about.html', 'services.html', 'contact.html', 'policy.html'];

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Update footer copyright correctly
    content = content.replace(
      /<p>&copy; 2026 Bandhan Contracting & General Maintenance LLC\. All rights reserved\.<\/p>/g,
      '<p>&copy; 2026 Bandhan Contracting & General Maintenance LLC. All rights reserved. <br> Copyright &copy; Web Branding</p>'
    );
    
    fs.writeFileSync(filePath, content);
    console.log(`Updated content in ${file}`);
  }
});
