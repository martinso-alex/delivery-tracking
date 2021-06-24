const Order = require("../models/Order");

class OrderController {
  static async criar(req, res) {
    const { meal, user } = req.body;

    const order = await Order.create({ meal, user });

    res.status(201).json(order);
  }

  static async buscar(req, res) {
    const orders = await Order.find().populate(["user", "meal"]);

    res.json(orders);
  }

  static async buscarPorId(req, res) {
    const { _id } = req.params;

    const order = await Order.find({ _id });

    res.json(order);
  }

  static async deletar(req, res) {
    const { _id } = req.params;

    await Order.deleteOne({ _id });

    res.status(204).json();
  }

  static async atualizar(req, res) {
    const { meal, user } = req.body;

    const { _id } = req.params;

    await Order.updateOne({ _id }, { meal, user });

    const order = await Order.findOne({ _id });

    res.json(order);
  }
}

module.exports = { OrderController };
