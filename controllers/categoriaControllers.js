import categoriaModel from "../models/categoriaModels.js";

const categoriaController = {

    async criar(req, res) {
        try {
            const { descricaoCategoria } = req.body;

            if (!descricaoCategoria) {
                return res.status(400).json({ message: "Descrição obrigatória" });
            }

            const result = await categoriaModel.criar(descricaoCategoria);

            res.status(201).json({
                message: "Categoria criada com sucesso",
                idCategoria: result.insertId
            });

        } catch (error) {
            res.status(500).json({ message: "Erro ao criar categoria", error: error.message });
        }
    },

    async listar(req, res) {
        try {
            const categorias = await categoriaModel.listar();
            res.status(200).json(categorias);
        } catch (error) {
            res.status(500).json({ message: "Erro ao listar categorias", error: error.message });
        }
    },

    async atualizar(req, res) {
        try {
            const { idCategoria } = req.params;
            const { descricaoCategoria } = req.body;

            await categoriaModel.atualizar(idCategoria, descricaoCategoria);

            res.status(200).json({ message: "Categoria atualizada com sucesso" });

        } catch (error) {
            res.status(500).json({ message: "Erro ao atualizar categoria", error: error.message });
        }
    },

    async excluir(req, res) {
        try {
            const { idCategoria } = req.params;

            await categoriaModel.excluir(idCategoria);

            res.status(200).json({ message: "Categoria excluída com sucesso" });

        } catch (error) {
            res.status(500).json({ message: "Erro ao excluir categoria", error: error.message });
        }
    }

};

export default categoriaController;