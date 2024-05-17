const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const sensorController = require('../controllers/sensorController');

// POST request para criar um Sensor
router.post('/', [
    body('nome').not().isEmpty().withMessage('Nome é obrigatório'),
    body('tipo').not().isEmpty().withMessage('Tipo é obrigatório'),
    body('ligado').isBoolean().withMessage('Ligado deve ser booleano'),
    body('dispositivo').not().isEmpty().withMessage('ID do dispositivo é obrigatório')
  ], sensorController.createSensor);
// GET request para listar todos os Sensores
router.get('/', sensorController.listSensors);
// GET request para obter um Sensor específico pelo ID
router.get('/:id', sensorController.getSensorById);
// PUT request para atualizar um Sensor pelo ID
router.put('/:id', [
    body('nome').not().isEmpty().withMessage('Nome é obrigatório'),
    body('tipo').not().isEmpty().withMessage('Tipo é obrigatório'),
    body('ligado').isBoolean().withMessage('Ligado deve ser booleano'),
    body('dispositivo').not().isEmpty().withMessage('ID do dispositivo é obrigatório')
  ], sensorController.updateSensorById);
// DELETE request para deletar um Sensor pelo ID
router.delete('/:id', sensorController.deleteSensorById);

module.exports = router;
