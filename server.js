import express from 'express';
import produtoRoutes from './routes/produto.Routes.js';
import 'dotenv/config';

const app = express();

app.use(express.json());

app.use('/', produtoRoutes);


const PORT = process.env.SERVER_PORT || 8081;

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});