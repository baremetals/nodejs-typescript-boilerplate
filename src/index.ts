import cors from 'cors';
import express from 'express';
import path from 'path';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';

import {
  AuthRoutePaths,
} from './enums/APIRoutePaths';
import globalErrorHandler from './middleware/errorHandler';

import authRouter from './routes/auth';
import homeRouter from './routes/home';

import AppError from './utils/appError';



function createServer() {
  const app = express();
  const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Welcome to career paths docs',
        version: '1.0.0',
        description: 'career path application',
      },
      servers: [
        {
          url: 'http://localhost:4000',
        },
      ],
    },
    apis: ['src/routes/*/*.ts'],
  };
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'ejs');
  const publicPath = path.join(__dirname, 'public');
  app.use(express.static(publicPath));

  const specs = swaggerJsDoc(options);

  app.use(
    cors({
      origin: process.env.CORS_ORIGIN ? process.env.CORS_ORIGIN : '*',
      credentials: true,
    }),
  );

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use('/', homeRouter);
  app.use('/docs', swaggerUI.serve, swaggerUI.setup(specs));
  app.use(`/api${AuthRoutePaths.ROOT}`, authRouter);
 

  app.all('*', function (req, _res, next) {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
  });
  app.use(globalErrorHandler);

  return app;
}

export default createServer;
