import { Router } from 'express';
import userValidations from '../middlewares/userMiddlewares';
import usersController from '../controllers/users.controller';

const router = Router();

router.post('/', userValidations, usersController.create);

export default router;
