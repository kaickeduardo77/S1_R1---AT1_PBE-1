

const produtoControllers = {

    criar: async (req, res) => {
        try {

            const { idCategoria, nomeProduto, valorProduto } = req.body;

            if (!idCategoria || !nomeProduto || !valorProduto) {
                return res.status(400).json({ message: "Preencha todos os campos obrigatórios" });
            }

            if (!req.file) {
                return res.status(400).json({ message: "Imagem obrigatória" });
            }

            const vinculoImagem = req.file.filename;

            const resultado = await produtoModels.criar(
                idCategoria,
                nomeProduto,
                valorProduto,
                vinculoImagem
            );

            res.status(201).json({
                message: "Produto criado com sucesso",
                produtoId: resultado.insertId
            });

        } catch (error) {
            res.status(500).json({ message: "Erro ao criar produto", error: error.message });
        }
    },

    listar: async (req, res) => {
        try {

            const produtos = await produtoModels.listar();

            res.status(200).json(produtos);

        } catch (error) {
            res.status(500).json({ message: "Erro ao listar produtos", error: error.message });
        }
    },

    atualizar: async (req, res) => {
        try {

            const { id } = req.params;
            const { idCategoria, nomeProduto, valorProduto } = req.body;

            await produtoModel.atualizar(id, idCategoria, nomeProduto, valorProduto);

            res.status(200).json({ message: "Produto atualizado com sucesso" });

        } catch (error) {
            res.status(500).json({ message: "Erro ao atualizar produto", error: error.message });
        }
    },

    excluir: async (req, res) => {
        try {

            const { id } = req.params;

            await produtoModel.excluir(id);

            res.status(200).json({ message: "Produto excluído com sucesso" });

        } catch (error) {
            res.status(500).json({ message: "Erro ao excluir produto", error: error.message });
        }
    }

};

export default produtoControllers;