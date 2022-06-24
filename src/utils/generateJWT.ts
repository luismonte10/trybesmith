import jwt from 'jsonwebtoken';
import { User } from '../interfaces/users.interface';

const JWT_SECRET = 'luismonte10';

const jwtConfig = {
  expiresIn: '24h',
};

const generateJWT = (payload: User) => {
  const token = jwt.sign({ data: payload }, JWT_SECRET, jwtConfig);

  return token;
};

export default generateJWT;