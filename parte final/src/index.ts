
import express from 'express';
import basicAuthenticationMiddleware from './middlewares/basic-authentication.middleware';
import bearerAthenticationMiddleware from './middlewares/bearer-authentication.middleware';
import errorHandler from './middlewares/error-handler.middleware';
import authorizationRoute from './routes/authorization.route';
import statusRoute from './routes/status.route';
import usersRoute from './routes/users.route';

const app = express();

//configurações da aplicação
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//configurações de rotas
app.use(usersRoute);
app.use(bearerAthenticationMiddleware, statusRoute);
app.use(authorizationRoute);

//configurações dos Handlers de Erro
app.use(errorHandler);

//inicialização do servidor
app.listen(3000, () => {
    console.log('Aplicação executada na porta 3000!');
});