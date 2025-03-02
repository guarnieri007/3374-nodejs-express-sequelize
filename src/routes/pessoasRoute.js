const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController.js');
const pessoaController = new PessoaController();
const MatriculaController = require('../controllers/MatriculaController.js');
const matriculaController = new MatriculaController();
const router = Router();

router.get('/pessoas', (req, res) => pessoaController.obterTodosDados(req, res));
router.get('/pessoas/:id', (req, res) => pessoaController.obtemPorId(req, res));
router.post('/pessoas', (req, res) => pessoaController.criaNovo(req, res));
router.put('/pessoas/:id', (req, res) => pessoaController.atualizar(req, res));
router.delete('/pessoas/:id', (req, res) => pessoaController.exclui(req, res));
router.get('/pessoas/:estudanteId/matriculas', (req, res) => pessoaController.pegaMatriculas(req, res));
router.post('/pessoas/matriculas', (req, res) => matriculaController.criaNovo(req, res));

module.exports = router;