const fs = require('fs');
const files = ['index.html', 'about.html', 'services.html', 'policy.html', 'contact.html'];
files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Add to nav-links
    if (!content.includes('href="./projects.html"')) {
        content = content.replace(
            /<a href="\.\/services\.html"(.*?)>Services<\/a>/,
            '<a href="./services.html"$1>Services</a>\n          <a href="./projects.html">Projects</a>'
        );
        
        // Add to footer Quick Links
        content = content.replace(
            /<li><a href="\.\/services\.html">Services<\/a><\/li>/,
            '<li><a href="./services.html">Services</a></li>\n              <li><a href="./projects.html">Projects</a></li>'
        );
        
        fs.writeFileSync(file, content);
        console.log('Updated ' + file);
    }
});
