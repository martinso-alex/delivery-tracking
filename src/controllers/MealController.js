const Meal = require("../models/Meal");

class MealController {
  static async criar(req, res) {
    const { name, price, user } = req.body;

    const meal = await Meal.create({ name, price, user });

    res.status(201).json(meal);
  }

  static async buscar(req, res) {
    const meals = await Meal.find().populate("user");

    res.json(meals);
  }

  static async buscarPorId(req, res) {
    const { _id } = req.params;

    const meal = await Meal.find({ _id }).populate("user");

    res.json(meal);
  }

  static async deletar(req, res) {
    const { _id } = req.params;

    await Meal.deleteOne({ _id });

    res.status(204).json();
  }

  static async atualizar(req, res) {
    const { name, price, user } = req.body;

    const { _id } = req.params;

    await Meal.updateOne({ _id }, { name, price, user });

    const meal = await Meal.findOne({ _id });

    res.json(meal);
  }
}

module.exports = { MealController };
