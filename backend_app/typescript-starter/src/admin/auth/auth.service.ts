// auth/auth.service.ts

import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async login(username: string, password: string) {
    // Validate username and password (e.g., query database)
    // For demonstration, let's assume the user is valid
    const user = { username: 'admin', password: 'password' };

    if (username === user.username && password === user.password) {
      const payload = { username: user.username };
      return {
        access_token: this.jwtService.sign(payload),
      };
    } else {
      throw new Error('Invalid username or password');
    }
  }
}
