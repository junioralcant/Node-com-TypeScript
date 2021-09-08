import { Request, Response } from 'express';

import { CreateSpacificationUseCase } from './CreateSpecificationUseCase';

class CreateSpacificationController {
  constructor(private createSpacificationUseCase: CreateSpacificationUseCase) {}

  handle(req: Request, res: Response) : Response {
    const { name, description } = req.body;

    this.createSpacificationUseCase.execute({ name, description });

    return res.status(201).send();
  }
}

export { CreateSpacificationController };
