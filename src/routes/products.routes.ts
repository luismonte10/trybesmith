import { Router } from 'express';
import productsController from '../controllers/products.controller';
import { nameValidation, amountValidation } from '../middlewares/productMiddlewares';

const router = Router();

router.get('/', productsController.getAll);
router.post('/', nameValidation, amountValidation, productsController.create);

export default router;