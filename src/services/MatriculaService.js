const Services = require('./Services.js');
const db = require('../models/index.js'); // Preciso importar diretamente o models do index e não diretamente
// o model Matricula, pois o index é quem faz as configurações para que os models possam ter o extends do sequelize

class MatriculaService extends Services {
    constructor() {
        const model = db.Matricula;
        super(model.modelName);
    }
}

module.exports = MatriculaService;