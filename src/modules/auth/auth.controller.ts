import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dot';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('login')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post()
  @UseGuards(LocalAuthGuard)
  async login(@Body() client: LoginDto) {
    return this.authService.login(client.email);
  }
}
