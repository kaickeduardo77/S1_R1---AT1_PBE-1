import pool from "../config/db.js";

const categoriaModels = {

    
    listar: async () => {
        const [rows] = await pool.query(
            "SELECT * FROM categoria"
        );
        return rows;
    },

   
    criar: async (descricaoCategoria) => {
        const [result] = await pool.query(
            "INSERT INTO categoria (descricaoCategoria) VALUES (?)",
            [descricaoCategoria]
        );
        return {
            idCategoria: result.insertId,
            descricaoCategoria
        };
    },

    
    buscarPorId: async (id) => {
        const [rows] = await pool.query(
            "SELECT * FROM categoria WHERE idCategoria = ?",
            [id]
        );
        return rows[0];
    },

    
    atualizar: async (id, descricaoCategoria) => {
        const [result] = await pool.query(
            "UPDATE categoria SET descricaoCategoria = ? WHERE idCategoria = ?",
            [descricaoCategoria, id]
        );
        return result;
    },
    excluir: async (id) => {
        const [result] = await pool.query(
            "DELETE FROM categoria WHERE idCategoria = ?",
            [id]
        );
        return result;
    }

};

export default categoriaModels;