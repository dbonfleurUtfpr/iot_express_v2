const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const leituraController = require('../controllers/leituraController');

// POST request para criar uma Leitura
router.post('/', [
    body('valor').isNumeric().withMessage('Valor deve ser numérico'),
    body('data').optional().isISO8601().withMessage('Data deve ser válida'),
    body('sensor').not().isEmpty().withMessage('ID do sensor é obrigatório')
  ], leituraController.createLeitura);
// GET request para listar todas as Leituras
router.get('/', leituraController.listLeituras);
// GET request para obter uma Leitura específica pelo ID
router.get('/:id', leituraController.getLeituraById);
// PUT request para atualizar uma Leitura pelo ID
router.put('/:id', [
    body('valor').isNumeric().withMessage('Valor deve ser numérico'),
    body('data').optional().isISO8601().withMessage('Data deve ser válida'),
    body('sensor').not().isEmpty().withMessage('ID do sensor é obrigatório')
  ], leituraController.updateLeituraById);
// DELETE request para deletar uma Leitura pelo ID
router.delete('/:id', leituraController.deleteLeituraById);

module.exports = router;
