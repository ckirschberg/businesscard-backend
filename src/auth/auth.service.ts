import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User, UserDocument } from 'src/users/user.schema';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user: UserDocument = await this.usersService.findOne(username);
    
    if (user && user.password === pass) {
        
        console.log(user);
        let { password, ...result } = user.toObject()
        console.log(result);
        
        return result;
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