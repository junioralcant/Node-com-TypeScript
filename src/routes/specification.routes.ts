import { Router } from 'express';

import { CreateSpacificationController } from '../modules/cars/useCases/createSpecification/CreateSpecificationController';
import { ListSpecificationController } from '../modules/cars/useCases/listSpecification/ListSpecificationController';

const specificationRoutes = Router();

const createSpacificationController = new CreateSpacificationController();
const listSpecificationController = new ListSpecificationController();

specificationRoutes.post('/', createSpacificationController.handle);

specificationRoutes.get('/', listSpecificationController.handle);

export { specificationRoutes };
