import { Router } from "express";
import categoriaController from "../controllers/categoriaControllers.js";

const categoriaRoutes = Router();

categoriaRoutes.get("/categorias", categoriaController.listar);
categoriaRoutes.post("/categorias", categoriaController.criar);
categoriaRoutes.put("/categorias/:idCategoria", categoriaController.atualizar);
categoriaRoutes.delete("/categorias/:idCategoria", categoriaController.excluir);

export default categoriaRoutes;