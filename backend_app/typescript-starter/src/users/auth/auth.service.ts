// auth/auth.service.ts
import { Injectable } from '@nestjs/common';
import { UserService } from '../user.service';
import * as bcrypt from 'bcrypt';
import { User } from '../user.model';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async signUp(username: string, email: string, password: string): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await this.userService.createUser({ username, email, password: hashedPassword });
    return newUser;
  }
  async findUserById(id: string): Promise<User | null> {
    return this.userService.findUserById(id);
  }
  async validateUser(email: string, password: string): Promise<User | null> {
    const user = await this.userService.findUserByEmail(email);
    if (user && await bcrypt.compare(password, user.password)) {
      return user;
    }
    return null;
  }
}
