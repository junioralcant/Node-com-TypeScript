import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

import { UsersRepositories } from '../modules/accounts/repositories/implimentations/UsersRepositories';

interface IPayload {
    sub: string
}

export async function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new Error('Token missing');
  }

  const [, token] = authHeader.split(' ');

  try {
    const { sub: user_id } = verify(token, 'nodeignite') as IPayload;

    const usersRepository = new UsersRepositories();

    const user = await usersRepository.findById(user_id);

    if (!user) {
      throw new Error('User does not exists');
    }

    next();
  } catch (error) {
    throw new Error('Invalid token!');
  }
}
