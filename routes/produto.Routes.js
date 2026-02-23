import { Router } from "express";
import uploadImage from "../middlewares/uploadimage.middlewares.js";
import produtoController from "../controllers/produtoControllers.js";

const produtoRoutes = Router();


produtoRoutes.post("/produto", uploadImage, produtoController.criar);
produtoRoutes.get("/", produtoController.listar);
produtoRoutes.put("/:id", produtoController.atualizar);
produtoRoutes.delete("/:id", produtoController.excluir);
export default produtoRoutes;
