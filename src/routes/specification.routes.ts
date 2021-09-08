import { Router } from 'express';

import { createSpacificationController } from '../modules/cars/useCases/createSpecification';
import { listSpecificationController } from '../modules/cars/useCases/listSpecification';

const specificationRoutes = Router();

specificationRoutes.post('/', (req, res) => createSpacificationController.handle(req, res));

specificationRoutes.get('/', (req, res) => listSpecificationController.handle(req, res));

export { specificationRoutes };
