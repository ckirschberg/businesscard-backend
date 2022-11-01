import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BusinessCardController } from './business-card.controller';
import { BusinessCard, BusinessCardSchema } from './business-card.schema';
import { BusinessCardService } from './business-card.service';

@Module({
  imports: [
    MongooseModule.forFeature(
        [{ name: BusinessCard.name, schema: BusinessCardSchema }]
    )
  ],
  controllers: [BusinessCardController],
  providers: [BusinessCardService],
  exports: [BusinessCardService]
})
export class BusinessCardModule {}