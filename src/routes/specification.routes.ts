import { Router } from 'express';

import { SpecificationRepository } from '../modules/cars/repositories/implementations/SpecificationRepository';
import { CreateSpacificationServer } from '../modules/cars/services/CreateSpecificationService';

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

specificationRoutes.get('/', (req, res) => {
  const specifications = specificationRepository.list();

  return res.json(specifications);
});

export { specificationRoutes };
