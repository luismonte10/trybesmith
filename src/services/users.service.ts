import { User } from '../interfaces/users.interface';
import usersModel from '../models/users.model';
import generateJWT from '../utils/generateJWT';

const create = async (newUser: User) => {
  const createdUser = await usersModel.create(newUser);

  const token = generateJWT(createdUser);

  return token;
};

export = {
  create,
};
