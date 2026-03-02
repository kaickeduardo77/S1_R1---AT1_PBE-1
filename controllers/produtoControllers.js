import produtoModel from "../models/produtoModels.js";

const produtoController = {

  async listar(req, res) {
    try {
      const produtos = await produtoModel.listar();
      res.status(200).json(produtos);
    } catch (error) {
      res.status(500).json({ message: "Erro no servidor", error: error.message });
    }
  },

  async criar(req, res) {
    try {
      const { idCategoria, nomeProduto, valorProduto } = req.body;

      if (!idCategoria || !nomeProduto || !valorProduto)
        return res.status(400).json({ message: "Preencha todos os campos" });

      if (!req.file)
        return res.status(400).json({ message: "Imagem obrigatória" });

      const result = await produtoModel.criar( idCategoria,nomeProduto,valorProduto,req.file.filename
      );

      res.status(201).json({message: "Produto criado com sucesso", idProduto: result.insertId
      });

    } catch (error) {
      res.status(500).json({ message: "Erro ao criar produto", error: error.message });
    }
  },

  async atualizar(req, res) {
    try {
      const id = Number(req.params.idProduto);
      const { idCategoria, nomeProduto, valorProduto } = req.body;

      await produtoModel.atualizar(id, idCategoria, nomeProduto, valorProduto);

      res.status(200).json({ message: "Produto atualizado com sucesso" });

    } catch (error) {
      res.status(500).json({ message: "Erro ao atualizar", error: error.message });
    }
  },

  async excluir(req, res) {
    try {
      const id = Number(req.params.idProduto);
      await produtoModel.excluir(id);
      res.status(200).json({ message: "Produto excluído com sucesso" });
    } catch (error) {
      res.status(500).json({ message: "Erro ao excluir", error: error.message });
    }
  }

};

export default produtoController;