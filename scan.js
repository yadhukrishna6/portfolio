const fs = require('fs');
const path = require('path');
function walk(dir) {
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const fullPath = path.resolve(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            walk(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.js')) {
            const content = fs.readFileSync(fullPath, 'utf8');
            const match = content.match(/[^\x00-\x7F]/g);
            if (match) {
                console.log(fullPath, Array.from(new Set(match)));
            }
        }
    });
}
walk('./app');
walk('./components');
walk('./lib');
