import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { inject, injectable } from 'tsyringe';

import { UsersRepositories } from '../../repositories/implimentations/UsersRepositories';

interface IRequest{
    email: string,
    password: string
}

interface IResponse{
    user: {
        name: string
        email: string,
    },
    token: string
}

@injectable()
class AuthenticateUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: UsersRepositories,
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponse > {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new Error('Email or password incorrect');
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error('Email or password incorrect');
    }

    const token = sign({}, 'nodeignite', {
      subject: user.id,
      expiresIn: '1d',
    });

    const tokenReturn: IResponse = {
      token,
      user: {
        name: user.name,
        email: user.email,
      },
    };

    return tokenReturn;
  }
}

export { AuthenticateUseCase };
