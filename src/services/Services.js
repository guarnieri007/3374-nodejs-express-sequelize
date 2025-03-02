const db = require('../models');

class Services {
    constructor(nomeModel) {
        this.model = nomeModel;
    }
    async getAll() {
        return db[this.model].findAll();
    }

    async atualizaRegistro(dadosAtualizados, id) {
        const registroAtualizado = db[this.model].update(dadosAtualizados, {
            where: { id: id }
        });

        return registroAtualizado[0] !== 0 ? true : false;
    }

    async criaRegistro(novoRegistro) {
        return db[this.model].create(novoRegistro);
    }

    async buscaPorId(id) {
        return db[this.model].findByPk(id);
    }

    async excluiRegistro(id) {
        const registroExcluido = db[this.model].destroy({
            where: { id: id }
        });

        return registroExcluido !== 0 ? true : false;
    }
}

module.exports = Services;