import { Request, Response } from 'express';

class ProductController {

  // dummy function
  hello (req: Request, res: Response) {

    // all logic need to be added to service
    res.send('Hello World!');
  }
}

export default new ProductController();