import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt.strategy';
import { ConfigModule, ConfigService } from '@nestjs/config'; // Import ConfigModule and ConfigService

@Module({
  imports: [
    ConfigModule.forRoot(), // Import and configure ConfigModule
    JwtModule.register({
      secret: '78f7286c83986ec6bca75001f5a34e45fb4f31620654a9f08d0a4a3d5b9b16b4',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [
    AuthService,
    JwtStrategy,
    ConfigService, // Provide ConfigService
  ],
  controllers: [AuthController],
})
export class AuthModule {}
