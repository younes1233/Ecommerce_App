// admin.service.ts

import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { Admin } from './admin.model';

@Injectable()
export class AdminService {
  constructor(
    @InjectModel(Admin.name) private readonly adminModel: Model<Admin>,
    private readonly jwtService: JwtService
  ) {}

  async login(loginDto: { username: string; password: string }) {
    // Find admin by username
    const admin = await this.adminModel.findOne({ username: loginDto.username }).exec();

    if (!admin) {
      throw new UnauthorizedException('Invalid credentials');
    }
//     const plainPassword = 'younes1231';
// // Generate a salt
// const saltRounds = 10;
// const salt = bcrypt.genSaltSync(saltRounds);

// // Hash the password
// const hashedPassword = bcrypt.hashSync(plainPassword, salt);

// console.log('Hashed password:', hashedPassword);
//     console.log('Stored password:', admin.password);
//     console.log('Entered password:', loginDto.password);
    const isMatch = await bcrypt.compare(loginDto.password, admin.password);
    console.log('Passwords match:', isMatch);
    if (!isMatch){
        throw new UnauthorizedException('Invalid credentials');
    }
    // Plain text password


    // Validate password
    //const isValidPassword = await admin.comparePassword(loginDto.password);

    // if (!isValidPassword) {
    //   throw new UnauthorizedException('Invalid credentials');
    // }

    // Generate JWT token
    const payload = { username: admin.username, sub: admin._id };
    const accessToken = this.jwtService.sign(payload);

    return { access_token: accessToken };
  }
}
