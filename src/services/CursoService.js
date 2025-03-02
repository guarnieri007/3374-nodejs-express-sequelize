const Services = require('./Services.js');
const db = require('../models/index.js'); // Preciso importar diretamente o models do index e não diretamente
// o model Curso, pois o index é quem faz as configurações para que os models possam ter o extends do sequelize

class CursoService extends Services {
    constructor() {
        const model = db.Curso;
        super(model.modelName);
    }
}

module.exports = CursoService;