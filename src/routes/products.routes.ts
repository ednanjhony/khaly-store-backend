import { Router } from 'express';
import multer from 'multer';
import { getRepository } from 'typeorm';

import uploadConfig from '../config/upload';

import CreateProductService from '../services/CreateProductService';
import Product from '../models/Product';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const productsRouter = Router();

const upload = multer(uploadConfig);

productsRouter.get('/', async (request, response) => {
  const productsRepository = getRepository(Product);

  const products = await productsRepository.find();

  return response.json(products);
});

productsRouter.post('/', ensureAuthenticated, async (request, response) => {
  try {
    const {
      name,
      price,
      size,
      amount,
      description
    } = request.body;

    const createProduct = new CreateProductService();

    const product = await createProduct.execute({
      name,
      price,
      size,
      amount,
      description,
    });

    return response.json(product);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

productsRouter.patch('/avatar', ensureAuthenticated, upload.single('avatar'), async (request, response) => {
  return response.json({ ok: true })
});

export default productsRouter;
