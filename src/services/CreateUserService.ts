import { getRepository } from 'typeorm';

import { hash } from 'bcryptjs';

import User from '../models/User';

interface Request {
  name: string;
  password: string;
  email: string;
  cpf: string;
  rg: string;
  dateOfBirth: Date;
  genre: string;
  celphone: string;
  address: string;
  number: string;
  description: string;
  zipCode: string;
  neighborhood: string;
  reference: string;
  city: string;
  state: string;
}

class CreateUserService {
  public async execute({
    name,
    password,
    email,
    cpf,
    rg,
    dateOfBirth,
    genre,
    celphone,
    address,
    number,
    description,
    zipCode,
    neighborhood,
    reference,
    city,
    state,
  }: Request): Promise<User> {
    const usersRepository = getRepository(User);

    const checkUserExists = await usersRepository.findOne({
      where: { email },
    });

    if (checkUserExists) {
      throw Error('Email already used.');
    }

    const hashedPassword = await hash(password, 8);

    const user = usersRepository.create({
      name,
      password: hashedPassword,
      email,
      cpf,
      rg,
      dateOfBirth,
      genre,
      celphone,
      address,
      number,
      description,
      zipCode,
      neighborhood,
      reference,
      city,
      state,
    });

    await usersRepository.save(user);

    return user;
  }
}

export default CreateUserService;
