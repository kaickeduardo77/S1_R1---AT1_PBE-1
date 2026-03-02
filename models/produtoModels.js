import  pool from '../config/db.js';

const produtoModel = {

    listar: async () => {
        const [rows] = await pool.query(`
            SELECT p.*, c.descricaoCategoria
            FROM produto p
            INNER JOIN categoria c ON p.idCategoria = c.idCategoria
        `);
        return rows;
    },

    criar: async (idCategoria, nomeProduto, valorProduto, vinculoImagem) => {
        const [result] = await pool.query(
            `INSERT INTO produto 
            (idCategoria, nomeProduto, valorProduto, vinculoImagem) 
            VALUES (?, ?, ?, ?)`,
            [idCategoria, nomeProduto, valorProduto, vinculoImagem]
        );
        return result;
    },

    atualizar: async (id, idCategoria, nomeProduto, valorProduto) => {
        const [result] = await pool.query(
            `UPDATE produto 
             SET idCategoria=?, nomeProduto=?, valorProduto=? 
             WHERE idProduto=?`,
            [idCategoria, nomeProduto, valorProduto, id]
        );
        return result;
    },

    excluir: async (id) => {
        const [result] = await pool.query(
            'DELETE FROM produto WHERE idProduto=?',
            [id]
        );
        return result;
    }

};

export default produtoModel;