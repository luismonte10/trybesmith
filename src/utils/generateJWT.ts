import { User } from '../interfaces/users.interface';

const jwt = require('jsonwebtoken');

const jwtConfig = {
  expiresIn: '24h',
};

const generateJWT = (payload: User) => {
  const token = jwt.sign({ data: payload }, process.env.JWT_SECRET, jwtConfig);

  return token;
};

export default generateJWT;