const Services = require('./Services.js');
const db = require('../models'); // Preciso importar diretamente o models do index e não diretamente
// o model Pessoa, pois o index é quem faz as configurações para que os models possam ter o extends do sequelize

class PessoaService extends Services {
    constructor() {
        const model = db.Pessoa;
        super(model.modelName);
    }
}

module.exports = PessoaService;