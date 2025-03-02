const Services = require('./Services.js');
const db = require('../models/index.js'); // Preciso importar diretamente o models do index e não diretamente
// o model Categoria, pois o index é quem faz as configurações para que os models possam ter o extends do sequelize

class CategoriaService extends Services {
    constructor() {
        const model = db.Categoria;
        super(model.modelName);
    }
}

module.exports = CategoriaService;