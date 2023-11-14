import {
    Controller,
    Get,
    HttpStatus,
    Post,
    Req,
    Request as Request2,
    UseGuards
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request2() req) {
    console.log(req.user);

    return this.authService.login(req.user);
  }

  @Get('/facebook')
  @UseGuards(AuthGuard('facebook'))
  async facebookLogin(): Promise<any> {
    return HttpStatus.OK;
  }

  @Get('/facebook/redirect')
  @UseGuards(AuthGuard('facebook'))
  async facebookLoginRedirect(@Req() req: Request): Promise<any> {
    console.log("req", req);
    console.log("user", req.user);
    
    
    return this.authService.login(req.user);

    // return {
    // statusCode: HttpStatus.OK,
    // data: req.user,
  }
}
