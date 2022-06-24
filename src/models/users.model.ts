import { ResultSetHeader } from 'mysql2';
import { User, CreatedUser } from '../interfaces/users.interface';
import connection from './connection';

const create = async (newUser: User): Promise<CreatedUser> => {
  const { username, classe, level, password } = newUser;

  const query = `INSERT INTO Trybesmith.Users
  (username, classe, level, password) VALUES (?, ?, ?, ?)`;

  const [userId] = await connection.execute<ResultSetHeader>(
    query, 
    [username, classe, level, password],
  );

  const { insertId } = userId;

  return { id: insertId, ...newUser };
};

export = {
  create,
};