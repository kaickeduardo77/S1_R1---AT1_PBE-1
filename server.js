import express from 'express';
import produtoRoutes from './routes/produto.Routes.js';
import 'dotenv/config';
import categoriaRoutes from './routes/categoria.Routes.js';

const app = express();

app.use(express.json());

app.use('/', produtoRoutes);
app.use('/', categoriaRoutes);
const PORT = process.env.SERVER_PORT || 8081;

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});