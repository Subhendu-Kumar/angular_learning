export type roles = 'ADMIN' | 'USER' | 'MANAGER';

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  role: roles;
}
