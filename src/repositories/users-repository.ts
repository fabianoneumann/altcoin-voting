/* eslint-disable prettier/prettier */
import { User } from '@prisma/client'

export abstract class UsersRepository {
  abstract create(username: string, email: string, password: string): Promise<User>;

  abstract findMany(): Promise<User[]>;

  abstract update(id: string, username:string, email: string, password: string): Promise<User>;

  abstract delete(id: string);

  abstract findById(id: string): Promise<User>;

  abstract findByEmail(email: string): Promise<User>;
}