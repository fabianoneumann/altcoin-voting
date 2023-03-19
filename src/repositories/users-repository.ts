/* eslint-disable prettier/prettier */
import { User } from '@prisma/client'

export abstract class UsersRepository {
  abstract create(email: string, password: string): Promise<void>;

  abstract findMany(): Promise<User[]>;
}