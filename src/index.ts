import express from 'express';
import routes from './app/routes';
import databaseService from './app/database/database.service';
import { readFileSync } from 'fs';
import cors from 'cors';

const startServer = async () => {
    var sql_string = readFileSync('./docs/db.sql', 'utf8');
    try {
        await databaseService.query(sql_string);
    }
    catch (error) {
        if (String(error as string).includes('type "tipo_usuario" already exists')) {
            console.log('Banco de dados já criado, pulando criação');
        }
        else {
            console.error('Erro executando script SQL :', error);
        }
    }

    const app = express();
    const PORT = process.env.PORT || 5000;

    app.use(cors({
        origin: '*',
        credentials: true
    }));

    app.use(express.json());

    app.get('/', (req, res) => {
        res.status(200).send({
            message: 'Up and running!',
        });
    });

    app.use('/api', routes);

    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`);
    });
};

startServer();