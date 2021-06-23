const User = require("../models/User");

class UserController {
  static async criar(req, res) {
    const { nome, email, senha, perfil, localizacao } = req.body;

    const user = await User.create({ nome, email, senha, perfil, localizacao });

    res.status(201).json(user);
  }

  static async buscar(req, res) {
    const users = await User.find();

    res.json(users);
  }

  static async buscarPorId(req, res) {
    const { _id } = req.params;

    const user = await User.find({ _id });

    res.json(user);
  }

  static async deletar(req, res) {
    const { _id } = req.params;

    await User.deleteOne({ _id });

    res.status(204).json();
  }

  static async atualizar(req, res) {
    const { nome, email, senha, perfil, localizacao } = req.body;

    const { _id } = req.params;

    await User.updateOne({ _id }, { nome, email, senha, perfil, localizacao });

    const user = await User.findOne({ _id });

    res.json(user);
  }
}

module.exports = { UserController };
