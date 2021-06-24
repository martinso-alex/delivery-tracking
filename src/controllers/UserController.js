const User = require("../models/User");

class UserController {
  static async criar(req, res) {
    const { name, email, password, role, location } = req.body;

    const user = await User.create({ name, email, password, role, location });

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
    const { name, email, password, role, location } = req.body;

    const { _id } = req.params;

    await User.updateOne({ _id }, { name, email, password, role, location });

    const user = await User.findOne({ _id });

    res.json(user);
  }
}

module.exports = { UserController };
