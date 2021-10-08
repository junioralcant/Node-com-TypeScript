import { Router } from 'express';

import { CreateSpacificationController } from '../modules/cars/useCases/createSpecification/CreateSpecificationController';
import { listSpecificationController } from '../modules/cars/useCases/listSpecification';

const specificationRoutes = Router();

const createSpacificationController = new CreateSpacificationController();

specificationRoutes.post('/', createSpacificationController.handle);

specificationRoutes.get('/', (req, res) => listSpecificationController.handle(req, res));

export { specificationRoutes };
