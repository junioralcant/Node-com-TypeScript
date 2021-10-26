import { Router } from 'express';

import { AuthenticateUseController } from '../modules/accounts/useCase/createSession/AuthenticateUseController';

const authenticateRoutes = Router();

const authenticateUseController = new AuthenticateUseController();

authenticateRoutes.post('/sessions', authenticateUseController.handle);

export { authenticateRoutes };
