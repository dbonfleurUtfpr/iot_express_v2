const mongoose = require('mongoose');

const pessoaSchema = new mongoose.Schema({
  nome: { type: String, required: true, maxlength: 120 },
  email: { type: String, required: true, unique: true, maxlength: 80 },
  senha: { type: String, required: true, maxlength: 255 }
});

module.exports = mongoose.model('Pessoa', pessoaSchema);
