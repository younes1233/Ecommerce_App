// admin.controller.ts

import { Controller, Post, Body } from '@nestjs/common';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post('login')
  async login(@Body() loginDto: { username: string; password: string }) {
    return this.adminService.login(loginDto);
  }
}
