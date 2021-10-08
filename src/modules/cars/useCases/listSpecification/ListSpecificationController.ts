import { Request, Response } from 'express';
import 'reflect-metadata';
import { container } from 'tsyringe';

import { ListSpecificationUseCase } from './ListSpecificationUseCase';

class ListSpecificationController {
  async handle(req: Request, res: Response) : Promise<Response> {
    const listSpacificationUseCase = container.resolve(ListSpecificationUseCase);

    const specifications = await listSpacificationUseCase.execute();

    return res.json(specifications);
  }
}

export { ListSpecificationController };
