import { Request, Response } from 'express';

import { ListSpecificationUseCase } from './ListSpecificationUseCase';

class ListSpecificationController {
  constructor(private listSpacificationUseCase : ListSpecificationUseCase) {}

  handle(req: Request, res: Response) : Response {
    const specifications = this.listSpacificationUseCase.execute();

    return res.json(specifications);
  }
}

export { ListSpecificationController };
