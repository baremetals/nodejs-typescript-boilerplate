import { Router } from 'express';
import { healthHandler, rootHandler } from '@/controllers/home-controller';

const homeRouter = Router();

homeRouter.get('/', rootHandler);
homeRouter.get('/health', healthHandler);

export default homeRouter;
