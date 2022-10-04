import { Application, Router } from 'express';
import HelloController from './cart/cart.controller';
import { constant } from './util/constant';

export const initiateRoutes = (app: Application, router: Router) => {

  // add router here
  //router.get(<endpoint path>, <import function from controller>);

  router.get(constant.HELLO_API, HelloController.hello); // dummy endpoint

  app.use('/', router);
};