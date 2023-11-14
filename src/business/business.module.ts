import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BusinessController } from './business.controller';
import { Business, BusinessSchema } from './business.schema';
import { BusinessService } from './business.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Business.name, schema: BusinessSchema },
    ]),
  ],
  providers: [BusinessService],
  controllers: [BusinessController]
})
export class BusinessModule {}
