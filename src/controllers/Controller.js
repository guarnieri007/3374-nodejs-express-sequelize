class Controller {
    constructor(entidadeService) {
        this.entidadeService = entidadeService;
    }

    async obterTodosDados(req, res) {
        try {
            const lista = await this.entidadeService.getAll();
            return res.status(200).json(lista);
        }
        catch (erro) {
            //tratar o erro
        }
    }

    async obtemPorId(req, res) {
        try {
            const { id } = req.params;
            const registro = await this.entidadeService.buscaPorId(Number(id));
            return res.status(200).json(registro);
        }
        catch (erro) {
            //tratar o erro
        }
    }

    async criaNovo(req, res) {
        const novoRegistro = req.body;
        try {
            const registroCriado = await this.entidadeService.criaRegistro(novoRegistro);
            return res.status(201).json(registroCriado);
        }
        catch (erro) {
            //tratar o erro
        }
    }

    async atualizar(req, res) {
        const { id } = req.params;
        const dadosAtualizados = req.body;
        console.log(req);
        try {
            const isUpdated = await this.entidadeService.atualizaRegistro(dadosAtualizados, Number(id));
            if (!isUpdated) {
                return res.status(400).json({ mensagem: 'registro não foi atualizado' });
            }
            return res.status(200).json({
                mensagem: 'Atualizado com sucesso!'
            });
        }
        catch (erro) {
            return res.status(500).json({
                mensagem: erro
            });
        }
    }

    async exclui(req, res) {
        const { id } = req.params;
        try {
            const isDeleted = await this.entidadeService.excluiRegistro(Number(id));
            if (!isDeleted) {
                return res.status(404).json({ mensagem: 'Registro não encontrado ou não foi deletado.' });
            }
            return res.status(200).json({ mensagem: `Registro com id: ${id} foi excluído com sucesso!` });
        }
        catch (erro) {
            return res.status(500).json({ mensagem: `Erro ao excluir registro: ${erro}` });
        }
    }
}

module.exports = Controller;