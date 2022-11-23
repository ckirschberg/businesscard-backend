import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/user.schema';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user: User = await this.usersService.findOne(username);
    
    if (user && user.password === pass) {
        // delete user.password;
        console.log("auth.service", user);    
        // const { password, ...result } = user; // This does not do what it is supposed to do (remove the password and return the rest of the user object.)
        console.log("auth.service2 result", user);
        return user;
    }
    return null;
  }

  async login(user: any) {
    console.log("auth.service user", user);
    
    const payload = { username: user.username /*, sub: user._id.toString() */};
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}