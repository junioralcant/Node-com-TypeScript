import { Router } from 'express';

import { SpecificationRepository } from '../modules/cars/repositories/SpecificationRepository';
import { CreateSpacificationServer } from '../modules/cars/services/CreateSpacificationService';

const specificationRoutes = Router();

const specificationRepository = new SpecificationRepository();

specificationRoutes.post('/', (req, res) => {
  const { name, description } = req.body;

  const createSpecificationService = new CreateSpacificationServer(
    specificationRepository,
  );

  createSpecificationService.execute({ name, description });

  return res.status(201).send();
});

export { specificationRoutes };
