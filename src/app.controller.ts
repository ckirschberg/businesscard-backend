import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { BusinessCardService } from './business-card/business-card.service';

@Controller()
export class AppController {
  
  constructor(
    private readonly appService: AppService,
    private readonly bcService: BusinessCardService) {}

  @Get()
  @Render('index')
  root() {
    return {message: 'Hello World'}
    //return { nameOfProperyWithArray: [{title: "fdajklæf"}, ...] };
  }

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }
}
