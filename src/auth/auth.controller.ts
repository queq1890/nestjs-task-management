import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  signUp(
    @Body(ValidationPipe) authCredientialsDto: AuthCredentialsDto,
  ): Promise<void> {
    return this.authService.signUp(authCredientialsDto);
  }

  @Post('/signin')
  signIn(
    @Body(ValidationPipe) authCredientialsDto: AuthCredentialsDto,
  ): Promise<{ accessToken: string }> {
    return this.authService.signIn(authCredientialsDto);
  }
}
