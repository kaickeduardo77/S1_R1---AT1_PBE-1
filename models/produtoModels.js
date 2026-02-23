import pool from "../config/produto.multer.js";

const produtoModel = {

async criar() {
const { idCategoria, nomeProduto, valorProduto, vinculoImagem } = produto;
const sql = `INSERT INTO produto (idCategoria, nomeProduto, valorProduto, vinculoImagem, dataCad) VALUES (?, ?, ?, ?, ?())`;
const [result] = await pool.execute(sql, [idCategoria, nomeProduto, valorProduto, vinculoImagem]);
return { idProduto: result.insertId, };
},

async listar() {
const sql = `SELECT * FROM produto`;
const [rows] = await pool.execute(sql);
return rows;
},

async buscarPorId(id) {
const sql = `SELECT * FROM produto WHERE idProduto = ?`;
const [rows] = await pool.execute(sql, [id]);
return rows[0];
},

async atualizar(id, produto) {
const { idCategoria, nomeProduto, valorProduto } = produto;
const sql = `UPDATE produto SET idCategoria = ?, nomeProduto = ?, valorProduto = ? WHERE idProduto = ?`;
await pool.execute(sql, [idCategoria, nomeProduto, valorProduto, id]);
return { idProduto: id, ...produto };
},

async excluir(id) {
const sql = `DELETE FROM produto WHERE idProduto = ?`;
await pool.execute(sql, [id]);
}

};

export default produtoModel;