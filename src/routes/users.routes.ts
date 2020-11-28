import { Router } from 'express';
import { getRepository } from 'typeorm';

import CreateUserService from '../services/CreateUserService';
import User from '../models/User';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const usersRouter = Router();

usersRouter.get('/', ensureAuthenticated, async (request, response) => {
  const usersRepository = getRepository(User);

  const users = await usersRepository.find();

  return response.json(users);
});

usersRouter.post('/', async (request, response) => {
  try {
    const {
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
     } = request.body;

     const createUser = new CreateUserService();

     const user = await createUser.execute({
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
     });

    return response.json(user);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default usersRouter;
