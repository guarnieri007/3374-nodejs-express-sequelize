const fs = require('fs');
const path = require('path');

module.exports = (app) => {
    const routesPath = path.join(__dirname); //caminho da pasta local
    // também poderia ser o código abaixo:
    // const routesPath = path.join(__dirname, '..', 'routes'); // Correct path is relative to index.js

    fs.readdirSync(routesPath).forEach(file => {
        if (file.endsWith('Route.js')) {
            // somente queremos os arquivos que terminam em Route.js
            // se não for um arquivo assim, ele será ignorado (como é o caso do index.js)
            const route = require(path.join(routesPath, file));
            app.use(route);
        }
    });
};
