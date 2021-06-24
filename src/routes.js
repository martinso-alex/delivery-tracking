const { Router } = require("express");

const { MealController } = require("./controllers/MealController");
const { OrderController } = require("./controllers/OrderController");
const { UserController } = require("./controllers/UserController");

const router = Router();

router.get("/", (req, res) => res.json("teste router"));

router.get("/user", UserController.buscar);
router.get("/user/:_id", UserController.buscarPorId);
router.post("/user", UserController.criar);
router.delete("/user/:_id", UserController.deletar);
router.put("/user/:_id", UserController.atualizar);

router.get("/meal", MealController.buscar);
router.get("/meal/:_id", MealController.buscarPorId);
router.post("/meal", MealController.criar);
router.delete("/meal/:_id", MealController.deletar);
router.put("/meal/:_id", MealController.atualizar);

router.get("/order", OrderController.buscar);
router.get("/order/:_id", OrderController.buscarPorId);
router.post("/order", OrderController.criar);
router.delete("/order/:_id", OrderController.deletar);
router.put("/order/:_id", OrderController.atualizar);

module.exports = { router };
