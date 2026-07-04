const fs = require('fs');
const path = require('path');

const cssPath = path.join('C:\\Users\\favaz\\Bandhan', 'style.css');
let content = fs.readFileSync(cssPath, 'utf8');

content = content.replace(/\.logo-img\s*\{[\s\S]*?\}/, `.logo-img {
  height: 100px;
  margin: -26px 0;
  width: auto;
  border-radius: 4px;
  object-fit: contain;
  transition: transform 0.3s ease;
}`);

content = content.replace(/\.logo-link:hover \.logo-img\s*\{[\s\S]*?\}/, `.logo-link:hover .logo-img {
  transform: scale(1.05);
}`);

const mediaQuery = `
@media (max-width: 768px) {
  .logo-img {
    height: 72px;
    margin: -12px 0;
  }
}
`;

content += mediaQuery;

fs.writeFileSync(cssPath, content, 'utf8');
console.log('Fixed style.css');
