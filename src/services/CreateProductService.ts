import { getRepository } from 'typeorm';

import Product from '../models/Product';

interface Request {
  name: string;
  price: number;
  size: string;
  amount: number;
  description: string;
}

class CreateProductService {
  public async execute({
    name,
    price,
    size,
    amount,
    description,
  }:Request): Promise<Product> {
    const productsRepository = getRepository(Product);

    const checkProductExist = await productsRepository.findOne({
      where: { name },
    });

    if (checkProductExist) {
      throw Error('Product already exists.');
    }

    const product = productsRepository.create({
      name,
      price,
      size,
      amount,
      description,
    });

    await productsRepository.save(product);

    return product;
  }
}

export default CreateProductService;
