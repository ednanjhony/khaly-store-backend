import { Router } from 'express';

import CreateUserService from '../services/CreateUserService';

const usersRouter = Router();

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
