const { Router } = require("express");
const { UserController } = require("./controllers/UserController");

const router = Router();

router.get("/", (req, res) => res.json("teste router"));

router.get("/user", UserController.buscar);
router.get("/user/:_id", UserController.buscarPorId);
router.post("/user", UserController.criar);
router.delete("/user/:_id", UserController.deletar);
router.put("/user/:_id", UserController.atualizar);

module.exports = { router };
