const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const atuadorController = require('../controllers/atuadorController');

// POST request para criar um Atuador
router.post('/', [
    body('nome').not().isEmpty().withMessage('Nome é obrigatório'),
    body('dispositivo').not().isEmpty().withMessage('ID do dispositivo é obrigatório')
  ], atuadorController.createAtuador);
// GET request para listar todos os Atuadores
router.get('/', atuadorController.listAtuadores);
// GET request para obter um Atuador específico pelo ID
router.get('/:id', atuadorController.getAtuadorById);
// PUT request para atualizar um Atuador pelo ID
router.put('/:id', [
    body('nome').not().isEmpty().withMessage('Nome é obrigatório'),
    body('dispositivo').not().isEmpty().withMessage('ID do dispositivo é obrigatório')
  ], atuadorController.updateAtuadorById);
// DELETE request para deletar um Atuador pelo ID
router.delete('/:id', atuadorController.deleteAtuadorById);

module.exports = router;
