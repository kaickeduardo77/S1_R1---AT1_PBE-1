import { Router } from "express";
import upload from "../config/upload.js";
import produtoController from "../controllers/produtoControllers.js";

const produtoRoutes = Router();

produtoRoutes.get("/produtos", produtoController.listar);

produtoRoutes.post("/produtos",upload.single("imagem"),produtoController.criar
);

produtoRoutes.put("/produtos/:idProduto", produtoController.atualizar);

produtoRoutes.delete("/produtos/:idProduto", produtoController.excluir);

export default produtoRoutes;