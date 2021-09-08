import { SpecificationRepository } from '../../repositories/implementations/SpecificationRepository';
import { CreateSpacificationController } from './CreateSpecificationController';
import { CreateSpacificationUseCase } from './CreateSpecificationUseCase';

const specificationRepository = SpecificationRepository.getInstance();
const createSpacificationUseCase = new CreateSpacificationUseCase(specificationRepository);
const createSpacificationController = new CreateSpacificationController(createSpacificationUseCase);

export { createSpacificationController };
