import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  
  // Single page application setup
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors(); // protection
  await app.listen(process.env.PORT || '80');
  //app.useGlobalGuards(new TestGuard());
  
  
  // Round trip style application - Handlebars - Start
  // const app = await NestFactory.create<NestExpressApplication>(
  //   AppModule,
  // );
  // app.useStaticAssets(join(__dirname, '..', 'public'));
  // app.setBaseViewsDir(join(__dirname, '..', 'views'));
  // app.setViewEngine('hbs');
  // Round trip style application - Handlebars - End

  
  // await app.listen(3005);
}
bootstrap();
