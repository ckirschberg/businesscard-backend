import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { BusinessCardDto } from './../business-card/business-card.dto';
import { Business } from './business.schema';
import { BusinessService } from './business.service';
import { CreateBusinessDto } from './create-business.dto';

@Controller('business')
export class BusinessController {
  constructor(private businessService: BusinessService) {}

  @Get()
  findAll(): Promise<Business[]> {
    return this.businessService.findAll();
  }

  @Post()
  create(@Body() business: CreateBusinessDto): Promise<Business> {
    // console.log("business", business);

    return this.businessService.create(business);
  }

  // Business Cards
  @Post(':id/businesscards')
  addBusinessCard(
    @Param('id') id: string,
    @Body() businessCard: BusinessCardDto,
  ): Promise<Business> {
    // console.log("businessCard", businessCard);
    // console.log("business id", id);

    return this.businessService.addBusinessCard(id, businessCard);
  }
  @Delete(':id/businesscards/:bcId')
  deleteBusinessCard(
    @Param('id') id: string,
    @Param('bcId') bcId: string,
  ): Promise<Business> {
    console.log('businessCardId', bcId);
    console.log('business id', id);

    return this.businessService.deleteBusinessCard(id, bcId);
  }
}
