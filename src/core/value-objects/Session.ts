import User from 'src/core/entities/User';

export default interface Session {
  user: User;
  token: string;
}
