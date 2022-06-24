import { Request, Response } from 'express';
import { User } from '../interfaces/users.interface';
import usersService from '../services/users.service';

const create = async (req: Request, res: Response) => {
  const newUser: User = req.body;

  const token = await usersService.create(newUser);

  return res.status(201).json({ token });
};

export = {
  create,
};
