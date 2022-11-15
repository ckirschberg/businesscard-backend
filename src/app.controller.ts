import { Controller, Get, Post, Render, UseGuards, Request } from '@nestjs/common';
import { AppService } from './app.service';
import { BusinessCardService } from './business-card/business-card.service';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

@Controller()
export class AppController {
  
  constructor(
    private readonly appService: AppService,
    private readonly bcService: BusinessCardService,
    private authService: AuthService) {}

    @UseGuards(LocalAuthGuard)
    @Post('auth/login')
    async login(@Request() req) {
      return this.authService.login(req.user);
    }

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
      return req.user;
    }

  // @Get()
  // @Render('index')
  // root() {
  //   return {message: 'Hello World'}
  //   //return { nameOfProperyWithArray: [{title: "fdajklæf"}, ...] };
  // }

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }
}
