import { Request, Response } from 'express';
import 'reflect-metadata';
import { container } from 'tsyringe';

import { AuthenticateUseCase } from './AuthenticateUseCase';

class AuthenticateUseController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;

    const authenticationUserCase = container.resolve(AuthenticateUseCase);

    const token = await authenticationUserCase.execute({ email, password });

    return res.json(token);
  }
}

export { AuthenticateUseController };
