import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  
  // Single page application setup
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  
  
  // Round trip style application - Handlebars - Start
  // const app = await NestFactory.create<NestExpressApplication>(
  //   AppModule,
  // );
  // app.useStaticAssets(join(__dirname, '..', 'public'));
  // app.setBaseViewsDir(join(__dirname, '..', 'views'));
  // app.setViewEngine('hbs');
  // Round trip style application - Handlebars - End

  
  await app.listen(3005);
}
bootstrap();
