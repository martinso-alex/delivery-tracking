const mongoose = require("mongoose");

const schema = mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  senha: {
    type: String,
    required: true,
  },
  perfil: {
    type: String,
    required: true,
  },
  localizacao: {
    type: {
      type: String,
      enum: ["Point"],
    },
    coordinates: {
      type: [Number],
    },
  },
});

module.exports = mongoose.model("User", schema);
