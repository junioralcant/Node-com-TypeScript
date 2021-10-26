import { inject, injectable } from 'tsyringe';

import { ICreateUserDTO } from '../dtos/ICreateUserDTO';
import { UsersRepositories } from '../repositories/implimentations/UsersRepositories';

@injectable()
class CreateUserUseCase {
  constructor(
        @inject('UsersRepository')
        private usersRepository: UsersRepositories,
  ) {

  }
  async execute({
    name,
    email,
    password,
    driver_license,
  } : ICreateUserDTO): Promise<void> {
    await this.usersRepository.create({
      name,
      email,
      password,
      driver_license,
    });
  }
}

export { CreateUserUseCase };
