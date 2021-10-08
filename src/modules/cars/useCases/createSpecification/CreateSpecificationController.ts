import { Request, Response } from 'express';
import 'reflect-metadata';
import { container } from 'tsyringe';

import { CreateSpacificationUseCase } from './CreateSpecificationUseCase';

class CreateSpacificationController {
  async handle(req: Request, res: Response) : Promise<Response> {
    const { name, description } = req.body;

    const createSpacificationUseCase = container.resolve(
      CreateSpacificationUseCase,
    );

    await createSpacificationUseCase.execute({ name, description });

    return res.status(201).send();
  }
}

export { CreateSpacificationController };
